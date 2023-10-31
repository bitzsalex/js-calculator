const Area = require("./area")
const area = new Area()

const capitalize = (phrase) => {
	return phrase.split(" ").reduce((caps, word) => {
		return caps + word.charAt(0).toUpperCase() + word.slice(1)
	}, "")
}

const testCases = (from, to, values) => {
	to_cvtd = capitalize(to)

	describe(`this test is for ${from} to ${to}`, () => {
		test(`1 ${from} to ${to}`, () => {
			expect(area[from]["to" + to_cvtd](1)).toBe(values[0])
		})

		test(`10 ${from} to ${to}`, () => {
			expect(area[from]["to" + to_cvtd](10)).toBe(values[1])
		})

		test(`259 ${from} to ${to}`, () => {
			expect(area[from]["to" + to_cvtd](259)).toBe(values[2])
		})

		test(`5274 ${from} to ${to}`, () => {
			expect(area[from]["to" + to_cvtd](5274)).toBe(values[3])
		})

		test(`3334670 ${from} to ${to}`, () => {
			expect(area[from]["to" + to_cvtd](3334670)).toBe(values[4])
		})
	})
}

// testCases("square millimeter", "square centimeter", [0.01, 0.1, 2.59, 52.74, 33346.7])
// testCases("square centimeter", "square millimeter", [100, 1000, 25900, 527400, 333467000])
// testCases("square kilometer", "square mile", [0.3861021586, 3.8610215859, 100.0004590755, 2036.302784417, 1287523.2851937686])
// testCases("square mile", "square kilometer", [2.58998811, 25.8998811, 670.80692049, 13659.59729214, 8636755.6507737])
// testCases("square kilometer", "square meter", [1000000, 10000000, 259000000, 5274000000, 3334670000000])
// testCases("square meter", "square kilometer", [0.000001, 0.00001, 0.000259, 0.005274, 3.33467])
// testCases("square meter", "square centimeter", [10000, 100000, 2590000, 52740000, 33346700000])
// testCases("square centimeter", "square meter", [0.0001, 0.001, 0.0259, 0.5274, 333.467])
// testCases("square millimeter", "square inch", [0.0015500031, 0.015500031, 0.4014508029, 8.1747163494, 5168.748837477])
// testCases("square inch", "square millimeter", [645.1600000026, 6451.6000000258, 167096.4400006684, 3402573.8400136107, 2151395697.2086055828])
// testCases("square inch", "square feet", [0.0069444444, 0.069444444, 1.7986110996, 36.6249997656, 23157.430407348])
// testCases("square feet", "square inch", [144.0000009216, 1440.000009216, 37296.0002386944, 759456.0048605184, 480192483.0732318917])
// testCases("square feet", "square yard", [0.1111111111, 1.111111111, 28.7777777749, 585.9999999414, 370518.888851837])
// testCases("square yard", "acre", [0.0002066116, 0.002066116, 0.0535124044, 1.0896695784, 688.981504172])
// testCases("acre", "hectare", [0.4046856422, 4.046856422, 104.8135813298, 2134.3120769628, 1349493.070475074])
// testCases("square meter", "square mile", [0.0000003861, 0.000003861, 0.0001, 0.0020363028, 1.2875232852])
// testCases("square mile", "square meter", [2589988.11, 25899881.1, 670806920.49, 13659597292.14, 8636755650773.7])
// testCases("square centimeter", "square kilometer", [])
testCases("square kilometer", "square centimeter", [10000000000, 100000000000, 2590000000000, 52740000000000, 33346700000000000])
