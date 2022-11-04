const inquirer = require("inquirer");
const chalk = require("chalk");

const setOperation = require("./setOperation.js")
 

function continuarServicos() {
    inquirer.prompt({
        name: "action",
        message: "quer continuar usando os servicos?",
        choices: ["sim", "nao"],
    }).then(resp => {
        const action = resp['action']

        if(action === 'sim') {
            setOperation()
        } else {
            console.log(chalk.redBright('Obrigado, até mais,!'))
        }
    })
}

module.exports = continuarServicos;