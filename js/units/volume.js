import "../helper.js"

// cubic centimeter conversion functions
const cm3ToML = (value, reverse = false) => {
	return calculateValue(value, !reverse, 1)
}
const cm3ToCL = (value, reverse = false) => {
	return calculateValue(value, !reverse, 0.1)
}
const cm3ToIN3 = (value, reverse = false) => {
	return clToIN3(cm3ToCL(value, reverse), reverse)
}
const cm3ToDL = (value, reverse = false) => {
	return in3ToDL(cm3ToIN3(value, reverse), reverse)
}
const cm3ToDM3 = (value, reverse = false) => {
	return dlToDM3(cm3ToDL(value, reverse), reverse)
}
const cm3ToL = (value, reverse = false) => {
	return dm3ToL(cm3ToDM3(value, reverse), reverse)
}
const cm3ToGAL = (value, reverse = false) => {
	return lToGAL(cm3ToL(value, reverse), reverse)
}
const cm3ToDAL = (value, reverse = false) => {
	return galToDAL(cm3ToGAL(value, reverse), reverse)
}
const cm3ToFT3 = (value, reverse = false) => {
	return dalToFT3(cm3ToDAL(value, reverse), reverse)
}
const cm3ToHL = (value, reverse = false) => {
	return ft3ToHL(cm3ToFT3(value, reverse), reverse)
}
const cm3ToM3 = (value, reverse = false) => {
	return hlToM3(cm3ToHL(value, reverse), reverse)
}
const cm3ToKL = cm3ToM3

// milliliter conversion functions
const mlToCL = cm3ToCL
const mlToIN3 = cm3ToIN3
const mlToDL = cm3ToDL
const mlToDM3 = cm3ToDM3
const mlToL = cm3ToL
const mlToGAL = cm3ToGAL
const mlToDAL = cm3ToDAL
const mlToFT3 = cm3ToFT3
const mlToHL = cm3ToHL
const mlToM3 = cm3ToM3
const mlToKL = cm3ToM3

// centiliter conversion functions
const clToIN3 = (value, reverse = false) => {
	return calculateValue(value, !reverse, 0.61023744094732)
}
const clToDL = (value, reverse = false) => {
	return in3ToDL(clToIN3(value, reverse), reverse)
}
const clToDM3 = (value, reverse = false) => {
	return dlToDM3(clToDL(value, reverse), reverse)
}
const clToL = clToDM3
const clToGAL = (value, reverse = false) => {
	return lToGAL(clToL(value, reverse), reverse)
}
const clToDAL = (value, reverse = false) => {
	return galToDAL(clToGAL(value, reverse), reverse)
}
const clToFT3 = (value, reverse = false) => {
	return dalToFT3(clToDAL(value, reverse), reverse)
}
const clToHL = (value, reverse = false) => {
	return ft3ToHL(clToFT3(value, reverse), reverse)
}
const clToM3 = (value, reverse = false) => {
	return hlToM3(clToHL(value, reverse), reverse)
}
const clToKL = clToM3

// cubic inch conversion functions
const in3ToDL = (value, reverse = false) => {
	return calculateValue(value, !reverse, 0.16387064)
}
const in3ToDM3 = (value, reverse = false) => {
	return dlToDM3(in3ToDL(value, reverse), reverse)
}
const in3ToL = (value, reverse = false) => {
	return dm3ToL(in3ToDM3(value, reverse), reverse)
}
const in3ToGAL = (value, reverse = false) => {
	return lToGAL(in3ToL(value, reverse), reverse)
}
const in3ToDAL = (value, reverse = false) => {
	return galToDAL(in3ToGAL(value, reverse), reverse)
}
const in3ToFT3 = (value, reverse = false) => {
	return dalToFT3(in3ToDAL(value, reverse), reverse)
}
const in3ToHL = (value, reverse = false) => {
	return ft3ToHL(in3ToFT3(value, reverse), reverse)
}
const in3ToM3 = (value, reverse = false) => {
	return hlToM3(in3ToHL(value, reverse), reverse)
}
const in3ToKL = in3ToM3

