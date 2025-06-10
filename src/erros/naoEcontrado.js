import ErroBase from "./ErroBase.js";

class Naoencontrado extends ErroBase {
  constructor(menssagem = "Id do autor não encontrado!") {
    super(menssagem, 404);
  }
}

export default Naoencontrado;
