const inquirer = require("inquirer");

const checkAccount = require("./checkAccount.js");
const createAccountFile = require("./createAccountFile.js");
const setOperation = require("./setOperation.js");

function createAccount(continueServices) {
    inquirer
        .prompt({
            name: "nomeDaConta",
            message: "Digite um nome para conta: ",
        })
        .then((resp) => {
            const nomeDaConta = resp["nomeDaConta"];
            
            console.info(`Conta de nome: ${nomeDaConta}`)
            checkAccount(nomeDaConta)
            createAccountFile(nomeDaConta)
            continueServices(setOperation)
        })
}

module.exports = createAccount;