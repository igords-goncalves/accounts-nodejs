const inquirer = require("inquirer");
const displayMessage = require("./displayMessage.js");
const exit = require("./exit.js");
const checkBalance = require("./checkBalance.js");

function setOperation() {
    const options = [
        "Criar Conta",
        "Consultar Saldo",
        "Depositar",
        "Sacar",
        "Sair",
    ];
    console.clear();
    inquirer
        .prompt({
            type: "list",
            name: "action",
            message: "Escolha o serviço:",
            choices: options,
        })
        .then((resp) => {
            const action = resp["action"];

            switch (action) {
                case options[0]:
                    displayMessage();
                    break;
                case options[1]:
                    checkBalance();
                    break;
                case options[2]:
                    break;
                case options[3]:
                    break;
                default:
                    exit();
            }
        });
}

module.exports = setOperation;
