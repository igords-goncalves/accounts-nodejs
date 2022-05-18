const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

function exibirMensagensAoCriarConta() {
    console.log(chalk.bgGreen.black(`Parabéns por escolher nosso banco.`));
    console.log(chalk.green("Defina as opções da sua conta: "));
}

module.exports = exibirMensagensAoCriarConta;