const inquirer = require("inquirer");

const displayMessage = require("./displayMessage.js");
const getBalance = require("./getBalance.js");
const deposit = require("./deposit.js");
const withDraw = require("./withDraw.js");
const exit = require("./exit.js");

const OPTIONS = require("../constants/options.js");

function setOperation() {
  // Limpa o console após a execução
  console.clear();

  return inquirer
    .prompt({
      type: "list",
      name: "action",
      message: "Escolha o serviço:",
      choices: OPTIONS,
    })
    .then((resp) => {
      const action = resp["action"];

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
    });
}

module.exports = setOperation;
