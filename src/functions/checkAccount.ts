import { bgRed } from "chalk";
import { existsSync, mkdirSync } from "fs";

function checkAccount(accountName) {
  if (!existsSync("db_contas")) return mkdirSync("db_contas");

  if (existsSync(`db_contas/${accountName}.json`)) {
    console.log(bgRed.black("Conta já existente, escolha outro nome."));
  }
}

export default checkAccount;
