// import { calculateValue } from "../helper"
const helper = require("../helper.js")

// inch per second conversion functions
const inpsToINPH = (value, reverse = false) => {}
const inpsToFTPS = (value, reverse = false) => {}
const inpsToFTPH = (value, reverse = false) => {}
const inpsToMPS = (value, reverse = false) => {}
const inpsToMPH = (value, reverse = false) => {}
const inpsToKMPS = (value, reverse = false) => {}
const inpsToKMPH = (value, reverse = false) => {}
const inpsToMIPS = (value, reverse = false) => {}
const inpsToMIPH = (value, reverse = false) => {}
const inpsToKN = (value, reverse = false) => {}

// inch per hour conversion functions
const inphToFTPS = (value, reverse = false) => {}
const inphToFTPH = (value, reverse = false) => {}
const inphToMPS = (value, reverse = false) => {}
const inphToMPH = (value, reverse = false) => {}
const inphToKMPS = (value, reverse = false) => {}
const inphToKMPH = (value, reverse = false) => {}
const inphToMIPS = (value, reverse = false) => {}
const inphToMIPH = (value, reverse = false) => {}
const inphToKN = (value, reverse = false) => {}

// foot per second conversion functions
const ftpsToFTPH = (value, reverse = false) => {
	return helper.calculateValue(value, !reverse, 3600)
}
const ftpsToMPS = (value, reverse = false) => {
	return ftphToMPS(ftpsToFTPH(value, reverse), reverse)
}
const ftpsToMPH = (value, reverse = false) => {
	return mpsToMPH(ftpsToMPS(value, reverse), reverse)
}
const ftpsToKMPS = (value, reverse = false) => {
	return mphToKMPS(ftpsToMPH(value, reverse), reverse)
}
const ftpsToKMPH = (value, reverse = false) => {
	return kmpsToKMPH(ftpsToKMPS(value, reverse), reverse)
}
const ftpsToMIPS = (value, reverse = false) => {
	return kmphToMIPS(ftpsToKMPH(value, reverse), reverse)
}
const ftpsToMIPH = (value, reverse = false) => {
	return mipsToMIPH(ftpsToMIPS(value, reverse), reverse)
}
const ftpsToKN = (value, reverse = false) => {
	return miphToKN(ftpsToMIPH(value, reverse), reverse)
}

// foot per hour conversion functions
const ftphToMPS = (value, reverse = false) => {
	return helper.calculateValue(value, !reverse, 0.0000846666667)
}
const ftphToMPH = (value, reverse = false) => {
	return mpsToMPH(ftphToMPS(value, reverse), reverse)
}
const ftphToKMPS = (value, reverse = false) => {
	return mphToKMPS(ftphToMPH(value, reverse), reverse)
}
const ftphToKMPH = (value, reverse = false) => {
	return kmpsToKMPH(ftphToKMPS(value, reverse), reverse)
}
const ftphToMIPS = (value, reverse = false) => {
	return kmphToMIPS(ftphToKMPH(value, reverse), reverse)
}
const ftphToMIPH = (value, reverse = false) => {
	return mipsToMIPH(ftphToMIPS(value, reverse), reverse)
}
const ftphToKN = (value, reverse = false) => {
	return miphToKN(ftphToMIPH(value, reverse), reverse)
}

// meter per second conversion functions
const mpsToMPH = (value, reverse = false) => {
	return helper.calculateValue(value, !reverse, 3600)
}
const mpsToKMPS = (value, reverse = false) => {
	return mphToKMPS(mpsToMPH(value, reverse), reverse)
}
const mpsToKMPH = (value, reverse = false) => {
	return kmpsToKMPH(mpsToKMPS(value, reverse), reverse)
}
const mpsToMIPS = (value, reverse = false) => {
	return kmphToMIPS(mpsToKMPH(value, reverse), reverse)
}
const mpsToMIPH = (value, reverse = false) => {
	return mipsToMIPH(mpsToMIPS(value, reverse), reverse)
}
const mpsToKN = (value, reverse = false) => {
	return miphToKN(mpsToMIPH(value, reverse), reverse)
}

// meter per hour conversion functions
const mphToKMPS = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 3600000)
}
const mphToKMPH = (value, reverse = false) => {
	return kmpsToKMPH(mphToKMPS(value, reverse), reverse)
}
const mphToMIPS = (value, reverse = false) => {
	return kmphToMIPS(mphToKMPH(value, reverse), reverse)
}
const mphToMIPH = (value, reverse = false) => {
	return mipsToMIPH(mphToMIPS(value, reverse), reverse)
}
const mphToKN = (value, reverse = false) => {
	return miphToKN(mphToMIPH(value, reverse), reverse)
}

