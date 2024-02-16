pipeline {
    agent any
    environment {
                DOCKERHUB_CREDENTIALS = credentials('eastyler-dockerhub')
        // RANCHER_CREDS = credentials('3281ccd9-d78c-4108-81e6-057fd7c86ec8')
        NEXUS_CREDS = credentials('nexus-user-credentials')
        NEXUS_DOCKER_REPO = '172.16.5.13:8082'
    }
    stages {
        // stage('Test') {
        //     steps {
        //         echo 'Testing...'
        //         sh '''npm config set registry http://172.16.5.13:8081/repository/npmprox2/
        //              cd ./backend
        //               npm install
        //               npm view jest
        //               npm test'''
        //     }
        // }
        stage('Scan') {
            steps {
                script {
                    def scannerHome = tool 'SonarScanner'
                    withSonarQubeEnv(installationName: 'ngin-scanner') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
        stage('Quality Gate') {
            steps {
                        waitForQualityGate abortPipeline: true
            }
        }
        stage('Login') {
            steps {
                echo 'Logging in...'
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Build') {
            steps {
                echo 'Building docker image'
                sh 'docker buildx build --platform linux/amd64 -t eastyler/nginsample:jenkins ./my-app'
                sh 'docker buildx build --platform linux/amd64 -t eastyler/backend:jenkins ./backend'
            }
        }
        // stage('Build') {
        //     steps {
        //         echo 'Building docker image'
        //         sh 'docker buildx build --platform linux/amd64 -t 172.16.5.13:8082/nginsample:jenkins ./my-app'
        //         sh 'docker buildx build --platform linux/amd64 -t 172.16.5.13:8082/backend:jenkins ./backend'
        //     }
        // }
        stage('Push') {
                steps {
                    script {
                        echo 'Pushing...'
                        sh 'docker push eastyler/nginsample:jenkins'
                        sh 'docker push eastyler/backend:jenkins'
                    }
                }
        }
        // stage('Push') {
        //         steps {
        //             script {
        //                 echo 'Pushing...'
        //                 sh 'docker push 172.16.5.13:8082/nginsample:jenkins'
        //                 sh 'docker push 172.16.5.13:8082/backend:jenkins'
        //             }
        //         }
        // }
        stage('helm chart deployment') {
                steps {
                    withKubeCredentials([
            [credentialsId: 'kubeconfig']
        ]) {
                        sh '''helm repo add cetic https://cetic.github.io/helm-charts
                              helm repo update
                              helm upgrade --install my-release-adminer cetic/adminer -n jenkins
                              helm upgrade --install my-release-mariadb --set auth.rootPassword=example,auth.database=attempt oci://registry-1.docker.io/bitnamicharts/mariadb -n jenkins
                              helm upgrade --install my-release-backend ./node-chart -n jenkins
                              helm upgrade --install my-release-react ./react-chart -n jenkins
                              '''
        } }
                }
        // stage('Build') {
        //     steps {
        //         echo 'Building docker image'
        //         sh 'docker build -t 172.16.5.13:8082/myapp:works .'
        //     }
        // }
        // login not needed? allow anonymous pul request? online (If checked, the repository accepts incoming requests)?
        // stage('Login') {
        //     steps {
        //         echo 'Logging in... nexus docker repo'
        //         script {
        //             withCredentials([usernamePassword(credentialsId: 'nexus-user-credentials', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
        //                 sh ' echo $PASS | docker login -u $USER --password-stdin $NEXUS_DOCKER_REPO'
        //             }
        //         }
        //     }
        // }
        // stage('Push') {
        //     steps {
        //         script {
        //             echo 'Pushing...'
        //             sh 'docker push 172.16.5.13:8082/myapp:works'
        //         }
        //     }
        // }
        //         stage('Deploy') {
        //             steps {
        //                 sshagent(credentials: ['ssh_agent']) {
        //                     sh '''ssh root@172.16.5.16 << 'EOF'
        //                           docker compose down
        //                           docker pull 172.16.5.13:8082/myapp:works
        //                           docker compose up -d
        //                           exit
        // EOF
        //                           '''
        //                 }
        //             }
        //         }
        }
    post {
        always {
            sh 'docker logout'
        }
    }
    }
