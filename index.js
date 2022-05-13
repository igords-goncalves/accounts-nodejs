const func = require('./funcoes')

func.operacoes()
    .then(func.exibiMensagensCriarConta)
    .then(func.criaConta)
    .then(func.validarConta)
    .then(func.criarArquivoDeConta)

    .catch(err => console.log(err))
