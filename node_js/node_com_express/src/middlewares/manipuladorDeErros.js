import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ErroValidacao from "../erros/ErroValidacao.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";

function manipuladorDeErros(erro, req, res, next){
    console.log(erro); //imprime o erro para pessoa desenvolvedora
    if(erro instanceof mongoose.Error.CastError){
      new RequisicaoIncorreta().enviarResposta(res);
    }else if(erro instanceof mongoose.Error.ValidationError){
        new ErroValidacao(erro).enviarResposta(res);
    }else if(erro instanceof NaoEncontrado){
      erro.enviarResposta(res);
    } else{
      new ErroBase().enviarResposta(res);
    }
}

export default manipuladorDeErros;