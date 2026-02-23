pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = "agenciatelabranca"
        APP_NAME = "portfolio"
        BACKEND_IMAGE = "${DOCKER_REGISTRY}/${APP_NAME}-backend"
        FRONTEND_IMAGE = "${DOCKER_REGISTRY}/${APP_NAME}-frontend"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Build & Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
                    script {
                        def tag = env.BUILD_NUMBER
                        
                        // Login no Docker Hub
                        sh "echo \$DOCKER_PASS | docker login -u \$DOCKER_USER --password-stdin"
                        
                        // Build da Imagem Frontend
                        sh "docker build --no-cache -t ${FRONTEND_IMAGE}:${tag} -t ${FRONTEND_IMAGE}:latest ./_frontend"
                        
                        // Push da Imagem Frontend
                        sh "docker push ${FRONTEND_IMAGE}:${tag}"
                        sh "docker push ${FRONTEND_IMAGE}:latest"
                    }
                }
            }
        }

        stage('Deploy Production') {
            steps {
                echo 'Realizando deploy no ambiente de Produção...'
                script {
                    // Copiamos o .env se necessário (ajuste conforme o host)
                    sh 'cp /home/user/portfolio/.env .env || true'
                    
                    // Deploy via Docker Compose
                    sh "docker compose -p portfolio pull"
                    sh "docker compose -p portfolio up -d"
                    
                    echo 'Aguardando serviços ficarem saudáveis...'
                    sh 'sleep 10'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo 'Pipeline Portfolio finalizado com sucesso!'
        }
        failure {
            echo 'Ocorreu um erro no pipeline do Portfolio. Verifique os logs.'
        }
    }
}
