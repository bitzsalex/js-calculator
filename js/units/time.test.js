const helper = require("../helper.js")
const Time = require("./time.js")

const time = new Time()

const testCases = (from, to, values) => {
	let to_caps = helper.capitalize(to)

	describe(`These tests are to test the conversion from ${from} to ${to}`, () => {
		test(`1 ${from} must be ${values[0]} ${to}`, () => {
			expect(time[from]["to" + to_caps](1)).toBe(values[0])
		})

		test(`37 ${from} must be ${values[1]} ${to}`, () => {
			expect(time[from]["to" + to_caps](37)).toBe(values[1])
		})

		test(`482 ${from} must be ${values[2]} ${to}`, () => {
			expect(time[from]["to" + to_caps](482)).toBe(values[2])
		})

		test(`62938 ${from} must be ${values[3]} ${to}`, () => {
			expect(time[from]["to" + to_caps](62938)).toBe(values[3])
		})

		test(`1748296 ${from} must be ${values[4]} ${to}`, () => {
			expect(time[from]["to" + to_caps](1748296)).toBe(values[4])
		})
	})
}

// testCases("nanosecond", "microsecond", [0.001, 0.037, 0.482, 62.938, 1748.296])
// testCases("microsecond", "nanosecond", [1000, 37000, 482000, 62938000, 1748296000])
// testCases("microsecond", "millisecond", [0.001, 0.037, 0.482, 62.938, 1748.296])
// testCases("millisecond", "microsecond", [1000, 37000, 482000, 62938000, 1748296000])
// testCases("millisecond", "second", [0.001, 0.037, 0.482, 62.938, 1748.296])
// testCases("second", "millisecond", [1000, 37000, 482000, 62938000, 1748296000])
// testCases("nanosecond", "millisecond", [0.000001, 0.000037, 0.000482, 0.062938, 1.748296])
// testCases("millisecond", "nanosecond", [1000000, 37000000, 482000000, 62938000000, 1748296000000])
// testCases("nanosecond", "second", [0.000000001, 0.000000037, 0.000000482, 0.000062938, 0.001748296])
// testCases("second", "nanosecond", [1000000000, 37000000000, 482000000000, 62938000000000, 1748296000000000])
// testCases("microsecond", "second", [0.000001, 0.000037, 0.000482, 0.062938, 1.748296])
// testCases("second", "microsecond", [1000000, 37000000, 482000000, 62938000000, 1748296000000])
// testCases("second", "minute", [0.016666666666666666667, 0.61666666666666666666667, 8.0333333333333333333333333, 1048.9666666666666666666666666667, 29138.266666666666666666666666667])
// testCases("minute", "second", [60, 2220, 28920, 3776280, 104897760])
// testCases("minute", "hour", [0.016666666666666666667, 0.61666666666666666666667, 8.0333333333333333333333333, 1048.9666666666666666666666666667, 29138.266666666666666666666666667])
// testCases("hour", "minute", [60, 2220, 28920, 3776280, 104897760])
// testCases("hour", "day", [0.04166666666667, 1.5416666666667, 20.08333333333333, 2622.416666666666667, 72845.66666666667])
// testCases("day", "hour", [24, 888, 11568, 1510512, 41959104])
// testCases("day", "week", [0.14285714285714285714285714285714, 5.2857142857142857142857142857143, 68.857142857142857142857142857143, 8991.1428571428571428571428571429, 249756.57142857142857142857142857])
// testCases("week", "day", [7, 259, 3374, 440566, 12238072])
// testCases("week", "month", [0.23013689, 8.51506476, 110.92597877, 14484.35529453, 402347.39623128])
// testCases("month", "week", [4.3452, 160.77388, 2094.40568, 273480.71512, 7596765.71104])
// testCases("month", "year", [0.08333333333333, 3.08333333333333, 40.1666666666666666, 5244.833333333333333, 145691.3333333333])
// testCases("year", "month", [12, 444, 5784, 755256, 20979516])
// testCases("year", "decade", [0.1, 3.7, 48.2, 6293.8, 174829.6])
// testCases("decade", "year", [10, 370, 4820, 629380, 17482960])
// testCases("decade", "century", [0.1, 3.7, 48.2, 6293.8, 174829.6])
// testCases("century", "decade", [10, 370, 4820, 629380, 17482960])

// testCases("year", "century", [0.01, 0.37, 4.82, 629.38, 17482.96])
// testCases("century", "year", [100, 3700, 48200, 6293800, 174829600])

// testCases("month", "decade", [0.00833333333333333, 0.30833333333333333, 4.016666666666667, 524.4833333333333333, 14569.13333333333333])
// testCases("decade", "month", [120, 4440, 57840, 7552560, 209795520])
testCases("month", "century", [0.000833333333333333, 0.030833333333333333, 0.4016666666666667, 52.44833333333333333, 1456.913333333333333])
testCases("century", "month", [1200, 44400, 578400, 75525600, 2097955200])
