const chalk = require("chalk");
const fs = require("fs");
const continueServices = require("./continueServices");
const inquirer = require("inquirer");
const exit = require("./exit.js");

function checkBalance() {
    inquirer
        .prompt({
            name: "acountName",
            message: chalk.blue("Digite o nome da sua conta, por favor:"),
        })
        .then((resp) => {
            const acountName = resp["acountName"];
            const capitalizeName = acountName.toUpperCase();

            fs.readFile(
                `./db_contas/${capitalizeName}.json`,
                "utf8",
                (err, data) => {
                    if (err) {
                        console.log("Verificando ...");
                        setTimeout(() => {
                            console.log(
                                chalk.red("Conta inexistente")
                                );
                                exit();
                        }, 2000);
                        return;
                    }

                    const acountDatas = JSON.parse(data);
                    const saldo = new Intl.NumberFormat("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    }).format(acountDatas.saldo);
                    console.log(
                        chalk.bgBlueBright.black(`Seu saldo é de ${saldo}`)
                    );
                    continueServices();
                }
            );
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = checkBalance;
