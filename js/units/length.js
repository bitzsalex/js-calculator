// import { calculateValue } from "../helper.js"
const helper = require("../helper.js")

// millimeter conversion functions
const mmToCM = (value, reverse = false) => {}

const mmToIN = (value, reverse = false) => {}

const mmToFT = (value, reverse = false) => {}

const mmToYD = (value, reverse = false) => {}

const mmToM = (value, reverse = false) => {}

const mmToKM = (value, reverse = false) => {}

const mmToMI = (value, reverse = false) => {}

const mmToNM = (value, reverse = false) => {}

// centimeter conversion functions
const cmToIN = (value, reverse = false) => {}

const cmToFT = (value, reverse = false) => {}

const cmToYD = (value, reverse = false) => {}

const cmToM = (value, reverse = false) => {}

const cmToKM = (value, reverse = false) => {}

const cmToMI = (value, reverse = false) => {}

const cmToNM = (value, reverse = false) => {}

// inch conversion functions
const inToFT = (value, reverse = false) => {}

const inToYD = (value, reverse = false) => {}

const inToM = (value, reverse = false) => {}

const inToKM = (value, reverse = false) => {}

const inToMI = (value, reverse = false) => {}

const inToNM = (value, reverse = false) => {}

// foot conversion functions
const ftToYD = (value, reverse = false) => {}

const ftToM = (value, reverse = false) => {}

const ftToKM = (value, reverse = false) => {}

const ftToMI = (value, reverse = false) => {}

const ftToNM = (value, reverse = false) => {}

// yard conversion functions
const ydToM = (value, reverse = false) => {}

const ydToKM = (value, reverse = false) => {}

const ydToMI = (value, reverse = false) => {}

const ydToNM = (value, reverse = false) => {}

// meter conversion functions
const mToKM = (value, reverse = false) => {}

const mToMI = (value, reverse = false) => {}

const mToNM = (value, reverse = false) => {}

// kilometer conversion functions
const kmToMI = (value, reverse = false) => {}

const kmToNM = (value, reverse = false) => {}

// mile conversion function
const miToNM = (value, reverse = false) => {}

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
		toNauticalMiles: mmToNM,
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
		toNauticalMiles: cmToNM,
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
		toNauticalMiles: inToNM,
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
		toNauticalMiles: ftToNM,
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
		toNauticalMiles: ydToNM,
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
		toNauticalMiles: mToNM,
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
		toNauticalMiles: kmToNM,
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
		toNauticalMiles: miToNM,
	}

	this["nautical miles"] = {
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
