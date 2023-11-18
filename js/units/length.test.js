const helper = require("../helper.js")
const Length = require("./length.js")

const length = new Length()

const testCases = (from, to, values) => {
	let to_caps = helper.capitalize(to)

	describe(`These tests are to test the conversion from ${from} to ${to}`, () => {
		test(`1 ${from} must be ${values[0]} ${to}`, () => {
			expect(length[from]["to" + to_caps](1)).toBe(values[0])
		})

		test(`37 ${from} must be ${values[1]} ${to}`, () => {
			expect(length[from]["to" + to_caps](37)).toBe(values[1])
		})

		test(`482 ${from} must be ${values[2]} ${to}`, () => {
			expect(length[from]["to" + to_caps](482)).toBe(values[2])
		})

		test(`62938 ${from} must be ${values[3]} ${to}`, () => {
			expect(length[from]["to" + to_caps](62938)).toBe(values[3])
		})

		test(`1748296 ${from} must be ${values[4]} ${to}`, () => {
			expect(length[from]["to" + to_caps](1748296)).toBe(values[4])
		})
	})
}

testCases("mile", "nautical mile", [0.86897624190064795702282475544505, 32.152120950323974409844515951467, 418.84654859611231528500153212451, 54691.626712742981119102544458201, 1519227.6878099352206711764286456])
testCases("nautical mile", "mile", [1.1507794480235425, 42.5788395768710725, 554.675693947347485, 72427.756899705717865, 2011903.10586176725858])