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
