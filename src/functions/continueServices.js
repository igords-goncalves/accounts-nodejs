const inquirer = require("inquirer");
const chalk = require("chalk");
const exit = require("./exit.js");

function continueServices() {
    inquirer
        .prompt({
            name: "resposta",
            message: chalk.yellowBright("Quer continuar usando os servicos?"),
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
                exit();
            }
        })
        .catch((err) => console.log(err));
}

module.exports = continueServices;
