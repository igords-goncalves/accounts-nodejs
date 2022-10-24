const chalk = require("chalk");

function exibirMensagensAoCriarConta() {
    console.log(chalk.bgGreen.black(`Parabéns por escolher nosso banco.`));
    console.log(chalk.green("Defina as opções da sua conta: "));
}

module.exports = exibirMensagensAoCriarConta;