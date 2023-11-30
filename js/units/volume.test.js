const helper = require("../helper.js")
const Volume = require("./volume.js")

const volume = new Volume()
const testArray = [1, 37, 482, 62938, 1748296]

const testCases = (from, to, arr, results) => {
	let to_caps = helper.capitalize(to)

	if (arr.length !== results.length) return

	describe(`These tests are to test the conversion from ${from} to ${to}`, () => {
		for (let itr in arr) {
			test(`${arr[itr]} ${from} must be ${results[itr]} ${to}`, () => {
				expect(volume[from]["to" + to_caps](arr[itr])).toBe(results[itr])
			})
		}
	})
}

const runTests = (from, to, conversionRate, conversionReverse = false) => {
	let forward = testArray.map((value) => {
		return helper.calculateValue(value, conversionReverse, conversionRate)
	})
	let reverse = testArray.map((value) => {
		return helper.calculateValue(value, !conversionReverse, conversionRate)
	})

	testCases(from, to, testArray, forward)
	testCases(to, from, testArray, reverse)
}

// runTests("cubic meter", "kiloliter", 1)

// runTests("hectoliter", "cubic meter", 10)
// runTests("hectoliter", "kiloliter", 10)

// runTests("cubic foot", "hectoliter", 0.28316846592, true)
// runTests("cubic foot", "cubic meter", 0.028316846592, true)

// runTests("decaliter", "cubic foot", 0.35314666721489, true)
// runTests("decaliter", "hectoliter", 0.1, true)
// runTests("decaliter", "cubic meter", 0.01, true)

// runTests("gallon", "decaliter", 0.454609, true)
// runTests("gallon", "cubic foot", 0.16054365323589, true)
// runTests("gallon", "hectoliter",  0.0454609, true)
// runTests("gallon", "cubic meter", 0.00454609, true)

// runTests("liter", "gallon", 0.21996924829909, true)
// runTests("liter", "decaliter", 0.1, true)
// runTests("liter", "cubic foot", 0.035314666721489, true)
// runTests("liter", "hectoliter", 0.01, true)
// runTests("liter", "cubic meter", 0.001, true)

// runTests("cubic decimeter", "liter", 1)
// runTests("cubic decimeter", "gallon", 0.21996924829909, true)
// runTests("cubic decimeter", "decaliter", 0.1, true)
// runTests("cubic decimeter", "cubic foot", 0.035314666721489, true)
// runTests("cubic decimeter", "hectoliter", 0.01, true)
runTests("cubic decimeter", "cubic meter", 0.001, true)