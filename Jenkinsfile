pipeline {
    agent any
    environment {
        RANCHER_CREDS = credentials('3281ccd9-d78c-4108-81e6-057fd7c86ec8')
    //     NEXUS_CREDS = credentials('nexus-user-credentials')
    //     NEXUS_DOCKER_REPO = '172.16.5.13:8082'
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
        // stage('Scan') {
        //     steps {
        //         script {
        //             def scannerHome = tool 'SonarScanner'
        //             withSonarQubeEnv(installationName: 'ngin-scanner') {
        //                 sh "${scannerHome}/bin/sonar-scanner"
        //             }
        //         }
        //     }
        // }
        // stage('Quality Gate') {
        //     steps {
        //                 waitForQualityGate abortPipeline: true
        //     }
        // }
        stage('rancher connection') {
            steps {
                script {
                    sh 'kubectl config view'
                    sh 'helm ls -n helmtest'
                    // sh 'echo $RANCHER_CREDS'

                }            }
            }
        //     stage('view config') {
        //         steps {
        //             withKubeCredentials([
        //     [credentialsId: 'kubeconfig']
        // ]) {
        //                 sh 'kubectl config view'
        // } }
        //         }
    //     stage('view config') {
    //         steps {
    //             withCredentials([
    //     [credentialsId: 'kubeconfig']
    // ]) {
    //                 sh 'kubectl config view'
    // } }
    //         }
        // stage('k8s command test') {
        //     steps {
        //         withCredentials([usernamePassword(credentialsId: '3281ccd9-d78c-4108-81e6-057fd7c86ec8', usernameVariable: 'token-ghqdb', passwordVariable: 'PASSWORD')]) {
        //             sh 'helm ls -n helmtest'
        //         }
        //     }
        // }
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
    // post {
    //     always {
    //         sh 'docker logout'
    //     }
    // }
    }