// deciliter conversion functions
const dlToDM3 = (value, reverse = false) => {
	return calculateValue(value, !reverse, 0.1)
}
const dlToL = dlToDM3
const dlToGAL = (value, reverse = false) => {
	return lToGAL(dlToL(value, reverse), reverse)
}
const dlToDAL = (value, reverse = false) => {
	return galToDAL(dlToGAL(value, reverse), reverse)
}
const dlToFT3 = (value, reverse = false) => {
	return dalToFT3(dlToDAL(value, reverse), reverse)
}
const dlToHL = (value, reverse = false) => {
	return ft3ToHL(dlToFT3(value, reverse), reverse)
}
const dlToM3 = (value, reverse = false) => {
	return hlToM3(dlToHL(value, reverse), reverse)
}
const dlToKL = dlToM3

// cubic decimeter conversion functions
const dm3ToL = (value, reverse = false) => {
	return calculateValue(value, !reverse, 1)
}
const dm3ToGAL = (value, reverse = false) => {
	return calculateValue(value, !reverse, 0.21996924829909)
}
const dm3ToDAL = (value, reverse = false) => {
	return galToDAL(dm3ToGAL(value, reverse), reverse)
}
const dm3ToFT3 = (value, reverse = false) => {
	return dalToFT3(dm3ToDAL(value, reverse), reverse)
}
const dm3ToHL = (value, reverse = false) => {
	return ft3ToHL(dm3ToFT3(value, reverse), reverse)
}
const dm3ToM3 = (value, reverse = false) => {
	return hlToM3(dm3ToHL(value, reverse), reverse)
}
const dm3ToKL = dm3ToM3

// liter conversion functions
const lToGAL = dm3ToGAL
const lToDAL = dm3ToDAL
const lToFT3 = dm3ToFT3
const lToHL = dm3ToHL
const lToM3 = dm3ToM3
const lToKL = dm3ToKL

// gallon conversion functions
const galToDAL = (value, reverse = false) => {
	return calculateValue(value, !reverse, 0.454609)
}
const galToFT3 = (value, reverse = false) => {
	return dalToFT3(galToDAL(value, reverse), reverse)
}
const galToHL = (value, reverse = false) => {
	return ft3ToHL(galToFT3(value, reverse), reverse)
}
const galToM3 = (value, reverse = false) => {
	return hlToM3(galToHL(value, reverse), reverse)
}
const galToKL = galToM3

// decaliter conversion functions
const dalToFT3 = (value, reverse = false) => {
	return calculateValue(value, !reverse, 0.35314666721489)
}
const dalToHL = (value, reverse = false) => {
	return ft3ToHL(dalToFT3(value, reverse), reverse)
}
const dalToM3 = (value, reverse = false) => {
	return hlToM3(dalToHL(value, reverse), reverse)
}
const dalToKL = dalToM3

// cubic foot conversion functions
const ft3ToHL = (value, reverse = false) => {
	return calculateValue(value, !reverse, 0.28316846592)
}
const ft3ToM3 = (value, reverse = false) => {
	return hlToM3(ft3ToHL(value, reverse), reverse)
}
const ft3ToKL = ft3ToM3

// hectoliter conversion functions
const hlToM3 = (value, reverse = false) => {
	return calculateValue(value, reverse, 10)
}
const hlToKL = hlToM3

// cubic meter conversion function
const m3ToKL = (value, reverse = false) => {
	return calculateValue(value, reverse, 1)
}

