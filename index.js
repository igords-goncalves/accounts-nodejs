const func = require('./funcoes')

func.solicitarOperacoes()
    .then(func.exibirMensagensAoCriarConta)
    .then(func.criarConta)
    // .then(func.continuarServicos)

    .catch(err => console.log(err))