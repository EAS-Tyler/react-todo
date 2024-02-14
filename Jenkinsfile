pipeline {
    agent any
    // environment {
    //     NEXUS_CREDS = credentials('nexus-user-credentials')
    //     NEXUS_DOCKER_REPO = '172.16.5.13:8082'
    // }
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
                    withSonarQubeEnv(installationName: 'server-sonar') {
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
