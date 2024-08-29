const createAccount = require("../createAccount.js");
const displayMessage = require("../displayMessage.js");

jest.mock("../createAccount.js");

beforeEach(() => {
  jest.clearAllMocks();
});

test("should call the createAccount module", () => {
  displayMessage();
  expect(createAccount).toHaveBeenCalled();
  expect(createAccount).toHaveBeenCalledTimes(1);
});

test("should display the right message for user", () => {
  const consoleSpy = jest.spyOn(console, "log");

  displayMessage();
  console.log(consoleSpy.mock.calls);

  // Chalk effect on string
  expect(consoleSpy.mock.calls[0]).toEqual([
    "\x1B[42m\x1B[30mParabéns por escolher nosso banco.\x1B[39m\x1B[49m",
  ]);
  expect(consoleSpy.mock.calls[1]).toEqual([
    "\x1B[32mDefina as opções da sua conta: \x1B[39m",
  ]);
  expect(consoleSpy).toHaveBeenCalledTimes(3);
});

test("should return the result of a + b", () => {
  const consoleSpy = jest.spyOn(console, "log");
  consoleSpy.mockImplementation((a, b) => a + b);

  const result = consoleSpy(1, 2);
  console.log(consoleSpy.mock.calls);
  expect(result).toEqual(3);
});
