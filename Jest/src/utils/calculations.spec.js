import { exponentCalculation } from "./calculations";

describe("Calculations module", () => {
  test("should return correct value", () => {
    expect(exponentCalculation()).toBe(4);
  });

  test("should return correct value", () => {
    expect(exponentCalculation()).toBeTruthy();
  });
});
