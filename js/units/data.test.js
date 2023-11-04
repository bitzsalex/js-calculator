const helper = require("../helper")
const Data = require("./data")

const data = new Data()

const testCases = (from, to, values) => {
	let to_caps = helper.capitalize(to)

	describe(`These tests are to test the conversion from ${from} to ${to}`, () => {
		test(`1 ${from} must be ${values[0]}`, () => {
			expect(data[from]["to" + to_caps]()).toBe(values[0])
		})

		test(`37 ${from} must be ${values[1]}`, () => {
			expect(data[from]["to" + to_caps]()).toBe(values[1])
		})

		test(`456 ${from} must be ${values[2]}`, () => {
			expect(data[from]["to" + to_caps]()).toBe(values[2])
		})

		test(`83451 ${from} must be ${values[3]}`, () => {
			expect(data[from]["to" + to_caps]()).toBe(values[3])
		})

		test(`2345678 ${from} must be ${values[4]}`, () => {
			expect(data[from]["to" + to_caps]()).toBe(values[4])
		})
	})
}
