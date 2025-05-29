import { autor } from "../models/Autor.js";

class AutorController {
  /* requisição de listar os dados */
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição!` });
    }
  }

  /* requisição de busca de dados */
  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao buscar livro!` });
    }
  }

  /* requsição de cadastro de dados */
  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", autor: novoAutor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar livro!` });
    }
  }

  /* requisição de edição de dados */
  static async AtualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na atualização!` });
    }
  }

  /* requisição de deletar de dados */
  static async deletarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id, req.body);
      res.status(200).json({ message: "Livro deletado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao excluir o livro!` });
    }
  }
}

export default AutorController;
