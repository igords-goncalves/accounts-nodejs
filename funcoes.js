const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

const solicitarOperacoes = require("./components/Solicitar.js")
const exibirMensagensAoCriarConta = require("./components/Mensagem.js")
const criarConta = require("./components/Criar.js")
const validarConta = require ("./components/Validar.js")
const criarArquivoDeConta = require ("./components/Arquivo.js")
const continuarServicos = require ("./components/Continuar.js")

module.exports = {
    solicitarOperacoes,
    exibirMensagensAoCriarConta,
    criarConta,
    validarConta,
    criarArquivoDeConta,
    continuarServicos,
};