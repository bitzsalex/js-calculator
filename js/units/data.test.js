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

// testCases("bit", "byte", [0.125, 4.625, 57, 10431.375, 293209.75])
// testCases("byte", "bit", [8, 296, 3648, 667608, 18765424])
// testCases("bit", "kilobyte", [0.0001220703125, 0.0045166015625, 0.0556640625, 10.1868896484375, 286.337646484375])
// testCases("kilobyte", "bit", [8192, 303104, 3735552, 683630592, 19215794176])
// testCases("bit", "megabyte", [0.00000011920928955078125, 0.00000441074371337890625, 0.00005435943603515625, 0.00994813442230224609375, 0.2796266078948974609375])
// testCases("megabyte", "bit", [8388608, 310378496, 3825205248, 700037726208, 19676973236224])
// testCases("gigabyte", "bit", [8589934592, 317827579904, 3917010173952, 716838631636992, 20149220593893376])
// testCases("bit", "gigabyte", [1.16415321826934814453125e-10, 4.307366907596588134765625e-9, 0.000000053085386753082275390625, 9.714975021779537200927734375e-6, 0.00027307285927236080169677734375])
testCases("terabyte", "bit", [8796093022208, 325455441821696, 4011018418126848, 734042758796279808, 20632801888146817024])
