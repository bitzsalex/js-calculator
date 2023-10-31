// TODO: This has to be moved to the final step, at the time to display result
// const truncateDecimal = (strNum) => {
// 	let dot = strNum.indexOf(".")

// 	if (dot !== -1)
// 		// loop through each decimal point
// 		for (let itr = dot + 1; itr < strNum.length - 2; itr++) {
// 			// check if there are three consecutive zeros
// 			if (strNum[itr] === "0" && strNum[itr + 1] === "0" && strNum[itr + 2] === "0") return strNum.slice(0, itr)
// 		}

// 	return strNum
// }

const calculateValue = (value, reverse, conversionRate) => {
	let result = reverse ? value * conversionRate : value / conversionRate
	return parseFloat(result.toFixed(10))
}

// Square Millimeter conversion functions
const squareMMToCM = (value, reverse = false) => {
	return calculateValue(value, reverse, 100)
}

const squareMMToIn = (value, reverse = false) => {
	return calculateValue(value, !reverse, 0.0015500031)
}

const squareMMToFt = (value, reverse = false) => {}

const squareMMToYd = (value, reverse = false) => {}

const squareMMToAc = (value, reverse = false) => {}

const squareMMToHa = (value, reverse = false) => {}

const squareMMToM = (value, reverse = false) => {}

const squareMMToKM = (value, reverse = false) => {}

const squareMMToMi = (value, reverse = false) => {}

// Square Centimeter conversion functions
const squareCMToIn = (value, reverse = false) => {}

const squareCMToFt = (value, reverse = false) => {}

const squareCMToYd = (value, reverse = false) => {}

const squareCMToAc = (value, reverse = false) => {}

const squareCMToHa = (value, reverse = false) => {}

const squareCMToM = (value, reverse = false) => {
	return calculateValue(value, reverse, 10000)
}

const squareCMToKM = (value, reverse = false) => {
	return squareMToKM(squareCMToM(value, reverse), reverse)
}

const squareCMToMi = (value, reverse = false) => {
	return squareKMToMi(squareCMToKM(value, reverse), reverse)
}

// Square Inch conversion functions
const squareINToFt = (value, reverse = false) => {
	return calculateValue(value, !reverse, 0.0069444444)
}

const squareINToYd = (value, reverse = false) => {}

const squareINToAc = (value, reverse = false) => {}

const squareINToHa = (value, reverse = false) => {}

const squareINToM = (value, reverse = false) => {}

const squareINToKM = (value, reverse = false) => {}

const squareINToMi = (value, reverse = false) => {}

// Square Foot conversion functions
const squareFTToYd = (value, reverse = false) => {
	return calculateValue(value, !reverse, 0.1111111111)
}

const squareFTToAc = (value, reverse = false) => {}

const squareFTToHa = (value, reverse = false) => {}

const squareFTToM = (value, reverse = false) => {}

const squareFTToKM = (value, reverse = false) => {}

const squareFTToMi = (value, reverse = false) => {}

// Square Yard conversion functions
const squareYDToAc = (value, reverse = false) => {
	return calculateValue(value, !reverse, 0.0002066116)
}

const squareYDToHa = (value, reverse = false) => {}

const squareYDToM = (value, reverse = false) => {}

const squareYDToKM = (value, reverse = false) => {}

const squareYDToMi = (value, reverse = false) => {}

// Acre conversion functions
const acToHa = (value, reverse = false) => {
	return calculateValue(value, !reverse, 0.4046856422)
}

const acToM = (value, reverse = false) => {}

const acToKM = (value, reverse = false) => {}

const acToMi = (value, reverse = false) => {}

// Hectare conversion functions
const haToM = (value, reverse = false) => {}

const haToKM = (value, reverse = false) => {}

const haToMi = (value, reverse = false) => {}

// Square Meter conversion functions
const squareMToKM = (value, reverse = false) => {
	return calculateValue(value, reverse, 1000000)
}

const squareMToMi = (value, reverse = false) => {
	return squareKMToMi(squareMToKM(value, reverse), reverse)
}

// Square Kilometer conversion function
const squareKMToMi = (value, reverse = false) => {
	return calculateValue(value, reverse, 2.58998811)
}

