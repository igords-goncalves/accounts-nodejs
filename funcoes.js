const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");



async function operacoes() {
    await inquirer
        .prompt([
            {
                name: "cliente",
                message: "Digite seu nome: ",
            },
            {
                type: "list",
                name: "action",
                message: "Escolha o serviço: ",
                choices: [
                    "Criar Conta",
                    "Consultar Saldo",
                    "Depositar",
                    "Sacar",
                    "Sair",
                ],
            },
        ])
        .then((resposta) => {
            const action = resposta["action"];

            if (action === "Criar Conta");
        });
}



function exibiMensagensCriarConta() {
    console.log(chalk.bgRed.black(`Parabéns por escolher nosso banco.`));
    console.log(chalk.green("Defina as opções da sua conta: "));
}



function criaConta() {
    inquirer
        .prompt([
            {
                name: "nomeDaConta",
                message: "Digite um nome para conta: ",
            },
        ])
        .then((resp) => {
            const nomeDaConta = resp["nomeDaConta"];
            console.info(`Conta de nome: ${nomeDaConta}`);
        });
}


function validarConta() {
    if (!fs.existsSync("db_contas")) fs.mkdirSync("db_contas");

    if (fs.existsSync(`db_contas/${criaConta.name}.json`)) {
        console.log(chalk.bgRed.black("Conta já existe, escolha outro nome."));
    }
}


function criarArquivoDeConta() {
    const arquivo = fs.writeFileSync(
        `db_contas/${criaConta.name}.json`,
        "(balance: 0)",
        (err) => {
            console.log(`Erro: ${err}`);
        }
    )
    return arquivo;
}



module.exports = {
    operacoes,
    exibiMensagensCriarConta,
    criaConta,
    validarConta,
    criarArquivoDeConta,
};
