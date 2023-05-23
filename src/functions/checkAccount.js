const chalk = require("chalk");
const fs = require("fs");

function checkAccount(accountName) {
    if (!fs.existsSync("db_contas")) return fs.mkdirSync("db_contas");

    if (fs.existsSync(`db_contas/${accountName}.json`)) {
        console.log(chalk.bgRed.black("Conta já existente, escolha outro nome."));
    }
}

module.exports = checkAccount;
