# Encurtador de URL - API Node.js

Uma API simples e funcional para encurtamento de URLs, desenvolvida com Node.js e Express. Este projeto faz parte do meu portfólio de estudos em backend.

# Funcionalidades

- Encurtamento de URL: Recebe uma URL longa e gera um código aleatório de 5 caracteres.
- Redirecionamento: Ao acessar a URL curta, o usuário é redirecionado automaticamente para o destino original.
- Validação: Garante que apenas requisições com URLs válidas sejam processadas.

# Tecnologias Utilizadas

- Node.js: Ambiente de execução JavaScript no servidor.
- Express: Framework web para criação de rotas e middlewares.
- JavaScript (ES6+): Lógica de programação e manipulação de dados.

# Como executar o projeto

1. Clone o repositório:
   bash
   git clone https://github.com/SEU_USUARIO/encurtador-url.git

2. Instale as dependecias:
  npm install

3. Inicie o servidor:
  node index.js

4. A API estará disponivel em http://localhost:3000

# Endpoints

1. Encurtar URL

Rota: POST /encurtar
JSON:
{
  "urlOriginal": "https://www.youtube.com"
}

Resposta de Sucesso(201 Created):
{
  "urlOriginal": "https://www.youtube.com",
  "urlEncurtada": "http://localhost:3000/a1b2c"
}

2. Redirecionar

Rota: GET /:codigo
Descrição Redireciona o usuario para a URL original associada ao codigo.