function Volume() {
	this["cubic centimeter"] = {
		symbol: "cm",
		supPost: "3",
		toMilliliter: cm3ToML,
		toCentiliter: cm3ToCL,
		toCubicInch: cm3ToIN3,
		toDeciliter: cm3ToDL,
		toCubicDecimeter: cm3ToDM3,
		toLiter: cm3ToL,
		toGallon: cm3ToGAL,
		toDecaliter: cm3ToDAL,
		toCubicFoot: cm3ToFT3,
		toHectoliter: cm3ToHL,
		toCubicMeter: cm3ToM3,
		toKiloliter: cm3ToKL,
	}

	this.milliliter = {
		symbol: "ml",
		toCubicCentimeter(value) {
			return cm3ToML(value, true)
		},
		toCentiliter: mlToCL,
		toCubicInch: mlToIN3,
		toDeciliter: mlToDL,
		toCubicDecimeter: mlToDM3,
		toLiter: mlToL,
		toGallon: mlToGAL,
		toDecaliter: mlToDAL,
		toCubicFoot: mlToFT3,
		toHectoliter: mlToHL,
		toCubicMeter: mlToM3,
		toKiloliter: mlToKL,
	}

	this.centiliter = {
		symbol: "cl",
		toCubicCentimeter(value) {
			return cm3ToCL(value, true)
		},
		toMilliliter(value) {
			return mlToCL(value, true)
		},
		toCubicInch: clToIN3,
		toDeciliter: clToDL,
		toCubicDecimeter: clToDM3,
		toLiter: clToL,
		toGallon: clToGAL,
		toDecaliter: clToDAL,
		toCubicFoot: clToFT3,
		toHectoliter: clToHL,
		toCubicMeter: clToM3,
		toKiloliter: clToKL,
	}

	this["cubic inch"] = {
		symbol: "in",
		supPost: 3,
		toCubicCentimeter(value) {
			cm3ToIN3(value, true)
		},
		toMilliliter(value) {
			return mlToIN3(value, true)
		},
		toCentiliter(value) {
			return clToIN3(value, true)
		},
		toDeciliter: in3ToDL,
		toCubicDecimeter: in3ToDM3,
		toLiter: in3ToL,
		toGallon: in3ToGAL,
		toDecaliter: in3ToDAL,
		toCubicFoot: in3ToFT3,
		toHectoliter: in3ToHL,
		toCubicMeter: in3ToM3,
		toKiloliter: in3ToKL,
	}

	this.deciliter = {
		symbol: "dL",
		toCubicCentimeter(value) {
			cm3ToDL(value, true)
		},
		toMilliliter(value) {
			return mlToDL(value, true)
		},
		toCentiliter(value) {
			return clToDL(value, true)
		},
		toCubicInch(value) {
			return in3ToDL(value, true)
		},
		toCubicDecimeter: dlToDM3,
		toLiter: dlToL,
		toGallon: dlToGAL,
		toDecaliter: dlToDAL,
		toCubicFoot: dlToFT3,
		toHectoliter: dlToHL,
		toCubicMeter: dlToM3,
		toKiloliter: dlToKL,
	}

	this["cubic decimeter"] = {
		symbol: "dm",
		supPost: 3,
		toCubicCentimeter(value) {
			cm3ToDM3(value, true)
		},
		toMilliliter(value) {
			return mlToDM3(value, true)
		},
		toCentiliter(value) {
			return clToDM3(value, true)
		},
		toCubicInch(value) {
			return in3ToDM3(value, true)
		},
		toDeciliter(value) {
			return dlToDM3(value, true)
		},
		toLiter: dm3ToL,
		toGallon: dm3ToGAL,
		toDecaliter: dm3ToDAL,
		toCubicFoot: dm3ToFT3,
		toHectoliter: dm3ToHL,
		toCubicMeter: dm3ToM3,
		toKiloliter: dm3ToKL,
	}

	this.liter = {
		symbol: "L",
		toCubicCentimeter(value) {
			cm3ToL(value, true)
		},
		toMilliliter(value) {
			return mlToL(value, true)
		},
		toCentiliter(value) {
			return clToL(value, true)
		},
		toCubicInch(value) {
			return in3ToL(value, true)
		},
		toDeciliter(value) {
			return dlToL(value, true)
		},
		toCubicDecimeter(value) {
			return dm3ToL(value, true)
		},
		toGallon: lToGAL,
		toDecaliter: lToDAL,
		toCubicFoot: lToFT3,
		toHectoliter: lToHL,
		toCubicMeter: lToM3,
		toKiloliter: lToKL,
	}

	this.gallon = {
		symbol: "gal",
		toCubicCentimeter(value) {
			cm3ToGAL(value, true)
		},
		toMilliliter(value) {
			return mlToGAL(value, true)
		},
		toCentiliter(value) {
			return clToGAL(value, true)
		},
		toCubicInch(value) {
			return in3ToGAL(value, true)
		},
		toDeciliter(value) {
			return dlToGAL(value, true)
		},
		toCubicDecimeter(value) {
			return dm3ToGAL(value, true)
		},
		toLiter(value) {
			return lToGAL(value, true)
		},
		toDecaliter: galToDAL,
		toCubicFoot: galToFT3,
		toHectoliter: galToHL,
		toCubicMeter: galToM3,
		toKiloliter: galToKL,
	}

	this.decaliter = {
		symbol: "dal",
		toCubicCentimeter(value) {
			cm3ToDAL(value, true)
		},
		toMilliliter(value) {
			return mlToDAL(value, true)
		},
		toCentiliter(value) {
			return clToDAL(value, true)
		},
		toCubicInch(value) {
			return in3ToDAL(value, true)
		},
		toDeciliter(value) {
			return dlToDAL(value, true)
		},
		toCubicDecimeter(value) {
			return dm3ToDAL(value, true)
		},
		toLiter(value) {
			return lToDAL(value, true)
		},
		toGallon(value) {
			return galToDAL(value, true)
		},
		toCubicFoot: dalToFT3,
		toHectoliter: dalToHL,
		toCubicMeter: dalToM3,
		toKiloliter: dalToKL,
	}

	this["cubic foot"] = {
		symbol: "ft",
		supPost: 3,
		toCubicCentimeter(value) {
			cm3ToFT3(value, true)
		},
		toMilliliter(value) {
			return mlToFT3(value, true)
		},
		toCentiliter(value) {
			return clToFT3(value, true)
		},
		toCubicInch(value) {
			return in3ToFT3(value, true)
		},
		toDeciliter(value) {
			return dlToFT3(value, true)
		},
		toCubicDecimeter(value) {
			return dm3ToFT3(value, true)
		},
		toLiter(value) {
			return lToFT3(value, true)
		},
		toGallon(value) {
			return galToFT3(value, true)
		},
		toDecaliter(value) {
			return dalToFT3(value, true)
		},
		toHectoliter: ft3ToHL,
		toCubicMeter: ft3ToM3,
		toKiloliter: ft3ToKL,
	}

	this.hectoliter = {
		symbol: "hl",
		toCubicCentimeter(value) {
			cm3ToHL(value, true)
		},
		toMilliliter(value) {
			return mlToHL(value, true)
		},
		toCentiliter(value) {
			return clToHL(value, true)
		},
		toCubicInch(value) {
			return in3ToHL(value, true)
		},
		toDeciliter(value) {
			return dlToHL(value, true)
		},
		toCubicDecimeter(value) {
			return dm3ToHL(value, true)
		},
		toLiter(value) {
			return lToHL(value, true)
		},
		toGallon(value) {
			return galToHL(value, true)
		},
		toDecaliter(value) {
			return dalToHL(value, true)
		},
		toCubicFoot(value) {
			return ft3ToHL(value, true)
		},
		toCubicMeter: hlToM3,
		toKiloliter: hlToKL,
	}

	this["cubic meter"] = {
		symbol: "m",
		supPost: 3,
		toCubicCentimeter(value) {
			cm3ToM3(value, true)
		},
		toMilliliter(value) {
			return mlToM3(value, true)
		},
		toCentiliter(value) {
			return clToM3(value, true)
		},
		toCubicInch(value) {
			return in3ToM3(value, true)
		},
		toDeciliter(value) {
			return dlToM3(value, true)
		},
		toCubicDecimeter(value) {
			return dm3ToM3(value, true)
		},
		toLiter(value) {
			return lToM3(value, true)
		},
		toGallon(value) {
			return galToM3(value, true)
		},
		toDecaliter(value) {
			return dalToM3(value, true)
		},
		toCubicFoot(value) {
			return ft3ToM3(value, true)
		},
		toHectoliter(value) {
			return hlToM3(value, true)
		},
		toKiloliter: m3ToKL,
	}

	this.kiloliter = {
		symbol: "kL",
		toCubicCentimeter(value) {
			cm3ToKL(value, true)
		},
		toMilliliter(value) {
			return mlToKL(value, true)
		},
		toCentiliter(value) {
			return clToKL(value, true)
		},
		toCubicInch(value) {
			return in3ToKL(value, true)
		},
		toDeciliter(value) {
			return dlToKL(value, true)
		},
		toCubicDecimeter(value) {
			return dm3ToKL(value, true)
		},
		toLiter(value) {
			return lToKL(value, true)
		},
		toGallon(value) {
			return galToKL(value, true)
		},
		toDecaliter(value) {
			return dalToKL(value, true)
		},
		toCubicFoot(value) {
			return ft3ToKL(value, true)
		},
		toHectoliter(value) {
			return hlToKL(value, true)
		},
		toCubicMeter(value) {
			return m3ToKL(value, true)
		},
	}

	this.defaults = ["centiliter", "gallon", "kiloliter"]
}

export default Volume
