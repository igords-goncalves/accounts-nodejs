const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

const solicitarOperacoes = require("./functions/Solicitar.js")
const exibirMensagensAoCriarConta = require("./functions/Mensagem.js")
const criarConta = require("./functions/Criar.js")
const validarConta = require ("./functions/Validar.js")
const criarArquivoDeConta = require ("./functions/Arquivo.js")
const continuarServicos = require ("./functions/Continuar.js")

module.exports = {
    solicitarOperacoes,
    exibirMensagensAoCriarConta,
    criarConta,
    validarConta,
    criarArquivoDeConta,
    continuarServicos,
};