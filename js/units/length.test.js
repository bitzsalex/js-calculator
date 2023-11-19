const helper = require("../helper.js")
const Length = require("./length.js")

const length = new Length()
const testArray = [1, 37, 482, 62938, 1748296]

const testCases = (from, to, arr, results) => {
	let to_caps = helper.capitalize(to)

	if (arr.length !== results.length) return

	describe(`These tests are to test the conversion from ${from} to ${to}`, () => {
		for (let itr in arr) {
			test(`${arr[itr]} ${from} must be ${results[itr]} ${to}`, () => {
				expect(length[from]["to" + to_caps](arr[itr])).toBe(results[itr])
			})
		}
	})
}

const runTests = (from, to, conversionRate) => {
	let forward = testArray.map(value => {
		return helper.calculateValue(value, false, conversionRate)
	})
	let reverse = testArray.map(value => {
		return helper.calculateValue(value, true, conversionRate)
	})

	testCases(from, to, testArray, forward)
	testCases(to, from, testArray, reverse)
}

// runTests("mile", "nautical mile", 1.1507794480235425)

// runTests("kilometer", "mile", 1.609344)
// runTests("kilometer", "nautical mile", 1.852)

// runTests("meter", "kilometer", 1000)
// runTests("meter", "mile", 1609.344)
// runTests("meter", "nautical mile", 1852)

// runTests("yard", "meter", 1.0936132983377078)
// runTests("yard", "kilometer", 1093.6132983377079)
// runTests("yard", "mile", 1760)
// runTests("yard", "nautical mile", 2025.3718285214347)

// runTests("feet", "yard", 3)
// runTests("feet", "meter", 3.280839895013123)
// runTests("feet", "kilometer", 3280.839895013123)
// runTests("feet", "mile", 5280)
// runTests("feet", "nautical mile", 6076.115485564304)

// runTests("inch", "feet", 12)
// runTests("inch", "yard", 36)
// runTests("inch", "meter", 39.37007874015748)
// runTests("inch", "kilometer", 39370.07874015748)
// runTests("inch", "mile", 63360.00000000001)
// runTests("inch", "nautical mile", 72913.38582677166)

// runTests("centimeter", "inch", 2.54)
// runTests("centimeter", "feet", 30.48)
// runTests("centimeter", "yard", 91.44)
// runTests("centimeter", "meter", 100)
// runTests("centimeter", "kilometer", 100000)
// runTests("centimeter", "mile", 160934.4)
// runTests("centimeter", "nautical mile", 185200)

// runTests("millimeter", "centimeter", 10)
// runTests("millimeter", "inch", 25.4)
// runTests("millimeter", "feet", 304.8)
// runTests("millimeter", "yard", 914.4)
// runTests("millimeter", "meter", 1000)
// runTests("millimeter", "kilometer", 1000000)
// runTests("millimeter", "mile", 1609344)
// runTests("millimeter", "nautical mile", 1852000)