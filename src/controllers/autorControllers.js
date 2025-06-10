import NaoEncontrado from "../erros/naoEcontrado.js";
import { autor } from "../models/index.js";

class AutorController {
  /* requisição de listar os dados */
  static async listarAutores(req, res, next) {
    try {
      const autorResultado = autor.find({});

      req.resultado = autorResultado;

      next();
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição!` });
    }
  }

  /* requisição de busca de dados */
  static async listarAutorPorId(req, res, next) {
    try {
      const id = req.params.id;

      const autorEncontrado = await autor.findById(id);

      if (autorEncontrado !== null) {
        res.status(200).json(autorEncontrado);
      } else {
        next(new NaoEncontrado("Id do autor não encontrado!"));
      }
    } catch (error) {
      next(error);
    }
  }

  /* requsição de cadastro de dados */
  static async cadastrarAutor(req, res, next) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", autor: novoAutor });
    } catch (error) {
      next(error);
    }
  }

  /* requisição de edição de dados */
  static async AtualizarAutor(req, res, next) {
    try {
      const id = req.params.id;
      const autorResultado = await autor.findByIdAndUpdate(id, req.body);

      if (autorResultado !== null) {
        res.status(200).json({ message: "Livro atualizado" });
      } else {
        next(new NaoEncontrado("Id do autor não localizado"));
      }
    } catch (error) {
      next(error);
    }
  }

  /* requisição de deletar de dados */
  static async deletarAutor(req, res, next) {
    try {
      const id = req.params.id;
      const autorResultado = await autor.findByIdAndDelete(id, req.body);

      if (autorResultado !== null) {
        res.status(200).json({ message: "Livro deletado com sucesso!" });
      } else {
        next(new NaoEncontrado("Id do autor não localizado!"));
      }
    } catch (error) {
      next(error);
    }
  }
}

export default AutorController;
