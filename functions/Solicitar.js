const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

const exibirMensagensAoCriarConta = require("./Mensagem.js")
const criarConta = require("./Criar.js")

async function solicitarOperacoes() {

    console.log('Testando requisição')

    const escolhas = [                
        "Criar Conta",
        "Consultar Saldo",
        "Depositar",
        "Sacar",
        "Sair"
    ]

   await inquirer
        .prompt({
            type: "list",
            name: "action",
            message: "Escolha o serviço: ",
            choices: escolhas
        })
        .then((resposta) => {
            const action = resposta["action"];

            if (action.includes(escolhas)) {
                exibirMensagensAoCriarConta()
                criarConta()
            }
        });
}

module.exports = solicitarOperacoes;