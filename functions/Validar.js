const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

function validarConta(nomeDaConta) {
    if (!fs.existsSync("db_contas")) fs.mkdirSync("db_contas");

    if (fs.existsSync(`db_contas/${nomeDaConta}.json`)) {
        console.log(chalk.bgRed.black("Conta já existe, escolha outro nome."));
    }
}

module.exports = validarConta;