const helper = require("../helper.js")
const Temperature = require("./temperature.js")

const temp = new Temperature()

const testCases = (from, to, values) => {
	let to_caps = helper.capitalize(to)

	describe(`These tests are to test the conversion from ${from} to ${to}`, () => {
		test(`1 ${from} must be ${values[0]} ${to}`, () => {
			expect(temp[from]["to" + to_caps](1)).toBe(values[0])
		})

		test(`24 ${from} must be ${values[1]} ${to}`, () => {
			expect(temp[from]["to" + to_caps](24)).toBe(values[1])
		})

		test(`842 ${from} must be ${values[2]} ${to}`, () => {
			expect(temp[from]["to" + to_caps](842)).toBe(values[2])
		})

		test(`42964 ${from} must be ${values[3]} ${to}`, () => {
			expect(temp[from]["to" + to_caps](42964)).toBe(values[3])
		})

		test(`6453854 ${from} must be ${values[4]} ${to}`, () => {
			expect(temp[from]["to" + to_caps](6453854)).toBe(values[4])
		})
	})
}

// testCases("celsius", "delisle", [-98.500, -64.000, 1163.0, 64346, 9680700])
// testCases("delisle", "celsius", [67.333, 82.667, 628.00, 28709, 4302600])
// testCases("celsius", "fahrenheit", [33.8, 75.2, 1547.6, 77367.2, 11616969.2])
// testCases("fahrenheit", "celsius", [-17.22222222222222, -4.444444444444445, 450, 23851.11111111111, 3585456.6666666665])
// testCases("celsius", "kelvin", [274.15, 297.15, 1115.15, 43237.15, 6454127.15])
// testCases("kelvin", "celsius", [-272.15, -249.15, 568.85, 42690.85, 6453580.85])
// testCases("celsius", "rankine", [493.47, 534.87, 2007.27, 77826.87, 11617428.87])
// testCases("rankine", "celsius", [-272.594, -259.817, 194.628, 23595.739, 3585201.294])
testCases("celsius", "newton", [0.33, 7.92, 277.86, 14178, 2129800])
testCases("newton", "celsius", [3.0303030303, 72.727273, 2551.5, 130190, 19557000])

// testCases("fahrenheit", "kelvin", [255.928, 268.706, 723.15, 24124.261, 3585729.817])
// testCases("kelvin", "fahrenheit", [-457.87, -416.47, 1055.93, 76875.53, 11616477.53])
// testCases("fahrenheit", "rankine", [460.67, 483.67, 1301.67, 43423.67, 6454313.67])
// testCases("rankine", "fahrenheit", [-458.67, -435.67, 382.33, 42504.33, 6453394.33])
// testCases("fahrenheit", "newton", [-5.6833, -1.4667, 148.50, 7870.9, 1183200])
// testCases("newton", "fahrenheit", [37.455, 162.91, 4624.7, 234380, 35203000])

// testCases("kelvin", "newton", [-89.810, -82.220, 187.72, 14088, 2129700])
// testCases("newton", "kelvin", [276.18, 345.88, 2824.7, 130470, 19557000])
// testCases("kelvin", "rankine", [1.8000, 43.200, 1515.6, 77335, 11617000])
// testCases("rankine", "kelvin", [0.55556, 13.333, 467.78, 23869, 3585500])

// testCases("rankine", "newton", [497.12, 622.58, 5084.4, 234840, 35203000])
// testCases("newton", "rankine", [-89.956, -85.740, 64.227, 7786.6, 1183100])
