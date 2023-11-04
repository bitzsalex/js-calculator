// import calculateValue from "../helper"
const helper = require("../helper")

// Bit conversion functions
const bitToB = (value, reverse = false) => {
	console.log("Its here", value, reverse)
	return helper.calculateValue(value, reverse, 8)
}

const bitToKB = (value, reverse = false) => {
	return helper.calculateValue(bitToB(value, reverse), reverse, 1024)
}

const bitToMB = (value, reverse = false) => {
	return helper.calculateValue(bitToKB(value, reverse), reverse, 1024)
}

const bitToGB = (value, reverse = false) => {
	return helper.calculateValue(bitToMB(value, reverse), reverse, 1024)
}

const bitToTB = (value, reverse = false) => {
	return helper.calculateValue(bitToGB(value, reverse), reverse, 1024)
}

const bitToPB = (value, reverse = false) => {
	return helper.calculateValue(bitToTB(value, reverse), reverse, 1024)
}

// Byte conversion functions
const bToKB = (value, reverse = false) => {
	return bitToKB(bitToB(value, !reverse), reverse)
}

const bToMB = (value, reverse = false) => {}

const bToGB = (value, reverse = false) => {}

const bToTB = (value, reverse = false) => {}

const bToPB = (value, reverse = false) => {}

// Kilobyte conversion functions
const kbToMB = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 1024)
}

const kbToGB = (value, reverse = false) => {}

const kbToTB = (value, reverse = false) => {}

const kbToPB = (value, reverse = false) => {}

// Megabyte conversion functions
const mbToGB = (value, reverse = false) => {}

const mbToTB = (value, reverse = false) => {}

const mbToPB = (value, reverse = false) => {}

// Gigabyte conversion functions
const gbToTB = (value, reverse = false) => {}

const gbToPB = (value, reverse = false) => {}

// Terabyte conversion functions
const tbToPB = (value, reverse = false) => {}

function Data() {
	this.bit = {
		symbol: "bit",
		toByte: bitToB,
		toKilobyte: bitToKB,
		toMegabyte: bitToMB,
		toGigabyte: bitToGB,
		toTerabyte: bitToTB,
		toPetabyte: bitToPB,
	}

	this.byte = {
		symbol: "B",
		toBit(value) {
			return bitToB(value, true)
		},
		toKilobyte: bToKB,
		toMegabyte: bToMB,
		toGigabyte: bToGB,
		toTerabyte: bToTB,
		toPetabyte: bToPB,
	}

	this.kilobyte = {
		symbol: "KB",
		toBit(value) {
			return bitToKB(value, true)
		},
		toByte(value) {
			return bToKB(value, true)
		},
		toMegabyte: kbToMB,
		toGigabyte: kbToGB,
		toTerabyte: kbToTB,
		toPetabyte: kbToPB,
	}

	this.megabyte = {
		symbol: "MB",
		toBit(value) {
			return bitToMB(value, true)
		},
		toByte(value) {
			return bToMB(value, true)
		},
		toKilobyte(value) {
			return kbToMB(value, true)
		},
		toGigabyte: mbToGB,
		toTerabyte: mbToTB,
		toPetabyte: mbToPB,
	}

	this.gigabyte = {
		symbol: "GB",
		toBit(value) {
			return bitToGB(value, true)
		},
		toByte(value) {
			return bToGB(value, true)
		},
		toKilobyte(value) {
			return kbToGB(value, true)
		},
		toMegabyte(value) {
			return mbToGB(value, true)
		},
		toTerabyte: gbToTB,
		toPetabyte: gbToPB,
	}

	this.terabyte = {
		symbol: "TB",
		toBit(value) {
			return bitToTB(value, true)
		},
		toByte(value) {
			return bToTB(value, true)
		},
		toKilobyte(value) {
			return kbToTB(value, true)
		},
		toMegabyte(value) {
			return mbToTB(value, true)
		},
		toGigabyte(value) {
			return gbToTB(value, true)
		},
		toPetabyte: tbToPB,
	}

	this.petabyte = {
		symbol: "PB",
		toBit(value) {
			return bitToPB(value, true)
		},
		toByte(value) {
			return bToPB(value, true)
		},
		toKilobyte(value) {
			return kbToPB(value, true)
		},
		toMegabyte(value) {
			return mbToPB(value, true)
		},
		toGigabyte(value) {
			return gbToPB(value, true)
		},
		toTerabyte(value) {
			return tbToPB(value, true)
		},
	}
}

// export default Data
module.exports = Data