// kilometer per second conversion functions
const kmpsToKMPH = (value, reverse = false) => {
	return helper.calculateValue(value, !reverse, 3600)
}
const kmpsToMIPS = (value, reverse = false) => {
	return kmphToMIPS(kmpsToKMPH(value, reverse), reverse)
}
const kmpsToMIPH = (value, reverse = false) => {
	return mipsToMIPH(kmpsToMIPS(value, reverse), reverse)
}
const kmpsToKN = (value, reverse = false) => {
	return miphToKN(kmpsToMIPH(value, reverse), reverse)
}

// kilometer per hour conversion functions
const kmphToMIPS = (value, reverse = false) => {
	return helper.calculateValue(value, !reverse, 0.00017260310895481)
}
const kmphToMIPH = (value, reverse = false) => {
	return mipsToMIPH(kmphToMIPS(value, reverse), reverse)
}
const kmphToKN = (value, reverse = false) => {
	return miphToKN(kmphToMIPH(value, reverse), reverse)
}

// mile per second conversion functions
const mipsToMIPH = (value, reverse = false) => {
	return helper.calculateValue(value, !reverse, 3600)
}
const mipsToKN = (value, reverse = false) => {
	return miphToKN(mipsToMIPH(value, reverse), reverse)
}

// mile per hour conversion function
const miphToKN = (value, reverse = false) => {
	return helper.calculateValue(value, !reverse, 0.86897624190816)
}

