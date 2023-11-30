const helper = require("../helper.js")
const Speed = require("./speed.js")

const speed = new Speed()
const testArray = [1, 37, 482, 62938, 1748296]

const testCases = (from, to, arr, results) => {
	let to_caps = helper.capitalize(to)

	if (arr.length !== results.length) return

	describe(`These tests are to test the conversion from ${from} to ${to}`, () => {
		for (let itr in arr) {
			test(`${arr[itr]} ${from} must be ${results[itr]} ${to}`, () => {
				expect(speed[from]["to" + to_caps](arr[itr])).toBe(results[itr])
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

runTests("mile per hour", "knot", 0.86897624190816, true)