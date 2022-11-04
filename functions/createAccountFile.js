const fs = require("fs");

function createAccountFile(nomeDaConta) {
    const arquivo = fs.writeFileSync(
        `db_contas/${nomeDaConta}.json`,
        "(balance: 0)",
        (err) => {
            console.log(`Erro: ${err}`);
        }
    );
    return arquivo;
}
module.exports = createAccountFile;