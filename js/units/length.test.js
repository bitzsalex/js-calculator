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

// testCases("mile", "nautical mile", [0.86897624190064795702282475544505, 32.152120950323974409844515951467, 418.84654859611231528500153212451, 54691.626712742981119102544458201, 1519227.6878099352206711764286456])
// testCases("nautical mile", "mile", [1.1507794480235425, 42.5788395768710725, 554.675693947347485, 72427.756899705717865, 2011903.10586176725858])

// testCases("kilometer", "mile", [0.62137119223733396961743418436332, 22.990734112781356875845064821443, 299.50091465839497335560327686312, 39107.860097033325379782072695459, 1086340.7699037620297462817147857])
// testCases("mile", "kilometer", [1.609344, 59.545728, 775.703808, 101288.892672, 2813609.677824])
// testCases("kilometer", "nautical mile", [0.53995680345572354211663066954644, 19.978401727861771058315334773218, 260.25917926565874730021598272138, 33983.801295896328293736501079914, 944004.31965442764578833693304536])
// testCases("nautical mile", "kilometer", [1.852, 68.524, 892.664, 116561.176, 3237844.192])

testCases("meter", "kilometer", [0.001, 0.037, 0.482, 62.938, 1748.296])
testCases("kilometer", "meter", [1000, 37000, 482000, 62938000, 1748296000])
testCases("meter", "mile", [6.2137119223733396961743418436332e-4, 0.02299073411278135687584506482144, 0.29950091465839497335560327686312, 39.107860097033325379782072695459, 1086.3407699037620297462817147857])
testCases("mile", "meter", [1609.344, 59545.728, 775703.808, 101288892.672, 2813609677.824])
testCases("meter", "nautical mile", [5.3995680345572354211663066954644e-4, 0.01997840172786177105831533477322, 0.26025917926565874730021598272138, 33.983801295896328293736501079914, 944.00431965442764578833693304536])
testCases("nautical mile", "meter", [1852, 68524, 892664, 116561176, 3237844192])