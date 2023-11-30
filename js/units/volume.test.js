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
// runTests("cubic decimeter", "cubic meter", 0.001, true)

// runTests("deciliter", "cubic decimeter", 0.1, true)
// runTests("deciliter", "liter", 0.1, true)
// runTests("deciliter", "gallon", 0.021996924829909, true)
// runTests("deciliter", "decaliter", 0.01, true)
// runTests("deciliter", "cubic foot", 0.0035314666721489, true)
// runTests("deciliter", "hectoliter", 0.001, true)
// runTests("deciliter", "cubic meter", 0.0001, true)
// runTests("deciliter", "kiloliter", 0.0001, true)

// runTests("cubic inch", "deciliter", 0.16387064, true)
// runTests("cubic inch", "cubic decimeter", 0.016387064, true)
// runTests("cubic inch", "liter", 0.016387064, true)
// runTests("cubic inch", "gallon", 0.003604650149909, true)
// runTests("cubic inch", "decaliter", 0.0016387064, true)
// runTests("cubic inch", "cubic foot", 0.0005787037037037, true)
// runTests("cubic inch", "hectoliter", 0.00016387064, true)
// runTests("cubic inch", "cubic meter", 0.000016387064, true)
// runTests("cubic inch", "kiloliter", 0.000016387064, true)

// runTests("centiliter", "cubic inch", 0.61023744094732, true)
// runTests("centiliter", "deciliter", 0.1, true)
// runTests("centiliter", "cubic decimeter", 0.01, true)
// runTests("centiliter", "liter", 0.01, true)
// runTests("centiliter", "gallon", 0.0021996924829909, true)
// runTests("centiliter", "decaliter", 0.001, true)
// runTests("centiliter", "cubic foot", 0.00035314666721489, true)
// runTests("centiliter", "hectoliter", 0.0001, true)
// runTests("centiliter", "cubic meter", 0.00001, true)
// runTests("centiliter", "kiloliter", 0.00001, true)

// runTests("milliliter", "centiliter", 0.1, true)
// runTests("milliliter", "cubic inch", 0.061023744094732, true)
// runTests("milliliter", "deciliter", 0.01, true)
// runTests("milliliter", "cubic decimeter", 0.001, true)
// runTests("milliliter", "liter", 0.001, true)
// runTests("milliliter", "gallon", 0.00021996924829909, true)
// runTests("milliliter", "decaliter", 0.0001, true)
// runTests("milliliter", "cubic foot", 0.000035314666721489, true)
// runTests("milliliter", "hectoliter", 0.00001, true)
// runTests("milliliter", "cubic meter", 0.000001, true)
// runTests("milliliter", "kiloliter", 0.000001, true)