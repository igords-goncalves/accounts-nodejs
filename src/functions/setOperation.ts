import inquirer from "inquirer";

import displayMessage from "./displayMessage.js";

import getBalance from "./getBalance.js";
import deposit from "./deposit.js";
import withDraw from "./withDraw.js";
import exit from "./exit.js";

import OPTIONS from "../constants/options.js";

async function setOperation() {
  console.clear();
  
  const input = await inquirer.prompt({
    type: "list",
    name: "action",
    message: "Escolha o serviço:",
    choices: OPTIONS,
  });

  const action = await input["action"];
  
  // How to scale this code?
  switch (action) {
    case OPTIONS[0]:
      displayMessage();
      break;
    case OPTIONS[1]:
      getBalance();
      break;
    case OPTIONS[2]:
      deposit();
      break;
    case OPTIONS[3]:
      withDraw();
      break;
    default:
      exit();
  }
  return action;
}

export default setOperation;
