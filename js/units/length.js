// import { calculateValue } from "../helper.js"
const helper = require("../helper.js")

// millimeter conversion functions
const mmToCM = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 10)
}

const mmToIN = (value, reverse = false) => {
	return cmToIN(mmToCM(value, reverse), reverse)
}

const mmToFT = (value, reverse = false) => {
	return inToFT(mmToIN(value, reverse), reverse)
}

const mmToYD = (value, reverse = false) => {
	return ftToYD(mmToFT(value, reverse), reverse)
}

const mmToM = (value, reverse = false) => {
	return cmToM(mmToCM(value, reverse), reverse)
}

const mmToKM = (value, reverse = false) => {
	return mToKM(mmToM(value, reverse), reverse)
}

const mmToMI = (value, reverse = false) => {
	return kmToMI(mmToKM(value, reverse), reverse)
}

const mmToNM = (value, reverse = false) => {
	return miToNM(mmToMI(value, reverse), reverse)
}

// centimeter conversion functions
const cmToIN = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 2.54)
}

const cmToFT = (value, reverse = false) => {
	return inToFT(cmToIN(value, reverse), reverse)
}

const cmToYD = (value, reverse = false) => {
	return ftToYD(cmToFT(value, reverse), reverse)
}

const cmToM = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 100)
}

const cmToKM = (value, reverse = false) => {
	return mToKM(cmToM(value, reverse), reverse)
}

const cmToMI = (value, reverse = false) => {
	return kmToMI(cmToKM(value, reverse), reverse)
}

const cmToNM = (value, reverse = false) => {
	return miToNM(cmToMI(value, reverse), reverse)
}

// inch conversion functions
const inToFT = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 12)
}

const inToYD = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 36)
}

const inToM = (value, reverse = false) => {
	return ydToM(inToYD(value, reverse), reverse)
}

const inToKM = (value, reverse = false) => {
	return mToKM(inToM(value, reverse), reverse)
}

const inToMI = (value, reverse = false) => {
	return kmToMI(inToKM(value, reverse), reverse)
}

const inToNM = (value, reverse = false) => {
	return miToNM(inToMI(value, reverse), reverse)
}

// foot conversion functions
const ftToYD = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 3)
}

const ftToM = (value, reverse = false) => {
	return ydToM(ftToYD(value, reverse), reverse)
}

const ftToKM = (value, reverse = false) => {
	return mToKM(ftToM(value, reverse), reverse)
}

const ftToMI = (value, reverse = false) => {
	return kmToMI(ftToKM(value, reverse), reverse)
}

const ftToNM = (value, reverse = false) => {
	return miToNM(ftToMI(value, reverse), reverse)
}

// yard conversion functions
const ydToM = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 1.0936132983377078)
}

const ydToKM = (value, reverse = false) => {
	return mToKM(ydToM(value, reverse), reverse)
}

const ydToMI = (value, reverse = false) => {
	return kmToMI(ydToKM(value, reverse), reverse)
}

const ydToNM = (value, reverse = false) => {
	return miToNM(ydToMI(value, reverse), reverse)
}

// meter conversion functions
const mToKM = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 1000)
}

const mToMI = (value, reverse = false) => {
	return kmToMI(mToKM(value, reverse), reverse)
}

const mToNM = (value, reverse = false) => {
	return kmToNM(mToKM(value, reverse), reverse)
}

// kilometer conversion functions
const kmToMI = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 1.609344)
}

const kmToNM = (value, reverse = false) => {
	return miToNM(kmToMI(value, reverse), reverse)
}

// mile conversion function
const miToNM = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 1.1507794480235425)
}

