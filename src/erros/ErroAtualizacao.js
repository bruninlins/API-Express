import ErroBase from "./ErroBase.js";

class ErroAtualizacao extends ErroBase {
  constructor(mensagem = "Falha ao atualizar os dados!") {
    super(mensagem, 404);
  }
}

export default ErroAtualizacao;
