const chalk = require("chalk");
const createAccount = require("./createAccount.js");

function displayMessage() {
    console.log(chalk.bgGreen.black(`Parabéns por escolher nosso banco.`));
    console.log(chalk.green("Defina as opções da sua conta: "));

    createAccount()
}

module.exports = displayMessage;