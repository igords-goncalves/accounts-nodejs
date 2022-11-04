const chalk = require("chalk");
const fs = require("fs");

function checkAccount(nomeDaConta) {
    if (!fs.existsSync("db_contas")) return fs.mkdirSync("db_contas");

    if (fs.existsSync(`db_contas/${nomeDaConta}.json`)) {
        console.log(chalk.bgRed.black("Conta já existe, escolha outro nome."));
    }
}

module.exports = checkAccount;
