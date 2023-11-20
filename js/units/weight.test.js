const helper = require("../helper.js")
const Weight = require("./weight.js")

const weight = new Weight()
const testArray = [1, 37, 482, 62938, 1748296]

const testCases = (from, to, arr, results) => {
	let to_caps = helper.capitalize(to)

	if (arr.length !== results.length) return

	describe(`These tests are to test the conversion from ${from} to ${to}`, () => {
		for (let itr in arr) {
			test(`${arr[itr]} ${from} must be ${results[itr]} ${to}`, () => {
				expect(weight[from]["to" + to_caps](arr[itr])).toBe(results[itr])
			})
		}
	})
}

const runTests = (from, to, conversionRate) => {
	let forward = testArray.map((value) => {
		return helper.calculateValue(value, false, conversionRate)
	})
	let reverse = testArray.map((value) => {
		return helper.calculateValue(value, true, conversionRate)
	})

	testCases(from, to, testArray, forward)
	testCases(to, from, testArray, reverse)
}

// runTests("kilogram", "ton", 907.18474)

// runTests("pound", "kilogram", 2.2046226218487757)
// runTests("pound", "ton", 2000)

// runTests("hectogram", "pound", 4.535923700000001)
// runTests("hectogram", "kilogram", 10)
// runTests("hectogram", "ton", 9071.8474)

// runTests("ounce", "hectogram", 3.5273961949580412)
// runTests("ounce", "pound", 16)
// runTests("ounce", "kilogram", 35.27396194958041)
// runTests("ounce", "ton", 32000)

// runTests("decagram", "ounce", 2.8349523125)
// runTests("decagram", "hectogram", 10)
// runTests("decagram", "pound", 45.359237)
// runTests("decagram", "kilogram", 100)
// runTests("decagram", "ton", 90718.474)

// runTests("gram", "decagram", 10)
// runTests("gram", "ounce", 28.349523125)
// runTests("gram", "hectogram", 100)
// runTests("gram", "pound", 453.59237)
// runTests("gram", "kilogram", 1000)
// runTests("gram", "ton", 907184.74)

// runTests("carat", "gram", 5)
// runTests("carat", "decagram", 50)
// runTests("carat", "ounce", 141.747615625)
runTests("carat", "hectogram", 500)
runTests("carat", "pound", 2267.96185)
runTests("carat", "kilogram", 5000)
runTests("carat", "ton", 4535923.699999999)