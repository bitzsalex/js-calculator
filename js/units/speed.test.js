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

// runTests("mile per hour", "knot", 0.86897624190816, true)

// runTests("mile per second", "mile per hour", 3600, true)
// runTests("mile per second", "knot", 3128.3144708694, true)

// runTests("kilometer per hour", "mile per second", 0.00017260310895481, true)
// runTests("kilometer per hour", "mile per hour", 0.62137119223733, true)
// runTests("kilometer per hour", "knot", 0.53995680346039, true)

// runTests("kilometer per second", "kilometer per hour", 3600, true)
// runTests("kilometer per second", "mile per second", 0.62137119223733, true)
// runTests("kilometer per second", "mile per hour", 2236.9362920544, true)
// runTests("kilometer per second", "knot", 1943.8444924574, true)

// runTests("meter per hour", "kilometer per second", 3600000)
// runTests("meter per hour", "kilometer per hour", 0.001, true)
// runTests("meter per hour", "mile per second", 1.72603109e-7, true)
// runTests("meter per hour", "mile per hour", 0.000621372, true)
// runTests("meter per hour", "knot", 0.000539957, true)

// runTests("meter per second", "meter per hour", 3600, true)
// runTests("meter per second", "kilometer per second", 0.001, true)
// runTests("meter per second", "kilometer per hour", 3.6, true)
// runTests("meter per second", "mile per second", 0.00062137119223733, true)
// runTests("meter per second", "mile per hour", 2.2369362920544, true)
// runTests("meter per second", "knot", 1.9438444924574, true)

// runTests("foot per hour", "meter per second", 0.0000846666667, true)
// runTests("foot per hour", "meter per hour", 0.3048, true)
// runTests("foot per hour", "kilometer per second", 8.46666667e-8, true)
// runTests("foot per hour", "kilometer per hour", 0.0003048, true)
// runTests("foot per hour", "mile per second", 5.26094276e-8, true)
// runTests("foot per hour", "mile per hour", 0.0001893939, true)
// runTests("foot per hour", "knot", 0.0001645788, true)