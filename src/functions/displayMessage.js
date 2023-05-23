const chalk = require("chalk");
const createAccount = require("./createAccount");
const continueServices = require("./continueServices");

function displayMessage(continueServices) {
    console.log(chalk.bgGreen.black(`Parabéns por escolher nosso banco.`));
    console.log(chalk.green("Defina as opções da sua conta: "));

    createAccount(continueServices)
}

module.exports = displayMessage;