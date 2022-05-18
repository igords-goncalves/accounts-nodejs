const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

const validarConta = require("./Validar.js")
const criarArquivoDeConta = require("./Arquivo.js")
const continuarServicos = require("./Continuar.js")

function criarConta() {
    inquirer
        .prompt({
            name: "nomeDaConta",
            message: "Digite um nome para conta: ",
        })
        .then((resp) => {
            const nomeDaConta = resp["nomeDaConta"];
            console.info(`Conta de nome: ${nomeDaConta}`)
            validarConta(nomeDaConta)
            criarArquivoDeConta(nomeDaConta)
            continuarServicos()
        })
}

module.exports = criarConta;