const readline = require("readline");
const chalk = require("chalk");

const setOperation = require("./setOperation.js");

function continueServices() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Quer continuar usando os servicos? ", (resp) => {
        try {
            if (resp === "sim") {
                setOperation
            } else {
                console.log(chalk.redBright.bgGray("Obrigado, até mais,!"));
                rl.close();
            }
            rl.close();
        } catch (error) {
            console.log(error);
        }
    });
}

module.exports = continueServices;
