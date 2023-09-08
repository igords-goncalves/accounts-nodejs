const fs = require("fs");

function createAccountFile(accountName) {
    const date = new Date();
    const day = new Date(date);

    const file = fs.writeFileSync(
        `db_contas/${accountName}.json`,
        `{
            "nome": "${accountName}",
            "data": "${day.toDateString("pt-br")}",
            "balanço": 0
        }`,
        (err) => {
            console.log(`Erro: ${err}`);
        }
    );
    return file;
}
module.exports = createAccountFile;
