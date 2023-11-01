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
// testCases("square centimeter", "square kilometer", [0.0000000001, 0.000000001, 0.0000000259, 0.0000005274, 0.000333467])
// testCases("square kilometer", "square centimeter", [10000000000, 100000000000, 2590000000000, 52740000000000, 33346700000000000])
// testCases("square mile", "square centimeter", [25899881100, 258998811000, 6708069204900, 136600000000000, 86368000000000000])
// testCases("square centimeter", "square mile", [0.0000000000, 0.0000000004, 0.0000000100, 0.0000002036, 0.0012881078])
// testCases("square meter", "square millimeter", [1000000, 10000000, 259000000, 5274000000, 3334670000000])
// testCases("square millimeter", "square meter", [0.000001, 0.00001, 0.000259, 0.005274, 3.33467])
// testCases("square kilometer", "square millimeter", [1000000000000, 10000000000000, 259000000000000, 5274000000000000, 3334670000000000000])
// testCases("square millimeter", "square kilometer", [0.000000000001, 0.00000000001, 0.000000000259, 0.000000005274, 0.00000333467])
// testCases("square mile", "square millimeter", [2589988110000, 25899881100000, 670806920490000, 13659597292140000, 8636755650773701000])
// testCases("square millimeter", "square mile", [0.0000000000003861, 0.000000000003861, 0.0000000001, 0.0000000020363, 0.0000012875])
// testCases("square inch", "square centimeter", [6.4516, 64.516, 1670.9644, 34025.7384, 21513956.972])
// testCases("square centimeter", "square inch", [0.155, 1.550003, 40.14508, 817.471635, 516874.88375])
// testCases("square meter", "square inch", [1550.0031, 15500.031, 401450.802902, 8174716.349433, 5168748837.4977])
// testCases("square inch", "square meter", [0.000645, 0.006452, 0.167096, 3.402574, 2151.395697])
// testCases("square kilometer", "square inch", [1550003100.0062, 15500031000.062, 401450802901.61, 8174716349432.7, 5.1687e15])
// testCases("square inch", "square kilometer", [6.4516e-10, 6.4516e-9, 1.671e-7, 3.4026e-6, 0.002151])
// testCases("square mile", "square inch", [4014489599.4792, 40144895994.792, 1039752806265.1, 21172418147653, 1.3387e16])
// testCases("square millimeter", "square feet", [1.0764e-5, 0.000108, 0.002788, 0.056769, 35.894089])
// testCases("square feet", "square millimeter", [92903.04, 929030.4, 24061887.36, 489970632.96, 309800980396.8])
// testCases("square feet", "square centimeter", [929.0304, 9290.304, 240618.8736, 4899706.3296, 3098009803.968])
// testCases("square centimeter", "square feet", [0.001076, 0.01076, 0.275556, 5.676886, 3589.408915])
// testCases("square meter", "square feet", [10.76391, 107.6391, 2787.852798, 56768.863538, 35894089.149289])
// testCases("square feet", "square meter", [0.092903, 0.92903, 24.061887, 489.970633, 309800.980397])
// testCases("square kilometer", "square feet", [10763910.41671, 107639104.1671, 2787852797.9278, 56768863537.727, 35894089149289])
// testCases("square feet", "square kilometer", [9.2903e-8, 9.2903e-7, 2.4062e-5, 0.00049, 0.309801])
// testCases("square mile", "square feet", [27878399.996383, 278783999.96383, 7220505599.0633, 147030681580.93, 92965264115940])
// testCases("square feet", "square mile", [3.587e-8, 3.587e-7, 9.2903e-6, 0.000189, 0.119615])
// testCases("hectare", "square yard", [11959.900463, 119599.00463, 3097614.21992, 63076515.041919, 39882321276.988])
// testCases("square yard", "hectare", [8.3613e-5, 8.3613e-4, 0.021656, 0.440974, 278.820882])
// testCases("square feet", "acre", [2.2957E-5, 2.2957E-4, 0.005946, 0.121074, 76.553489])
// testCases("acre", "square feet", [43560, 435600, 11282040, 229735440, 145258225200])
// testCases("hectare", "square feet", [107639.104167, 1076391.04167, 27878527.979278, 567688635.37727, 358940891492.89])
// testCases("square feet", "hectare", [9.2903E-6, 9.2903E-5, 0.002406, 0.048997, 30.980098])
// testCases("square yard", "square millimeter", [836127.36, 8361273.6, 216556986.24, 4409735696.64, 2788208823571.2])
// testCases("square millimeter", "square yard", [1.196e-6, 1.196e-5, 0.00031, 0.006308, 3.988232])
// testCases("acre", "square millimeter", [4046856422.4, 40468564224, 1048135813401.6, 21343120771738, 1.3495e16])
// testCases("square millimeter", "acre", [2.4711E-10, 2.4711E-9, 6.4E-8, 1.3032E-6, 0.000824])
// testCases("hectare", "square millimeter", [10000000000, 100000000000, 2590000000000, 52740000000000, 3.3347E+16])
// testCases("square millimeter", "hectare", [1.0E-10, 1.0E-9, 2.59E-8, 5.274E-7, 0.000333])
// testCases("square yard", "square centimeter", [8361.2736, 83612.736, 2165569.8624, 44097356.9664, 27882088235.712])
// testCases("square centimeter", "square yard", [0.00012, 0.0012, 0.030976, 0.630765, 398.823213])
// testCases("acre", "square centimeter", [40468564.224, 404685642.24, 10481358134.016, 213431207717.38, 1.3495e14])
// testCases("square centimeter", "acre", [2.4711e-8, 2.4711e-7, 6.4e-6, 0.00013, 0.082401])
// testCases("hectare", "square centimeter", [100000000, 1000000000, 25900000000, 527400000000, 3.3347E+14])
// testCases("square centimeter", "hectare", [1.0e-8, 1.0e-7, 2.59e-6, 5.274e-5, 0.033347])
// testCases("square yard", "square inch", [1296, 12960, 335664, 6835104, 4321732320])
// testCases("acre", "square inch", [6272640, 62726400, 1624613760, 33081903360, 20917184428800])
// testCases("square inch", "acre", [1.5942e-7, 1.5942e-6, 4.129e-5, 0.000841, 0.531621])
// testCases("hectare", "square inch", [15500031.000062, 155000310.00062, 4014508029.0161, 81747163494.327, 51687488374977])
// testCases("square inch", "hectare", [6.4516E-8, 6.4516E-7, 1.671E-5, 0.00034, 0.21514])
// testCases("square meter", "square yard", [1.19599, 11.9599, 309.761422, 6307.651504, 3988232.127699])
// testCases("square yard", "square meter", [0.836127, 8.36127, 216.556986, 4409.735697, 2788208.823571])
// testCases("square kilometer", "square yard", [1195990.046301, 11959900.46301, 309761421.99198, 6307651504.1919, 3988232127698.8])
// testCases("square yard", "square kilometer", [8.3613E-7, 8.3613E-6, 0.000217, 0.00441, 2.788209])
// testCases("square yard", "square mile", [3.2283E-7, 3.2283E-6, 8.3613E-5, 0.001703, 1.076533])
// testCases("square mile", "square yard", [3097599.999598, 30975999.99598, 802278399.89592, 16336742397.881, 10329473790660])
// testCases("acre", "square meter", [4046.856422, 40468.56422, 1048135.813402, 21343120.771738, 13494930706.085])
// testCases("square meter", "acre", [0.000247, 0.00247, 0.064, 1.303234, 824.014902])
// testCases("square kilometer", "acre", [247.105381, 2471.05381, 64000.2938, 1303233.781858, 824014902.41711])
// testCases("acre", "square kilometer", [0.004047, 0.04047, 1.048136, 21.343121, 13494.930706])
// testCases("acre", "square mile", [0.001563, 0.01563, 0.404688, 8.240625, 5210.421876])
// testCases("square mile", "acre", [640, 6400, 165759.999978, 3375359.999562, 2134188799.7231])
// testCases("hectare", "square meter", [10000, 100000, 2590000, 52740000, 33346700000])
// testCases("square meter", "hectare", [0.0001, 0.001, 0.0259, 0.5274, 333.467])
// testCases("hectare", "square kilometer", [0.01, 0.1, 2.59, 52.74, 33346.7])
// testCases("square kilometer", "hectare", [100, 1000, 25900, 527400, 333467000])
// testCases("square mile", "hectare", [258.998811, 2589.98811, 67080.692049, 1365959.729214, 863675565.07737])
// testCases("hectare", "square mile", [0.003861, 0.03861, 1.000005, 20.363028, 12875.232852])
