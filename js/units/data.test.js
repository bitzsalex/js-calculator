const helper = require("../helper")
const Data = require("./data")

const data = new Data()

const testCases = (from, to, values) => {
	let to_caps = helper.capitalize(to)

	describe(`These tests are to test the conversion from ${from} to ${to}`, () => {
		test(`1 ${from} must be ${values[0]} ${to}`, () => {
			expect(data[from]["to" + to_caps](1)).toBe(values[0])
		})

		test(`37 ${from} must be ${values[1]} ${to}`, () => {
			expect(data[from]["to" + to_caps](37)).toBe(values[1])
		})

		test(`456 ${from} must be ${values[2]} ${to}`, () => {
			expect(data[from]["to" + to_caps](456)).toBe(values[2])
		})

		test(`83451 ${from} must be ${values[3]} ${to}`, () => {
			expect(data[from]["to" + to_caps](83451)).toBe(values[3])
		})

		test(`2345678 ${from} must be ${values[4]} ${to}`, () => {
			expect(data[from]["to" + to_caps](2345678)).toBe(values[4])
		})
	})
}

testCases("bit", "byte", [0.125, 4.625, 57, 10431.375, 293209.75])
