const inquirer = require("inquirer");
const displayMessage = require("../displayMessage.js");
const setOperation = require("../setOperation.js");
const getBalance = require("../getBalance.js");

const OPTIONS = require("../../constants/options.js");

jest.mock("inquirer");
jest.mock("../displayMessage.js");
jest.mock("../getBalance.js");

beforeEach(() => {
  jest.clearAllMocks();
});

test(`should call displayMessage function if first menu option ${OPTIONS[0]} chosen`, async () => {
  inquirer.prompt.mockResolvedValueOnce({ action: OPTIONS[0] });

  await setOperation();
  expect(OPTIONS[0]).toBe("Criar Conta")
  expect(displayMessage).toHaveBeenCalled();
  expect(getBalance).not.toHaveBeenCalled();
});

test(`should call getBalance function if second menu option ${OPTIONS[1]} chosen`, async () => {
  inquirer.prompt.mockResolvedValueOnce({ action: OPTIONS[1] });

  await setOperation();
  expect(OPTIONS[1]).toBe("Consultar Saldo")
  expect(getBalance).toHaveBeenCalled();
  expect(displayMessage).not.toHaveBeenCalled();
});
