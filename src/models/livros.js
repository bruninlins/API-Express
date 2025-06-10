import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: {
      type: String,
      required: [true, "O título do livro é obrigatorio!"],
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigadorio!"],
      enum: {
        values: ["Casa do codigo", "Alura"],
        message: "A editora {VALUE} não é um valor permitido!",
      },
    },
    preco: { type: Number },
    paginas: {
      type: Number,
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 2000;
        },
        message:
          "O numero de paginas deve estar entre 10 e 2000. O valor informado foi: {VALUE}",
      },
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O(a) autor(a) é obrigadorio!"],
    },
  },
  { versionKey: false }
);

const livros = mongoose.model("livros", livroSchema);

export default livros;
