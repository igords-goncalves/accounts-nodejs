const inquirer = require("inquirer");

const displayMessage = require("./displayMessage.js");

async function setOperation() {
    const escolhas = [
        "Criar Conta",
        "Consultar Saldo",
        "Depositar",
        "Sacar",
        "Sair",
    ];

    await inquirer
        .prompt({
            type: "list",
            name: "action",
            message: "Escolha o serviço: ",
            choices: escolhas,
        })
        .then((resp) => {
            const action = resp["action"];

            if (action === escolhas[0]) {
                displayMessage();
            }
        });
}

module.exports = setOperation;
