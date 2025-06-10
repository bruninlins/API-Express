<h1 align="center">📚 Node Express - API de Livros e Autores</h1>

Este projeto é uma API RESTful desenvolvida com Node.js, Express e MongoDB (via Mongoose), com o objetivo de praticar requisições HTTP, organização de código em camadas e tratamento robusto de erros.

<br>

<h2>🛠️ Tecnologias</h2>

<br>

<img align="center" alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img align="center" alt="Express" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/> <img align="center" alt="MongoDB" src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/> <img align="center" alt="Mongoose" src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white"/> <img align="center" alt="ESLint" src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"/> <img align="center" alt="Dotenv" src="https://img.shields.io/badge/Dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black"/> <img align="center" alt="Nodemon" src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white"/>

<br>

<h1>🚀 Funcionalidades</h1>

A API permite:

<h3>📖 CRUD completo de livros (listar, buscar, cadastrar, atualizar e remover)

<h3>✍️ CRUD de autores

<h3>🔎 Busca filtrada por título, editora, número de páginas e nome do autor

<h3>⚙️ Paginação de resultados

<h3>🧱 Validação de dados e tratamento centralizado de erros

<br>

<h1>Instalação</h1>

```bash
git clone [https://github.com/seu-usuario/node-express.git](https://github.com/bruninlins/API-Express.git)
cd node-express
npm install
```
Crie um arquivo .env na raiz do projeto com as variáveis de ambiente:
```bash
DB_CONNECTION_STRING=mongodb://localhost:27017/nome-do-banco
PORT=3000
```

<br>


<h1>▶️ Scripts disponíveis</h1>

| Comando        | Descrição                               |
| -------------- | --------------------------------------- |
| `npm run dev`  | Inicia o servidor com  `nodemon`         |
| `npm run lint` | Executa o ESLint para análise de código |

<br>

<h1>🗂️ Estrutura do Projeto</h1>

```plaintext
src/
├── config/                          # Conexão com banco MongoDB
│   └── dbconnect.js
├── controllers/                     # Lógica de negócios (autores/livros)
│   ├── autorControllers.js
│   └── livroControllers.js
├── erros/                           # Classes de erros customizadas
│   ├── ErroBase.js
│   ├── ErroAtualizacao.js
│   ├── ErroValidacao.js
│   ├── NaoEncontrado.js
│   └── RequisicaoIncorreta.js
├── middlewares/                     # Middlewares personalizados
│   ├── manipulador404.js
│   ├── manipuladorDeErros.js
│   └── paginar.js
├── models/                          # Modelos Mongoose
│   ├── Autor.js
│   ├── livros.js
│   ├── index.js                     # Exporta modelos para uso centralizado
│   └── validadorGlobal.js
├── routes/                          # Arquivos de rotas
│   ├── autoresRoutes.js
│   ├── livrosRoutes.js
│   └── index.js                     # Roteador principal
├── app.js                           # Configuração principal do app

```

<br>

<h1>📚 Exemplo de Requisição</h1>

Buscar livros com filtro:

```http
GET /livros?editora=Alura&minPag=100&nomeAutor=Paulo

```

Retorno

```
[
  {
    "titulo": "Node.js na Prática",
    "editora": "Alura",
    "paginas": 150,
    "autor": {
      "nome": "Paulo Silveira"
    }
  }
]
```

## 👨‍💻 Autor
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/brunotorresdev/)




