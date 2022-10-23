const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

function criarArquivoDeConta(nomeDaConta) {
    const arquivo = fs.writeFileSync(
        `db_contas/${nomeDaConta}.json`,
        "(balance: 0)",
        (err) => {
            console.log(`Erro: ${err}`);
        }
    );
    return arquivo;
}
module.exports = criarArquivoDeConta;