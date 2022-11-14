import { isLeapYear } from "./leapYear";

describe("isLeapYear", () => {
  test("whether it correctly identifies a leap year", () => {
    expect(isLeapYear(2020)).toBe(true);
  });

  test("whether it correctly identifies a non-leap year", () => {
    expect(isLeapYear(2019)).toBe(false);
  });
});
