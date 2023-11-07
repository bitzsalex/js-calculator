import calculateValue from "../helper"

const multipleOf1024 = (value, reverse) => {
	return helper.calculateValue(value, reverse, 1024)
}

// Bit conversion functions
const bitToB = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 8)
}

const bitToKB = (value, reverse = false) => {
	return multipleOf1024(bitToB(value, reverse), reverse)
}

const bitToMB = (value, reverse = false) => {
	return multipleOf1024(bitToKB(value, reverse), reverse)
}

const bitToGB = (value, reverse = false) => {
	return multipleOf1024(bitToMB(value, reverse), reverse)
}

const bitToTB = (value, reverse = false) => {
	return multipleOf1024(bitToGB(value, reverse), reverse)
}

const bitToPB = (value, reverse = false) => {
	return multipleOf1024(bitToTB(value, reverse), reverse)
}

// Byte conversion functions
const bToKB = (value, reverse = false) => {
	return bitToKB(bitToB(value, !reverse), reverse)
}

const bToMB = (value, reverse = false) => {
	return kbToMB(bToKB(value, reverse), reverse)
}

const bToGB = (value, reverse = false) => {
	return mbToGB(bToMB(value, reverse), reverse)
}

const bToTB = (value, reverse = false) => {
	return gbToTB(bToGB(value, reverse), reverse)
}

const bToPB = (value, reverse = false) => {
	return tbToPB(bToTB(value, reverse), reverse)
}

// Kilobyte conversion functions
const kbToMB = (value, reverse = false) => {
	return multipleOf1024(value, reverse)
}

const kbToGB = (value, reverse = false) => {
	return mbToGB(kbToMB(value, reverse), reverse)
}

const kbToTB = (value, reverse = false) => {
	return gbToTB(kbToGB(value, reverse), reverse)
}

const kbToPB = (value, reverse = false) => {
	return tbToPB(kbToTB(value, reverse), reverse)
}

// Megabyte conversion functions
const mbToGB = (value, reverse = false) => {
	return multipleOf1024(value, reverse)
}

const mbToTB = (value, reverse = false) => {
	return gbToTB(mbToGB(value, reverse), reverse)
}

const mbToPB = (value, reverse = false) => {
	return tbToPB(mbToTB(value, reverse), reverse)
}

// Gigabyte conversion functions
const gbToTB = (value, reverse = false) => {
	return multipleOf1024(value, reverse)
}

const gbToPB = (value, reverse = false) => {
	return tbToPB(gbToTB(value, reverse), reverse)
}

// Terabyte conversion functions
const tbToPB = (value, reverse = false) => {
	return multipleOf1024(value, reverse)
}

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

	this.defaults = ["byte", "megabyte", "gigabyte"]
}

export default Data
