const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

async function solicitarOperacoes() {
    const escolhas = [                
        "Criar Conta",
        "Consultar Saldo",
        "Depositar",
        "Sacar",
        "Sair"
    ]

   await inquirer
        .prompt({
            type: "list",
            name: "action",
            message: "Escolha o serviço: ",
            choices: escolhas
        })
        .then((resposta) => {
            const action = resposta["action"];

            if (action.includes(escolhas));
                exibirMensagensAoCriarConta()
                criarConta()
        });
}

function exibirMensagensAoCriarConta() {
    console.log(chalk.bgGreen.black(`Parabéns por escolher nosso banco.`));
    console.log(chalk.green("Defina as opções da sua conta: "));
}

function criarConta() {
    inquirer
        .prompt({
            name: "nomeDaConta",
            message: "Digite um nome para conta: ",
        })
        .then((resp) => {
            const nomeDaConta = resp["nomeDaConta"];
            console.info(`Conta de nome: ${nomeDaConta}`)
            validarConta(nomeDaConta)
            criarArquivoDeConta(nomeDaConta)
            continuarServicos()
        })
}

function validarConta(nomeDaConta) {
    if (!fs.existsSync("db_contas")) fs.mkdirSync("db_contas");

    if (fs.existsSync(`db_contas/${nomeDaConta}.json`)) {
        console.log(chalk.bgRed.black("Conta já existe, escolha outro nome."));
    }
}

function criarArquivoDeConta(nomeDaConta) {
    const arquivo = fs.writeFileSync(
        `db_contas/${nomeDaConta}.json`,
        "(balance: 0)",
        (err) => {
            console.log(`Erro: ${err}`);
        }
    );
    return arquivo;
}

function continuarServicos() {
    inquirer.prompt({
        name: "action",
        message: "quer continuar usando os servicos?",
        choices: ["sim", "nao"],
    }).then(resp => {
        const action = resp['action']

        if(action === 'sim') {
            solicitarOperacoes()
        } else {
            console.log(chalk.redBright('Obrigado, até mais,!'))
        }
    })
}

function consultarSaldo() {

}

function depositar() {

}

function sacar() {

}

function sair() {

}

module.exports = {
    solicitarOperacoes,
    exibirMensagensAoCriarConta,
    criarConta,
    validarConta,
    criarArquivoDeConta,
    continuarServicos,
};