function Length() {
	this.millimeter = {
		symbol: "mm",
		toCentimeter: mmToCM,
		toInch: mmToIN,
		toFeet: mmToFT,
		toYard: mmToYD,
		toMeter: mmToM,
		toKilometer: mmToKM,
		toMile: mmToMI,
		toNauticalMile: mmToNM,
	}

	this.centimeter = {
		symbol: "cm",
		toMillimeter(value) {
			return mmToCM(value, true)
		},
		toInch: cmToIN,
		toFeet: cmToFT,
		toYard: cmToYD,
		toMeter: cmToM,
		toKilometer: cmToKM,
		toMile: cmToMI,
		toNauticalMile: cmToNM,
	}

	this.inch = {
		symbol: "in",
		toMillimeter(value) {
			return mmToIN(value, true)
		},
		toCentimeter(value) {
			return cmToIN(value, true)
		},
		toFeet: inToFT,
		toYard: inToYD,
		toMeter: inToM,
		toKilometer: inToKM,
		toMile: inToMI,
		toNauticalMile: inToNM,
	}

	this.feet = {
		symbol: "ft",
		toMillimeter(value) {
			return mmToFT(value, true)
		},
		toCentimeter(value) {
			return cmToFT(value, true)
		},
		toInch(value) {
			return inToFT(value, true)
		},
		toYard: ftToYD,
		toMeter: ftToM,
		toKilometer: ftToKM,
		toMile: ftToMI,
		toNauticalMile: ftToNM,
	}

	this.yard = {
		symbol: "yd",
		toMillimeter(value) {
			return mmToYD(value, true)
		},
		toCentimeter(value) {
			return cmToYD(value, true)
		},
		toInch(value) {
			return inToYD(value, true)
		},
		toFeet(value) {
			return ftToYD(value, true)
		},
		toMeter: ydToM,
		toKilometer: ydToKM,
		toMile: ydToMI,
		toNauticalMile: ydToNM,
	}

	this.meter = {
		symbol: "m",
		toMillimeter(value) {
			return mmToM(value, true)
		},
		toCentimeter(value) {
			return cmToM(value, true)
		},
		toInch(value) {
			return inToM(value, true)
		},
		toFeet(value) {
			return ftToM(value, true)
		},
		toYard(value) {
			return ydToM(value, true)
		},
		toKilometer: mToKM,
		toMile: mToMI,
		toNauticalMile: mToNM,
	}

	this.kilometer = {
		symbol: "m",
		toMillimeter(value) {
			return mmToKM(value, true)
		},
		toCentimeter(value) {
			return cmToKM(value, true)
		},
		toInch(value) {
			return inToKM(value, true)
		},
		toFeet(value) {
			return ftToKM(value, true)
		},
		toYard(value) {
			return ydToKM(value, true)
		},
		toMeter(value) {
			return mToKM(value, true)
		},
		toMile: kmToMI,
		toNauticalMile: kmToNM,
	}

	this.mile = {
		symbol: "mi",
		toMillimeter(value) {
			return mmToMI(value, true)
		},
		toCentimeter(value) {
			return cmToMI(value, true)
		},
		toInch(value) {
			return inToMI(value, true)
		},
		toFeet(value) {
			return ftToMI(value, true)
		},
		toYard(value) {
			return ydToMI(value, true)
		},
		toMeter(value) {
			return mToMI(value, true)
		},
		toKilometer(value) {
			return kmToMI(value, true)
		},
		toNauticalMile: miToNM,
	}

	this["nautical mile"] = {
		symbol: "nm",
		toMillimeter(value) {
			return mmToNM(value, true)
		},
		toCentimeter(value) {
			return cmToNM(value, true)
		},
		toInch(value) {
			return inToNM(value, true)
		},
		toFeet(value) {
			return ftToNM(value, true)
		},
		toYard(value) {
			return ydToNM(value, true)
		},
		toMeter(value) {
			return mToNM(value, true)
		},
		toKilometer(value) {
			return kmToNM(value, true)
		},
		toMile(value) {
			return miToNM(value, true)
		},
	}

	this.defaults = ["centimeter", "kilometer", "mile"]
}

// export default Length
module.exports = Length
