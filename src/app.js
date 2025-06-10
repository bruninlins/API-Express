import express from "express";
import cors from "cors"; // ✅ importa o cors
import conectaNaDataBase from "./config/dbconnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão feita com sucesso!");
});

const app = express();

app.use(cors());
app.use(express.json());

routes(app);

app.use(manipulador404);

app.use(manipuladorDeErros);

export default app;
