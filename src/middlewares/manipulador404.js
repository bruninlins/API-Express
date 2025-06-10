import NaoEncontrado from "../erros/naoEcontrado.js";

/* eslint-disable no-unused-vars */
function manipulador404(req, res, next) {
  const erro404 = new NaoEncontrado();
  next(erro404);
}

export default manipulador404;
