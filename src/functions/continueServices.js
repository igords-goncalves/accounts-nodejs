const inquirer = require("inquirer");
const chalk = require("chalk");

function continueServices() {
    inquirer
        .prompt({
            name: "resposta",
            message: "Quer continuar usando os servicos? ",
        })

        .then((resp) => {
            const resposta = resp["resposta"];
            return resposta;
        })
        .then((resp) => {
            const regex = /^sim$/i;
            if (resp.match(regex)) {
                //~~! O código é executado na ordem em que é importado
                const setOperation = require("./setOperation.js");
                setOperation();
            } else {
                console.log(chalk.redBright.bgGray("Obrigado, até mais,!"));
            }
        })
        .catch((err) => console.log(err));
}

module.exports = continueServices;
