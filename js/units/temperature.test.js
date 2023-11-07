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

testCases("celsius", "kelvin", [1, 2, 3, 4, 5])
