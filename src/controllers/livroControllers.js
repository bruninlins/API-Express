import livro from "../models/livros.js";

class LivroController {
  /* requisição de listar os dados */
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição!` });
    }
  }

  /* requisição de busca de dados */
  static async listarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao buscar livro!` });
    }
  }

  /* requsição de cadastro de dados */
  static async cadastrarLivro(req, res) {
    try {
      const novoLivro = await livro.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", livro: novoLivro });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar livro!` });
    }
  }

  /* requisição de edição de dados */
  static async AtualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na atualização!` });
    }
  }

  /* requisição de deletar de dados */
  static async deletarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id, req.body);
      res.status(200).json({ message: "Livro deletado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao excluir o livro!` });
    }
  }
}

export default LivroController;
