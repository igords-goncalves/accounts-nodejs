import inquirer from "inquirer";

import checkAccount from "./checkAccount.js";
import createAccountFile from "./createAccountFile.js";
import continueServices from "./continueServices.js";

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

export default createAccount;