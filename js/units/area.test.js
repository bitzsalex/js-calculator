const Area = require("./area")
const area = new Area()

describe("this test is for square MM to square CM", () => {
	test.skip("1 sq mm to cm", () => {
		expect(area["square millimeter"].toSquareCentimeter(1)).toBe(0.01)
	})

	test.skip("10 sq mm to cm", () => {
		expect(area["square millimeter"].toSquareCentimeter(10)).toBe(0.1)
	})

	test.skip("259 sq mm to cm", () => {
		expect(area["square millimeter"].toSquareCentimeter(259)).toBe(2.59)
	})

	test.skip("5274 sq mm to cm", () => {
		expect(area["square millimeter"].toSquareCentimeter(5274)).toBe(52.74)
	})

	test.skip("3334670 sq mm to cm", () => {
		expect(area["square millimeter"].toSquareCentimeter(3334670)).toBe(33346.7)
	})
})

describe("this test is for square CM to square MM", () => {
	test.skip("1 sq cm to mm", () => {
		expect(area["square centimeter"].toSquareMillimeter(1)).toBe(100)
	})

	test.skip("10 sq cm to mm", () => {
		expect(area["square centimeter"].toSquareMillimeter(10)).toBe(1000)
	})

	test.skip("259 sq cm to mm", () => {
		expect(area["square centimeter"].toSquareMillimeter(259)).toBe(25900)
	})

	test.skip("5274 sq cm to mm", () => {
		expect(area["square centimeter"].toSquareMillimeter(5274)).toBe(527400)
	})

	test.skip("3334670 sq cm to mm", () => {
		expect(area["square centimeter"].toSquareMillimeter(3334670)).toBe(333467000)
	})
})

describe("this test is for square KM to square MI", () => {
	test("1 sq km to mi", () => {
		expect(area["square kilometer"].toSquareMile(1)).toBe(0.3861021586)
	})

	test("10 sq km to mi", () => {
		expect(area["square kilometer"].toSquareMile(10)).toBe(3.8610215859)
	})

	test("259 sq km to mi", () => {
		expect(area["square kilometer"].toSquareMile(259)).toBe(100.0004590755)
	})

	test("5274 sq km to mi", () => {
		expect(area["square kilometer"].toSquareMile(5274)).toBe(2036.302784417)
	})

	test("3334670 sq km to mi", () => {
		expect(area["square kilometer"].toSquareMile(3334670)).toBe(1287523.2851937686)
	})
})

describe("this test is for square MI to square KM", () => {
	test("1 sq mi to km", () => {
		expect(area["square mile"].toSquareKilometer(1)).toBe(2.58998811)
	})

	test("10 sq mi to km", () => {
		expect(area["square mile"].toSquareKilometer(10)).toBe(25.8998811)
	})

	test("259 sq mi to km", () => {
		expect(area["square mile"].toSquareKilometer(259)).toBe(670.80692049)
	})

	test("5274 sq mi to km", () => {
		expect(area["square mile"].toSquareKilometer(5274)).toBe(13659.59729214)
	})

	test("3334670 sq mi to km", () => {
		expect(area["square mile"].toSquareKilometer(3334670)).toBe(8636755.6507737)
	})
})
