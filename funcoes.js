const solicitarOperacoes = require("./functions/Solicitar.js")
const validarConta = require ("./functions/Validar.js")
const criarArquivoDeConta = require ("./functions/Arquivo.js")
const continuarServicos = require ("./functions/Continuar.js")

module.exports = {
    solicitarOperacoes,
    validarConta,
    criarArquivoDeConta,
};