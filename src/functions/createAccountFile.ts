import { writeFileSync } from "fs";

function createAccountFile(accountName) {
  const date = new Date();
  const day = new Date(date);

  const capitalizeName = accountName.toUpperCase();

  const file = writeFileSync(
    `db_contas/${capitalizeName}.json`,
    `{
            "nome": "${capitalizeName}",
            "data": "${day.toDateString()}",
            "saldo": 0
        }`,
    // (err) => {
    //   console.log(`Erro: ${err}`);
    // }
    undefined
  );
  return file;
}

export default createAccountFile;
