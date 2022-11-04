const inquirer = require("inquirer");
const chalk = require("chalk");

const setOperation = require("./setOperation.js")
 

function continueServices() {
    inquirer.prompt({
        name: "action",
        message: "Quer continuar usando os servicos?",
        choices: ["sim", "nao"],
    }).then(resp => {
        const action = resp['action']

        if(action === 'sim') {
            setOperation()
        } else {
            console.log(chalk.redBright.bgGray('Obrigado, até mais,!'))
        }
    })
}

module.exports = continueServices;