function Area() {
	this["square millimeter"] = {
		symbol: "mm<sup>2</sup>",
		toSquareCentimeter: squareMMToCM,
		toSquareInch: squareMMToIn,
		toSquareFeet: squareMMToFt,
		toSquareYard: squareMMToYd,
		toAcre: squareMMToAc,
		toHectare: squareMMToHa,
		toSquareMeter: squareMMToM,
		toSquareKilometer: squareMMToKM,
		toSquareMile: squareMMToMi,
	}

	this["square centimeter"] = {
		symbol: "cm<sup>2</sup>",
		toSquareMillimeter(value) {
			return squareMMToCM(value, true)
		},
		toSquareInch: squareCMToIn,
		toSquareFeet: squareCMToFt,
		toSquareYard: squareCMToYd,
		toAcre: squareCMToAc,
		toHectare: squareCMToHa,
		toSquareMeter: squareCMToM,
		toSquareKilometer: squareCMToKM,
		toSquareMile: squareCMToMi,
	}

	this["square inch"] = {
		symbol: "in<sup>2</sup>",
		toSquareMillimeter(value) {
			return squareMMToIn(value, true)
		},
		toSquareCentimeter(value) {
			return squareCMToIn(value, true)
		},
		toSquareFeet: squareINToFt,
		toSquareYard: squareINToYd,
		toAcre: squareINToAc,
		toHectare: squareINToHa,
		toSquareMeter: squareINToM,
		toSquareKilometer: squareINToKM,
		toSquareMile: squareINToMi,
	}

	this["square feet"] = {
		symbol: "ft<sup>2</sup>",
		toSquareMillimeter(value) {
			return squareMMToFt(value, true)
		},
		toSquareCentimeter(value) {
			return squareCMToFt(value, true)
		},
		toSquareInch(value) {
			return squareINToFt(value, true)
		},
		toSquareYard: squareFTToYd,
		toAcre: squareFTToAc,
		toHectare: squareFTToHa,
		toSquareMeter: squareFTToM,
		toSquareKilometer: squareFTToKM,
		toSquareMile: squareFTToMi,
	}

	this["square yard"] = {
		symbol: "yd<sup>2</sup>",
		toSquareMillimeter(value) {
			return squareMMToYd(value, true)
		},
		toSquareCentimeter(value) {
			return squareCMToYd(value, true)
		},
		toSquareInch(value) {
			return squareINToYd(value, true)
		},
		toSquareFoot(value) {
			return squareFTToYd(value, true)
		},
		toAcre: squareYDToAc,
		toHectare: squareYDToHa,
		toSquareMeter: squareYDToM,
		toSquareKilometer: squareYDToKM,
		toSquareMile: squareYDToMi,
	}

	this["acre"] = {
		symbol: "ac",
		toSquareMillimeter(value) {
			return squareMMToAc(value, true)
		},
		toSquareCentimeter(value) {
			return squareCMToAc(value, true)
		},
		toSquareInch(value) {
			return squareINToAc(value, true)
		},
		toSquareFoot(value) {
			return squareFTToAc(value, true)
		},
		toSquareYard(value) {
			return squareYDToAc(value, true)
		},
		toHectare: acToHa,
		toSquareMeter: acToM,
		toSquareKilometer: acToKM,
		toSquareMile: acToMi,
	}

	this["hectare"] = {
		symbol: "ha",
		toSquareMillimeter(value) {
			return squareMMToHa(value, true)
		},
		toSquareCentimeter(value) {
			return squareCMToHa(value, true)
		},
		toSquareInch(value) {
			return squareINToHa(value, true)
		},
		toSquareFoot(value) {
			return squareFTToHa(value, true)
		},
		toSquareYard(value) {
			return squareYDToHa(value, true)
		},
		toAcre(value) {
			return acToHa(value, true)
		},
		toSquareMeter: haToM,
		toSquareKilometer: haToKM,
		toSquareMile: haToMi,
	}

	this["square meter"] = {
		symbol: "m<sup>2</sup>",
		toSquareMillimeter(value) {
			return squareMMToM(value, true)
		},
		toSquareCentimeter(value) {
			return squareCMToM(value, true)
		},
		toSquareInch(value) {
			return squareINToM(value, true)
		},
		toSquareFoot(value) {
			return squareFTToM(value, true)
		},
		toSquareYard(value) {
			return squareYDToM(value, true)
		},
		toAcre(value) {
			return acToM(value, true)
		},
		toHectare(value) {
			return haToM(value, true)
		},
		toSquareKilometer: squareMToKM,
		toSquareMile: squareMToMi,
	}

	this["square kilometer"] = {
		symbol: "km<sup>2</sup>",
		toSquareMillimeter(value) {
			return squareMMToKM(value, true)
		},
		toSquareCentimeter(value) {
			return squareCMToKM(value, true)
		},
		toSquareInch(value) {
			return squareINToKM(value, true)
		},
		toSquareFoot(value) {
			return squareFTToKM(value, true)
		},
		toSquareYard(value) {
			return squareYDToKM(value, true)
		},
		toAcre(value) {
			return acToKM(value, true)
		},
		toHectare(value) {
			return haToKM(value, true)
		},
		toSquareMeter(value) {
			return squareMToKM(value, true)
		},
		toSquareMile: squareKMToMi,
	}

	this["square mile"] = {
		symbol: "mi<sup>2</sup>",
		toSquareMillimeter(value) {
			return squareMMToMi(value, true)
		},
		toSquareCentimeter(value) {
			return squareCMToMi(value, true)
		},
		toSquareInch(value) {
			return squareINToMi(value, true)
		},
		toSquareFoot(value) {
			return squareFTToMi(value, true)
		},
		toSquareYard(value) {
			return squareYDToMi(value, true)
		},
		toAcre(value) {
			return acToMi(value, true)
		},
		toHectare(value) {
			return haToMi(value, true)
		},
		toSquareMeter(value) {
			return squareMToMi(value, true)
		},
		toSquareKilometer(value) {
			return squareKMToMi(value, true)
		},
	}

	this.defaults = ["square millimeter", "square meter", "square mile"]
}

// export default Area
module.exports = Area
