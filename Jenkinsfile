pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/jayashreenarayanan31-sketch/cloud-devops-project.git'
            }
        }

        stage('Verify Project') {
            steps {
                sh 'echo "Project downloaded successfully"'
                sh 'ls -la'
                sh 'docker --version'
                sh 'docker compose version'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Package Application') {
            steps {
                sh 'rm -f cloud-devops-project.zip'
                sh 'zip -r cloud-devops-project.zip docker-compose.yml website1 website2 website3 website4 router nginx'
            }
        }

    }

    post {
        success {
            echo 'CI pipeline completed successfully!'
        }

        failure {
            echo 'CI pipeline failed.'
        }
    }
}
