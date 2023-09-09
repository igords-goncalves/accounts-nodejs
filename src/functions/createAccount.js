const inquirer = require("inquirer");

const checkAccount = require("./checkAccount.js");
const createAccountFile = require("./createAccountFile.js");
const continueServices = require('./continueServices.js')

function createAccount() {
    inquirer
        .prompt({
            name: "nomeDaConta",
            message: "Digite um nome para conta:",
        })
        .then((resp) => {
            const nomeDaConta = resp["nomeDaConta"];
            console.info(`Conta de nome: ${nomeDaConta}`)

            checkAccount(nomeDaConta)
            createAccountFile(nomeDaConta)
            continueServices()
        })
    }

module.exports = createAccount;