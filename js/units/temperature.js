// celsius conversion functions
const cToDe = (value, reverse = false) => {
	return reverse ? (value + 100) / 1.5 : value * 1.5 - 100
}

const cToF = (value, reverse = false) => {
	return reverse ? ((value - 32) * 5) / 9 : (value * 9) / 5 + 32
}

const cToK = (value, reverse = false) => {
	return reverse ? value - 273.15 : value + 273.15
}

const cToR = (value, reverse = false) => {
	return reverse ? ((value - 491.67) * 5) / 9 : (value * 9) / 5 + 491.67
}

const cToN = (value, reverse = false) => {
	return reverse ? (value * 100) / 33 : (value * 33) / 100
}

// delisle conversion functions
const deToF = (value, reverse = false) => {}

const deToK = (value, reverse = false) => {}

const deToR = (value, reverse = false) => {}

const deToN = (value, reverse = false) => {}

// fahrenheit conversion functions
const fToK = (value, reverse = false) => {
	return reverse ? cToF(cToK(value, true)) : cToK(cToF(value, true))
}

const fToR = (value, reverse = false) => {
	return reverse ? cToF(cToR(value, true)) : cToR(cToF(value, true))
}

const fToN = (value, reverse = false) => {
	return reverse ? cToF(cToN(value, true)) : cToN(cToF(value, true))
}

// kelvin conversion functions
const kToR = (value, reverse = false) => {
	return reverse ? cToK(cToR(value, true)) : cToR(cToK(value, true))
}

const kToN = (value, reverse = false) => {
	return reverse ? cToK(cToN(value, true)) : cToN(cToK(value, true))
}

// rankine conversion functions
const rToN = (value, reverse = false) => {
	return reverse ? ((value - 491.67) * 11) / 60 : (value * 60) / 11 + 491.67
}

function Temperature() {
	this.celsius = {
		symbol: "C",
		supPre: "o",
		toDelisle: cToDe,
		toFahrenheit: cToF,
		toKelvin: cToK,
		toRankine: cToR,
		toNewton: cToN,
	}

	this.delisle = {
		symbol: "De",
		supPre: "o",
		toCelsius(value) {
			return cToDe(value, true)
		},
		toFahrenheit: deToF,
		toKelvin: deToK,
		toRankine: deToR,
		toNewton: deToN,
	}

	this.fahrenheit = {
		symbol: "F",
		supPre: "o",
		toCelsius(value) {
			return cToF(value, true)
		},
		toDelisle(value) {
			return deToF(value, true)
		},
		toKelvin: fToK,
		toRankine: fToR,
		toNewton: fToN,
	}

	this.kelvin = {
		symbol: "K",
		toCelsius(value) {
			return cToK(value, true)
		},
		toDelisle(value) {
			return deToK(value, true)
		},
		toFahrenheit(value) {
			return fToK(value, true)
		},
		toRankine: kToR,
		toNewton: kToN,
	}

	this.rankine = {
		symbol: "R",
		supPre: "o",
		toCelsius(value) {
			return cToR(value, true)
		},
		toDelisle(value) {
			return deToR(value, true)
		},
		toFahrenheit(value) {
			return fToR(value, true)
		},
		toKelvin(value) {
			return kToR(value, true)
		},
		toNewton: rToN,
	}

	this.newton = {
		symbol: "N",
		supPre: "o",
		toCelsius(value) {
			return cToN(value, true)
		},
		toDelisle(value) {
			return deToN(value, true)
		},
		toFahrenheit(value) {
			return fToN(value, true)
		},
		toKelvin(value) {
			return kToN(value, true)
		},
		toRankine(value) {
			return rToN(value, true)
		},
	}

	this.defaults = ["celsius", "fahrenheit", "kelvin"]
}

// export default Temperature
module.exports = Temperature
