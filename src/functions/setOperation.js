const inquirer = require("inquirer");
const displayMessage = require("./displayMessage.js");
const exit = require("./exit.js");

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
            message: "Escolha o serviço: ",
            choices: options,
        })
        .then((resp) => {
            const action = resp["action"];

            //TODO: Tratar escolhas com um switch case
            if (action.includes(options[0])) {
                displayMessage();
            } else if (action.includes(options[4])){
                exit();
            }
        });
}

module.exports = setOperation;