function Speed() {
	this["inch per second"] = {
		symbol: "in/s",
		toInchPerHour: inpsToINPH,
		toFootPerSecond: inpsToFTPS,
		toFootPerHour: inpsToFTPH,
		toMeterPerSecond: inpsToMPS,
		toMeterPerHour: inpsToMPH,
		toKilometerPerSecond: inpsToKMPS,
		toKilometerPerHour: inpsToKMPH,
		toMilePerSecond: inpsToMIPS,
		toMilePerHour: inpsToMIPH,
		toKnot: inpsToKN,
	}

	this["inch per hour"] = {
		symbol: "in/h",
		toInchPerSecond(value) { return inpsToINPH(value, true) },
		toFootPerSecond: inphToFTPS,
		toFootPerHour: inphToFTPH,
		toMeterPerSecond: inphToMPS,
		toMeterPerHour: inphToMPH,
		toKilometerPerSecond: inphToKMPS,
		toKilometerPerHour: inphToKMPH,
		toMilePerSecond: inphToMIPS,
		toMilePerHour: inphToMIPH,
		toKnot: inphToKN,
	}

	this["foot per second"] = {
		symbol: "ft/s",
		toInchPerSecond(value) { return inpsToFTPS(value, true) },
		toInchPerHour(value) { return inphToFTPS(value, true) },
		toFootPerHour: ftpsToFTPH,
		toMeterPerSecond: ftpsToMPS,
		toMeterPerHour: ftpsToMPH,
		toKilometerPerSecond: ftpsToKMPS,
		toKilometerPerHour: ftpsToKMPH,
		toMilePerSecond: ftpsToMIPS,
		toMilePerHour: ftpsToMIPH,
		toKnot: ftpsToKN,
	}

	this["foot per hour"] = {
		symbol: "ft/h",
		toInchPerSecond(value) { return inpsToFTPH(value, true) },
		toInchPerHour(value) { return inphToFTPH(value, true) },
		toFootPerSecond(value) { return ftpsToFTPH(value, true) },
		toMeterPerSecond: ftphToMPS,
		toMeterPerHour: ftphToMPH,
		toKilometerPerSecond: ftphToKMPS,
		toKilometerPerHour: ftphToKMPH,
		toMilePerSecond: ftphToMIPS,
		toMilePerHour: ftphToMIPH,
		toKnot: ftphToKN,
	}

	this["meter per second"] = {
		symbol: "m/s",
		toInchPerSecond(value) { return inpsToMPS(value, true) },
		toInchPerHour(value) { return inphToMPS(value, true) },
		toFootPerSecond(value) { return ftpsToMPS(value, true) },
		toFootPerHour(value) { return ftphToMPS(value, true) },
		toMeterPerHour: mpsToMPH,
		toKilometerPerSecond: mpsToKMPS,
		toKilometerPerHour: mpsToKMPH,
		toMilePerSecond: mpsToMIPS,
		toMilePerHour: mpsToMIPH,
		toKnot: mpsToKN,
	}

	this["meter per hour"] = {
		symbol: "m/h",
		toInchPerSecond(value) { return inpsToMPH(value, true) },
		toInchPerHour(value) { return inphToMPH(value, true) },
		toFootPerSecond(value) { return ftpsToMPH(value, true) },
		toFootPerHour(value) { return ftphToMPH(value, true) },
		toMeterPerSecond(value) { return mpsToMPH(value, true) },
		toKilometerPerSecond: mphToKMPS,
		toKilometerPerHour: mphToKMPH,
		toMilePerSecond: mphToMIPS,
		toMilePerHour: mphToMIPH,
		toKnot: mphToKN,
	}

	this["kilometer per second"] = {
		symbol: "km/s",
		toInchPerSecond(value) { return inpsToKMPS(value, true) },
		toInchPerHour(value) { return inphToKMPS(value, true) },
		toFootPerSecond(value) { return ftpsToKMPS(value, true) },
		toFootPerHour(value) { return ftphToKMPS(value, true) },
		toMeterPerSecond(value) { return mpsToKMPS(value, true) },
		toMeterPerHour(value) { return mphToKMPS(value, true) },
		toKilometerPerHour: kmpsToKMPH,
		toMilePerSecond: kmpsToMIPS,
		toMilePerHour: kmpsToMIPH,
		toKnot: kmpsToKN,
	}

	this["kilometer per hour"] = {
		symbol: "km/h",
		toInchPerSecond(value) { return inpsToKMPH(value, true) },
		toInchPerHour(value) { return inphToKMPH(value, true) },
		toFootPerSecond(value) { return ftpsToKMPH(value, true) },
		toFootPerHour(value) { return ftphToKMPH(value, true) },
		toMeterPerSecond(value) { return mpsToKMPH(value, true) },
		toMeterPerHour(value) { return mphToKMPH(value, true) },
		toKilometerPerSecond(value) { return kmpsToKMPH(value, true) },
		toMilePerSecond: kmphToMIPS,
		toMilePerHour: kmphToMIPH,
		toKnot: kmphToKN,
	}

	this["mile per second"] = {
		symbol: "mi/s",
		toInchPerSecond(value) { return inpsToMIPS(value, true) },
		toInchPerHour(value) { return inphToMIPS(value, true) },
		toFootPerSecond(value) { return ftpsToMIPS(value, true) },
		toFootPerHour(value) { return ftphToMIPS(value, true) },
		toMeterPerSecond(value) { return mpsToMIPS(value, true) },
		toMeterPerHour(value) { return mphToMIPS(value, true) },
		toKilometerPerSecond(value) { return kmpsToMIPS(value, true) },
		toKilometerPerHour(value) { return kmphToMIPS(value, true) },
		toMilePerHour: mipsToMIPH,
		toKnot: mipsToKN,
	}

	this["mile per hour"] = {
		symbol: "mi/h",
		toInchPerSecond(value) { return inpsToMIPH(value, true) },
		toInchPerHour(value) { return inphToMIPH(value, true) },
		toFootPerSecond(value) { return ftpsToMIPH(value, true) },
		toFootPerHour(value) { return ftphToMIPH(value, true) },
		toMeterPerSecond(value) { return mpsToMIPH(value, true) },
		toMeterPerHour(value) { return mphToMIPH(value, true) },
		toKilometerPerSecond(value) { return kmpsToMIPH(value, true) },
		toKilometerPerHour(value) { return kmphToMIPH(value, true) },
		toMilePerSecond(value) { return mipsToMIPH(value, true) },
		toKnot: miphToKN,
	}

	this["knot"] = {
		symbol: "kn",
		toInchPerSecond(value) { return inpsToKN(value, true) },
		toInchPerHour(value) { return inphToKN(value, true) },
		toFootPerSecond(value) { return ftpsToKN(value, true) },
		toFootPerHour(value) { return ftphToKN(value, true) },
		toMeterPerSecond(value) { return mpsToKN(value, true) },
		toMeterPerHour(value) { return mphToKN(value, true) },
		toKilometerPerSecond(value) { return kmpsToKN(value, true) },
		toKilometerPerHour(value) { return kmphToKN(value, true) },
		toMilePerSecond(value) { return mipsToKN(value, true) },
		toMilePerHour(value) { return miphToKN(value, true) },
	}

	this.defaults = ["inch per second", "kilometer per hour", "knot"]
}

// export default Speed
module.exports = Speed