import { isNil } from "./isNil";

describe("isNil", () => {
	test("should return true for null", () => {
		expect(isNil(null)).toBe(true);
	});
	test("should return true for undefined", () => {
		expect(isNil(undefined)).toBe(true);
	});
	test("should return false for 0", () => {
		expect(isNil(0)).toBe(false);
	});
	test("should return false for empty object", () => {
		expect(isNil({})).toBe(false);
	});
	test("should return false for empty string", () => {
		expect(isNil("")).toBe(false);
	});
	test("should return false for false", () => {
		expect(isNil(false)).toBe(false);
	});
	test("should return false for true", () => {
		expect(isNil(true)).toBe(false);
	});
	test("should return false for NaN", () => {
		expect(isNil(Number.NaN)).toBe(false);
	});
	test("should return false for empty array", () => {
		expect(isNil([])).toBe(false);
	});
});
