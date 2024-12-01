# To-Do List API

Uma API RESTful para gerenciar tarefas, desenvolvida com Node.js, Express e Sequelize. A API suporta autenticação com JWT, manipulação de usuários e gerenciamento de tarefas com um banco de dados PostgreSQL.

## 📋 Sumário

- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Uso](#-uso)
- [Rotas/Endpoints](#-rotasendpoints)
- [Licença](#-licença)

---

## 🚀 Tecnologias Utilizadas

### **Back-End**
- **Node.js**: Plataforma JavaScript para desenvolvimento do servidor.
- **Express.js**: Framework minimalista para criação de APIs.
- **Sequelize**: ORM para integração com bancos de dados relacionais.
- **PostgreSQL**: Banco de dados utilizado para persistência.
- **JWT (JSON Web Token)**: Para autenticação e autorização.
- **bcryptjs**: Para criptografar senhas.

### **Justificativas**
- **Node.js e Express**: Proporcionam alta performance e facilidade no desenvolvimento de APIs.
- **Sequelize**: Abstrai operações de banco de dados, reduzindo a complexidade de consultas SQL.
- **PostgreSQL**: Banco robusto e confiável, ideal para sistemas relacionais.
- **JWT**: Garante segurança na autenticação sem armazenar sessões no servidor.

---

## ✅ Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (v14 ou superior)
- [PostgreSQL](https://www.postgresql.org/) (v12 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

---

## 📦 Instalação

1. **Clone o repositório**
   ```bash
   git clone <URL_DO_REPOSITÓRIO>
   cd to-do-list
   
2. **Instale as dependências**
   ```bash
   npm install
   
3. **Configure as variáveis de ambiente**
   Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:
   ```bash
   DB_NAME=<nome_do_banco>
   DB_USER=<usuario_do_banco>
   DB_PASSWORD=<senha_do_banco>
   DB_HOST=<host_do_banco>
   JWT_SECRET=<chave_secreta_jwt>
   PORT=3000

4. **Inicie o servidor**
   ```bash
   npm run start
   
5. **Teste a API**
   A API estará rodando em http://localhost:3000

## 🔗 Rotas/Endpoints
*Autenticação:*

Registrar Usuário
- URL: /auth/register
- Método: POST
- Body:
  ```bash
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
- Resposta:
  ```bash
  {
    "message": "User registered",
    "user": {
      "id": "number",
      "username": "string",
      "email": "string"
    }
  }

Login de Usuários:
- URL: /auth/login
- Método: POST
- Body:
  ```bash
  {
    "email": "string",
    "password": "string"
  }
- Resposta:
  ```bash
  {
    "message": "Success on Login!",
    "token": "string"
  }

*Tarefas*

- Headers:
  ```bash
  {
    "Authorization": "Bearer <token>"
  }

Criar Tarefa:
- URL: /task
- Método: POST
- Body:
  ```bash
  {
    "title": "string",
    "description": "string"
  }
- Resposta:
  ```bash
  {
    "id": "number",
    "title": "string",
    "description": "string",
    "status": "boolean",
    "userId": "number"
  }

Listar Tarefas:
- URL: /task
- Método: GET
- Resposta:
  ```bash
  [
    {
      "id": "number",
      "title": "string",
      "description": "string",
      "status": "boolean",
      "userId": "number"
    }
  ]

Atualizar Tarefa:
- URL: /task/:id
- Método: PUT
- Body:
  ```bash
  {
    "title": "string",
    "description": "string",
    "status": "boolean"
  }
- Resposta:
  ```bash
  {
    "id": "number",
    "title": "string",
    "description": "string",
    "status": "boolean",
    "userId": "number"
  }

Deletar Tarefa:
- URL: /task/:id
- Método: DELETE
- Resposta: 204 No Content

## 📜 Licença
*Este projeto está sob a licença ISC.*
Esse arquivo fornece uma documentação completa com instruções claras para configurar e usar sua API.
