const fs = require("fs");

function createAccountFile(accountName) {
    const date = new Date();
    const day = new Date(date);

    const capitalizeName = accountName.toUpperCase();

    const file = fs.writeFileSync(
        `db_contas/${capitalizeName}.json`,
        `{
            "nome": "${capitalizeName}",
            "data": "${day.toDateString("pt-br")}",
            "saldo": 0
        }`,
        (err) => {
            console.log(`Erro: ${err}`);
        }
    );
    return file;
}
module.exports = createAccountFile;
