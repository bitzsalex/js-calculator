const helper = require("../helper.js")
const Time = require("./time.js")

const time = new Time()

const testCases = (from, to, values) => {
	let to_caps = helper.capitalize(to)

	describe(`These tests are to test the conversion from ${from} to ${to}`, () => {
		test(`1 ${from} must be ${values[0]} ${to}`, () => {
			expect(time[from]["to" + to_caps](1)).toBe(values[0])
		})

		test(`24 ${from} must be ${values[1]} ${to}`, () => {
			expect(time[from]["to" + to_caps](24)).toBe(values[1])
		})

		test(`842 ${from} must be ${values[2]} ${to}`, () => {
			expect(time[from]["to" + to_caps](842)).toBe(values[2])
		})

		test(`42964 ${from} must be ${values[3]} ${to}`, () => {
			expect(time[from]["to" + to_caps](42964)).toBe(values[3])
		})

		test(`6453854 ${from} must be ${values[4]} ${to}`, () => {
			expect(time[from]["to" + to_caps](6453854)).toBe(values[4])
		})
	})
}

testCases("second", "microsecond", [1, 2, 4, 5, 6])