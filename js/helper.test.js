const helper = require("./helper.js")

let roundArrays = [958999.999999, 96.999, 0.09996785, 0.089999]
let roundResults = [959000, 97, 0.1, 0.09]

describe("This suit is to test `round9s` function", () => {
	if (roundArrays.length !== roundResults.length) return

	for (let itr in roundArrays) {
		test(`${roundArrays[itr]} should be ${roundResults[itr]}`, () => {
			expect(helper.round9s(roundArrays[itr])).toBe(roundResults[itr])
		})
	}
})

// let expArray = [0.0000145, 12345678901234564, 100000000000000000, 0.0000014877, 0.00000000087459, 0.000000140000025]
// let expResult = ["0.0000145", "1.23e+16", "1.00e+17", "1.4877e-6", "8.7459e-10", "1.40000025e-7"]

// describe("This suit is to test `applyExponential` function", () => {
// 	for (let itr in expArray) {
// 		test(`${expArray[itr]} should be ${expResult[itr]}`, () => {
// 			expect(helper.applyExponential(expArray[itr])).toBe(expResult[itr])
// 		})
// 	}
// })

// let truncArray = [96.0005, 54.001, 0.000000140000025, 0.00000001, 0.00185000001]
// let truncResult = [96, 54.001, 0.00000014, 0.00000001, 0.00185]

// describe("This suit is to test `truncateLastZeros` function", () => {
// 	for (let itr in truncArray) {
// 		test(`${truncArray[itr]} should be ${truncResult[itr]}`, () => {
// 			expect(helper.truncateLastZeros(truncArray[itr])).toBe(truncResult[itr])
// 		})
// 	}
// })
