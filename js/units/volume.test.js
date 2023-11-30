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

// runTests("cubic meter", "kiloliter", 1)

runTests("hectoliter", "cubic meter", 10)
runTests("hectoliter", "kiloliter", 10)