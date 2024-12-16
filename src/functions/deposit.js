const chalk = require("chalk");
const inquirer = require("inquirer");
const fs = require("fs");
const getBalance = require("./getBalance");

function deposit() {
  inquirer
    .prompt([
      {
        name: "acountName",
        message: chalk.yellow("Digite o nome da conta:"),
      },
      {
        name: "value",
        message: chalk.bgBlueBright.black("Digite o valor de depósito:"),
      },
    ])
    .then((resp) => {
      const acountName = resp["acountName"];
      const capitalizedName = acountName.toUpperCase();

      fs.readFile(
        `./db_contas/${capitalizedName}.json`,
        "utf8",
        (err, data) => {
          if (err) {
            console.log(chalk.red("Conta inexistente"));
            exit();
            return;
          }

          const acountDatas = JSON.parse(data);
          acountDatas.saldo += parseFloat(resp["value"].replace(",", "."));
          const newBalance = JSON.stringify(acountDatas, null, 2);

          fs.writeFile(
            `./db_contas/${capitalizedName}.json`,
            newBalance,
            "utf8",
            (err) => {
              if (err) {
                console.log("Algo deu errado");
              } else {
                getBalance();
              }
            }
          );
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = deposit;
