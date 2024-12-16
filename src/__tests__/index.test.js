const startBank = require("../index.js");
const setOperation = require("../functions/setOperation.js");

jest.mock("../functions/setOperation");

beforeEach(() => {
  jest.clearAllMocks();
});

test("should call setOperation module", () => {
  startBank();

  expect(setOperation).toHaveBeenCalled();
});
