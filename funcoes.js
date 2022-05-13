const inquirer = require("inquirer");

const chalk = require("chalk");

const fs = require("fs");

async function operacoes(fn) {
    await inquirer
        .prompt([
            {
                name: "cliente",
                message: "Digite seu nome: ",
            },
            {
                type: "list",
                name: "action",
                message: "Escolha o serviço: ",
                choices: [
                    "Criar Conta",
                    "Consultar Saldo",
                    "Depositar",
                    "Sacar",
                    "Sair",
                ],
            },
        ])
        .then((resposta) => {
            const action = resposta["action"];

            if (action === "Criar Conta") fn;
        })
        .catch((err) => console.log(err));
}

function criarConta(resposta) {
    console.log(
        chalk.bgRed(`Parabéns por escolher nosso banco ${resposta}.`) //! capturar nome
    );
    console.log(chalk.green("Defina as opções da sua conta: "));
}

module.exports = {
    operacoes,
    criarConta,
};
