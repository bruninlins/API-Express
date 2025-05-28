import express from "express";
import conectaNaDataBase from "./config/dbconnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão feita com sucesso!");
});

const app = express();
routes(app);

/* Requisição de delete */
app.delete("/livros/:id", (req, res) => {
  const index = buscaLivros(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro removido com sucesso!");
});

export default app;
