import { yellow, bgRedBright, red } from "chalk";
import { prompt } from "inquirer";
import { readFile, writeFile } from "fs";
import getBalance from "./getBalance";

function withDraw() {
  prompt([
    {
      name: "acountName",
      message: yellow("Digite o nome da conta:"),
    },
    {
      name: "value",
      message: bgRedBright.black("Digite o valor do seu saque:"),
    },
  ])
    .then((resp) => {
      const acountName = resp["acountName"];
      const capitalizedName = acountName.toUpperCase();

      readFile(`./db_contas/${capitalizedName}.json`, "utf8", (err, data) => {
        if (err) {
          console.log(red("Conta inexistente"));
          exit();
          return;
        }

        const acountDatas = JSON.parse(data);
        acountDatas.saldo -= parseFloat(resp["value"].replace(",", "."));
        const newBalance = JSON.stringify(acountDatas, null, 2);

        writeFile(
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
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export default withDraw;
