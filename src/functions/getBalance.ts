import chalk from "chalk";
import { readFile } from "fs";

import continueServices from "./continueServices";
import inquirer from "inquirer";
import exit from "./exit.js";

function getBalance() {
  inquirer
    .prompt({
      name: "acountName",
      message: chalk.blue("Digite o nome da sua conta, por favor:"),
    })
    .then((resp) => {
      const acountName = resp["acountName"];
      const capitalizeName = acountName.toUpperCase();

      readFile(`./db_contas/${capitalizeName}.json`, "utf8", (err, data) => {
        if (err) {
          console.log("Verificando ...");
          setTimeout(() => {
            console.log(chalk.red("Conta inexistente"));
            exit();
          }, 2000);
          return;
        }

        const acountDatas = JSON.parse(data);
        const saldo = new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(acountDatas.saldo);
        console.log(chalk.bgBlueBright.black(`Seu saldo é de ${saldo}`));
        continueServices();
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export default getBalance;
