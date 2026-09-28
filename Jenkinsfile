pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/jayashreenarayanan31-sketch/cloud-devops-projects.git'
            }
        }

        stage('Build') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Package') {
            steps {
                sh 'rm -f cloud-devops-project.zip'
                sh 'zip -r cloud-devops-project.zip docker-compose.yml website1 website2 website3 website4 router nginx'
            }
        }

        stage('Deploy to Elastic Beanstalk') {
            steps {
                sh '''
                    BUCKET=$(aws elasticbeanstalk create-storage-location \
                      --region ap-southeast-2 \
                      --query S3Bucket \
                      --output text)

                    aws s3 cp cloud-devops-project.zip \
                      s3://$BUCKET/jenkins/cloud-devops-${BUILD_NUMBER}.zip

                    aws elasticbeanstalk create-application-version \
                      --application-name cloud-devops-project \
                      --version-label jenkins-${BUILD_NUMBER} \
                      --source-bundle S3Bucket=$BUCKET,S3Key=jenkins/cloud-devops-${BUILD_NUMBER}.zip \
                      --region ap-southeast-2

                    aws elasticbeanstalk update-environment \
                      --environment-name cloud-devops-prod \
                      --version-label jenkins-${BUILD_NUMBER} \
                      --region ap-southeast-2
                '''
            }
        }
    }

    post {
        success {
            echo 'CI/CD DEPLOYMENT SUCCESSFUL!'
        }
        failure {
            echo 'CI/CD DEPLOYMENT FAILED!'
        }
    }
}
