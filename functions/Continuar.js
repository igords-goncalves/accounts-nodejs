const inquirer = require("inquirer");
const chalk = require("chalk");

const solicitarOperacoes = require("./Solicitar.js")
 

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