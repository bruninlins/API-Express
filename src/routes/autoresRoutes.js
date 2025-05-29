import express from "express";
import autorControllers from "../controllers/autorControllers.js";

const routes = express.Router();

routes.get("/autores", autorControllers.listarAutores);
routes.get("/autores/:id", autorControllers.listarAutorPorId);
routes.post("/autores/", autorControllers.cadastrarAutor);
routes.put("/autores/:id", autorControllers.AtualizarAutor);
routes.delete("/autores/:id", autorControllers.deletarAutor);

export default routes;
