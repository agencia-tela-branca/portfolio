pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = "agenciatelabranca"
        APP_NAME = "site-principal-atb"
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
                        
                        // Push da Imagem Frontend com retry
                        retry(3) {
                            sh "docker push ${FRONTEND_IMAGE}:${tag}"
                            sh "docker push ${FRONTEND_IMAGE}:latest"
                        }
                    }
                }
            }
        }

        stage('Deploy Production') {
            steps {
                echo 'Realizando deploy no ambiente de Produção...'
                script {
                    // Copiamos o .env (verificando os caminhos padrão do servidor/jenkins)
                    sh 'cp /var/jenkins_home/site-principal-atb/.env .env || cp /home/user/projects/site-principal-atb/frontend/.env .env || cp /home/user/projects/site-principal-atb/.env .env || true'
                    
                    // Limpeza de containers legados para evitar conflito de rede/alias
                    sh "docker rm -f site-principal-atb-frontend site-principal-atb-tunnel portfolio-frontend-v2 || true"
                    
                    // Deploy via Docker Compose ativando o perfil de tunnel e injetando o .env
                    sh "docker compose -p site-principal-atb --env-file .env --profile tunnel pull || true"
                    sh "docker compose -p site-principal-atb --env-file .env --profile tunnel up -d --remove-orphans"
                    
                    // Limpa imagens antigas (dangling) sem apagar o cache útil do host
                    sh "docker image prune -f || true"
                    
                    echo 'Aguardando serviços ficarem saudáveis...'
                    sh 'sleep 15'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo 'Pipeline Site Principal ATB finalizado com sucesso!'
        }
        failure {
            echo 'Ocorreu um erro no pipeline do Site Principal ATB. Verifique os logs.'
        }
    }
}
