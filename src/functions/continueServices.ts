import inquirer from "inquirer";
import { yellowBright } from "chalk";
import exit from "./exit.js";

function continueServices() {
  inquirer
    .prompt({
      name: "resposta",
      message: yellowBright("Quer continuar usando os servicos?"),
    })

    .then((resp: any) => {
      const resposta = resp["resposta"];
      return resposta;
    })
    .then((resp: any) => {
      const regex = /^sim$/i;
      if (resp.match(regex)) {
        //~~! O código é executado na ordem em que é importado
        //TODO: Como resolver isso com o JS Module?
        const setOperation = require("./setOperation.js");
        setOperation();
      } else {
        exit();
      }
    })
    .catch((err: any) => console.log(err));
}

export default continueServices;
