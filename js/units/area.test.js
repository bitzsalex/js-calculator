const Area = require("./area")
const area = new Area()

describe("this test is for testing square MM to square CM", () => {
	test("1 sq mm to cm", () => {
		expect(area["square millimeter"].toSquareCentimeter(1)).toBe(0.01)
	})

	test("10 sq mm to cm", () => {
		expect(area["square millimeter"].toSquareCentimeter(10)).toBe(0.1)
	})

	test("259 sq mm to cm", () => {
		expect(area["square millimeter"].toSquareCentimeter(259)).toBe(2.59)
	})

	test("5274 sq mm to cm", () => {
		expect(area["square millimeter"].toSquareCentimeter(5274)).toBe(52.74)
	})

	test("3334670 sq mm to cm", () => {
		expect(area["square millimeter"].toSquareCentimeter(3334670)).toBe(33346.7)
	})
})

describe("this test is for testing square CM to square MM", () => {
	test("1 sq cm to mm", () => {
		expect(area["square centimeter"].toSquareMillimeter(1)).toBe(100)
	})

	test("10 sq cm to mm", () => {
		expect(area["square centimeter"].toSquareMillimeter(10)).toBe(1000)
	})

	test("259 sq cm to mm", () => {
		expect(area["square centimeter"].toSquareMillimeter(259)).toBe(25900)
	})

	test("5274 sq cm to mm", () => {
		expect(area["square centimeter"].toSquareMillimeter(5274)).toBe(527400)
	})

	test("3334670 sq cm to mm", () => {
		expect(area["square centimeter"].toSquareMillimeter(3334670)).toBe(333467000)
	})
})
