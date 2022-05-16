const func = require('./funcoes')

func.solicitarOperacoes()
    .then(func.exibirMensagensAoCriarConta)
    .then(func.criarConta)
    .then(func.validarConta)
    .then(func.criarArquivoDeConta)
    // .then(func.continuarServicos)

    .catch(err => console.log(err))