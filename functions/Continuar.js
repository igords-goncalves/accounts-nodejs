const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

const solicitarOperacoes = require("./Solicitar.js")

const func = () => solicitarOperacoes()
 

function continuarServicos() {
    inquirer.prompt({
        name: "action",
        message: "quer continuar usando os servicos?",
        choices: ["sim", "nao"],
    }).then(resp => {
        const action = resp['action']

        if(action === 'sim') {
            solicitarOperacoes()
        } else {
            console.log(chalk.redBright('Obrigado, até mais,!'))
        }
    })
}

module.exports = continuarServicos;