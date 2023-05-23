const inquirer = require("inquirer");
const continueServices = require("./continueServices");

function setOperation(displayMessage) {
    const escolhas = [
        "Criar Conta",
        "Consultar Saldo",
        "Depositar",
        "Sacar",
        "Sair",
    ];

    inquirer
        .prompt({
            type: "list",
            name: "action",
            message: "Escolha o serviço: ",
            choices: escolhas,
        })
        .then((resp) => {
            const action = resp["action"];

            if (action === escolhas[0]) {
                console.log(escolhas)
                displayMessage(continueServices);
            }
        });
}

module.exports = setOperation;
