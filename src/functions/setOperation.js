const inquirer = require("inquirer");

const displayMessage = require("./displayMessage.js");
const getBalance = require("./getBalance.js");
const deposit = require("./deposit.js");
const withDraw = require("./withDraw.js");
const exit = require("./exit.js");

const OPTIONS = require("../constants/options.js");

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

module.exports = setOperation;
