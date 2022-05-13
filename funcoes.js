const inquirer = require('inquirer')

const chalk = require('chalk')

const fs = require('fs')

async function operacoes() {
    await inquirer.prompt([{
            type: 'list',
            name: 'action',
            message: 'Escolha o serviço: ',
            choices: [
                'Criar Conta',
                'Consultar Saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        }]).then(resposta => {
            const action = resposta['action']
            return action
        })
        .catch(err => console.log(err))
}


module.exports = {
    operacoes,
}