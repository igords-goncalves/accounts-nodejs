const inquirer = require("inquirer");
const exit = require("./exit.js");

const displayMessage = require("./displayMessage.js");
const getBalance = require("./getBalance.js");
const deposit = require("./deposit.js");
const withDraw = require("./withDraw.js");

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
                    getBalance();
                    break;
                case options[2]:
                    deposit();
                    break;
                case options[3]:
                    withDraw();
                    break;
                default:
                    exit();
            }
        });
}

module.exports = setOperation;
