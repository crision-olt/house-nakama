import { isNotNil } from "./isNotNil";

describe("isNotNil", () => {
	test("should return false for null", () => {
		expect(isNotNil(null)).toBe(false);
	});
	test("should return false for undefined", () => {
		expect(isNotNil(undefined)).toBe(false);
	});
	test("should return true for 0", () => {
		expect(isNotNil(0)).toBe(true);
	});
	test("should return true for empty object", () => {
		expect(isNotNil({})).toBe(true);
	});
	test("should return true for empty string", () => {
		expect(isNotNil("")).toBe(true);
	});
	test("should return true for false", () => {
		expect(isNotNil(false)).toBe(true);
	});
	test("should return true for true", () => {
		expect(isNotNil(true)).toBe(true);
	});
	test("should return true for NaN", () => {
		expect(isNotNil(Number.NaN)).toBe(true);
	});
	test("should return true for empty array", () => {
		expect(isNotNil([])).toBe(true);
	});
});
