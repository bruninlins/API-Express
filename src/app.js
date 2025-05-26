import express from "express";
import conectaNaDataBase from "./config/dbconnect.js";
import livro from "./models/livros.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão feita com sucesso!");
});

const app = express();
app.use(express.json());

/* Tela inicial do localhost */
app.get("/", (req, res) => {
  res.status(200).send("curso de Node.js com express");
});

/* requisição onde vai aparecer todos os livros no "db" */
app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find({});
  res.status(200).json(listaLivros);
});

/* Requisição de procurar por "id" */
app.get("/livros/:id", (req, res) => {
  const index = buscaLivros(req.params.id);
  res.status(200).json(livros[index]);
});

/* Requisição de adicionar || cadastrar */
app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso!");
});

/* Requisiçao de edição */
app.put("/livros/:id", (req, res) => {
  const index = buscaLivros(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

/* Requisição de delete */
app.delete("/livros/:id", (req, res) => {
  const index = buscaLivros(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro removido com sucesso!");
});

export default app;
