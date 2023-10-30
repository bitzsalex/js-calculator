const Area = require("./area")
const area = new Area()

describe.skip("this test is for square MM to square CM", () => {
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

describe.skip("this test is for square CM to square MM", () => {
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

describe.skip("this test is for square KM to square MI", () => {
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

describe.skip("this test is for square MI to square KM", () => {
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

describe.skip("this test is for square KM to square M", () => {
	test("1 sq km to m", () => {
		expect(area["square kilometer"].toSquareMeter(1)).toBe(1000000)
	})

	test("10 sq km to m", () => {
		expect(area["square kilometer"].toSquareMeter(10)).toBe(10000000)
	})

	test("259 sq km to m", () => {
		expect(area["square kilometer"].toSquareMeter(259)).toBe(259000000)
	})

	test("5274 sq km to m", () => {
		expect(area["square kilometer"].toSquareMeter(5274)).toBe(5274000000)
	})

	test("3334670 sq km to m", () => {
		expect(area["square kilometer"].toSquareMeter(3334670)).toBe(3334670000000)
	})
})

describe.skip("this test is for square M to square KM", () => {
	test("1 sq m to km", () => {
		expect(area["square meter"].toSquareKilometer(1)).toBe(0.000001)
	})

	test("10 sq m to km", () => {
		expect(area["square meter"].toSquareKilometer(10)).toBe(0.00001)
	})

	test("259 sq m to km", () => {
		expect(area["square meter"].toSquareKilometer(259)).toBe(0.000259)
	})

	test("5274 sq m to km", () => {
		expect(area["square meter"].toSquareKilometer(5274)).toBe(0.005274)
	})

	test("3334670 sq m to km", () => {
		expect(area["square meter"].toSquareKilometer(3334670)).toBe(3.33467)
	})
})

describe.skip("this test is for square M to square CM", () => {
	test("1 sq m to cm", () => {
		expect(area["square meter"].toSquareCentimeter(1)).toBe(10000)
	})

	test("10 sq m to cm", () => {
		expect(area["square meter"].toSquareCentimeter(10)).toBe(100000)
	})

	test("259 sq m to cm", () => {
		expect(area["square meter"].toSquareCentimeter(259)).toBe(2590000)
	})

	test("5274 sq m to cm", () => {
		expect(area["square meter"].toSquareCentimeter(5274)).toBe(52740000)
	})

	test("3334670 sq m to cm", () => {
		expect(area["square meter"].toSquareCentimeter(3334670)).toBe(33346700000)
	})
})

describe.skip("this test is for square CM to square M", () => {
	test("1 sq cm to m", () => {
		expect(area["square centimeter"].toSquareMeter(1)).toBe(0.0001)
	})

	test("10 sq cm to m", () => {
		expect(area["square centimeter"].toSquareMeter(10)).toBe(0.001)
	})

	test("259 sq cm to m", () => {
		expect(area["square centimeter"].toSquareMeter(259)).toBe(0.0259)
	})

	test("5274 sq cm to m", () => {
		expect(area["square centimeter"].toSquareMeter(5274)).toBe(0.5274)
	})

	test("3334670 sq cm to m", () => {
		expect(area["square centimeter"].toSquareMeter(3334670)).toBe(333.467)
	})
})

describe("this test is for square MM to square IN", () => {
	test("1 sq mm to in", () => {
		expect(area["square millimeter"].toSquareInch(1)).toBe(0.0015500031)
	})

	test("10 sq mm to in", () => {
		expect(area["square millimeter"].toSquareInch(10)).toBe(0.015500031)
	})

	test("259 sq mm to in", () => {
		expect(area["square millimeter"].toSquareInch(259)).toBe(0.4014508029)
	})

	test("5274 sq mm to in", () => {
		expect(area["square millimeter"].toSquareInch(5274)).toBe(8.1747163494)
	})

	test("3334670 sq mm to in", () => {
		expect(area["square millimeter"].toSquareInch(3334670)).toBe(5168.748837477)
	})
})

describe("this test is for square IN to square MM", () => {
	test("1 sq in to mm", () => {
		expect(area["square inch"].toSquareMillimeter(1)).toBe(645.1600000026)
	})

	test("10 sq in to mm", () => {
		expect(area["square inch"].toSquareMillimeter(10)).toBe(6451.6000000258)
	})

	test("259 sq in to mm", () => {
		expect(area["square inch"].toSquareMillimeter(259)).toBe(167096.4400006684)
	})

	test("5274 sq in to mm", () => {
		expect(area["square inch"].toSquareMillimeter(5274)).toBe(3402573.8400136107)
	})

	test("3334670 sq in to mm", () => {
		expect(area["square inch"].toSquareMillimeter(3334670)).toBe(2151395697.2086055828)
	})
})
