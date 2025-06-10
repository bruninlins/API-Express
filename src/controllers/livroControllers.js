import NaoEncontrado from "../erros/naoEcontrado.js";
import { autor, livros } from "../models/index.js";

class LivroController {
  /* requisição de listar os dados */
  static async listarLivros(req, res, next) {
    try {
      const buscaLivros = livros.find();

      req.resultado = buscaLivros;

      next();
    } catch (error) {
      next(error);
    }
  }

  /* requisição de busca de dados */
  static async listarLivroPorId(req, res, next) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livros
        .findById(id)
        .populate("autor", "nome")
        .exec();

      if (livroEncontrado !== null) {
        res.status(200).json(livroEncontrado);
      } else {
        next(new NaoEncontrado("Id do livro não localizado!"));
      }
    } catch (error) {
      next(error);
    }
  }

  /* requsição de cadastro de dados */
  static async cadastrarLivro(req, res, next) {
    try {
      let livro = new livros(req.body);

      const livrosResultado = await livro.save();

      res.status(201).send(livrosResultado.toJSON());
    } catch (error) {
      next(error);
    }
  }

  /* requisição de edição de dados */
  static async AtualizarLivro(req, res, next) {
    try {
      const id = req.params.id;

      const livroResultado = await livros.findByIdAndUpdate(id, {
        $set: req.body,
      });

      if (livroResultado !== null) {
        res.status(200).json({ message: "Livro atualizado" });
      } else {
        next(new NaoEncontrado("Id do livro não encontrado!"));
      }
    } catch (error) {
      next(error);
    }
  }

  /* requisição de deletar de dados */
  static async deletarLivro(req, res, next) {
    try {
      const id = req.params.id;
      const livroResultado = await livros.findByIdAndDelete(id);

      if (livroResultado !== null) {
        res.status(200).json({ message: "Livro deletado com sucesso!" });
      } else {
        next(new NaoEncontrado("Id não do livro não localizado"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async listarLivrosPorFiltro(req, res, next) {
    try {
      const busca = await processoBusca(req.query);

      if (busca !== null) {
        const livrosResultado = livros.find(busca).populate("autor");

        req.resultado = livrosResultado;

        next();
      } else {
        res.status(200).send([]);
      }
    } catch (error) {
      next(error);
    }
  }
}

async function processoBusca(parametros) {
  const { editora, titulo, minPag, maxPag, nomeAutor } = parametros;

  let busca = {};

  if (editora) busca.editora = editora;
  if (titulo) busca.titulo = { $regex: titulo, $options: "i" };

  if (minPag || maxPag) busca.paginas = {};

  if (minPag) busca.paginas.$gte = minPag;
  if (maxPag) busca.paginas.$lte = maxPag;

  if (nomeAutor) {
    const autorr = await autor.findOne({ nome: nomeAutor });

    if (autorr !== null) {
      busca.autor = autorr._id;
    } else {
      busca = null;
    }
  }

  return busca;
}

export default LivroController;
