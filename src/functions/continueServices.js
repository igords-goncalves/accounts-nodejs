const inquirer = require("inquirer");
const chalk = require("chalk");

function continueServices(setOperation) {
    inquirer
        .prompt({
            name: "resposta",
            message: "Quer continuar usando os servicos? ",
        })

        .then((resp) => {
            const resposta = resp["resposta"];

            if (resposta === "sim") {
                setOperation();
            } else {
                console.log(chalk.redBright.bgGray("Obrigado, até mais,!"));
            }
        })
        .catch((err) => console.log(err));
}

module.exports = continueServices;
