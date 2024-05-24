# API de Questionário e Cursos

## Descrição
Esta é uma API para gerenciar questionários de usuários e recomendar cursos com base nas respostas fornecidas. Os usuários podem responder ao questionário e, em seguida, acessar os cursos recomendados.

## Como Usar

### Instalação
1. Clone este repositório em sua máquina local.
2. Instale as dependências do projeto executando `npm install`.

### Execução
1. Inicie o servidor executando `npm start`.
2. Acesse a API em `http://localhost:3000`.

### Rotas


#### Criando usuario
- **URL:** `/user`
- **Método:** `POST`
- **Parâmetros de URL:**
  - `user`
- **Corpo da Requisição:** JSON com as respostas do questionário
  ```json
  {
      "name": "Gideon Alves",
      "username": "GidsDev",
      "email": "gideon@gmail.com",
      "password": "1235"
  }


#### Responder ao Questionário
- **URL:** `/form/response/:userId`
- **Método:** `POST`
- **Parâmetros de URL:**
  - `userId`: ID do usuário
- **Corpo da Requisição:** JSON com as respostas do questionário
  ```json
  {
    "age": 25,
    "engineeringField": "Mechanical",
    "goal": "Professional Development"
  }
