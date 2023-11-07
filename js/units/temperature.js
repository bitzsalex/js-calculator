// celsius conversion functions
const cToDe = (value, reverse = false) => {}

const cToF = (value, reverse = false) => {}

const cToK = (value, reverse = false) => {}

const cToR = (value, reverse = false) => {}

const cToN = (value, reverse = false) => {}

// delisle conversion functions
const deToF = (value, reverse = false) => {}

const deToK = (value, reverse = false) => {}

const deToR = (value, reverse = false) => {}

const deToN = (value, reverse = false) => {}

// fahrenheit conversion functions
const fToK = (value, reverse = false) => {}

const fToR = (value, reverse = false) => {}

const fToN = (value, reverse = false) => {}

// kelvin conversion functions
const kToR = (value, reverse = false) => {}

const kToN = (value, reverse = false) => {}

// rankine conversion functions
const rToN = (value, reverse = false) => {}


function Temperature() {
	this.celsius = {
		symbol: "<sup>o</sup>C",
		toDelisle: cToDe,
		toFahrenheit: cToF,
		toKelvin: cToK,
		toRankine: cToR,
		toNewton: cToN,
	}

	this.delisle = {
		symbol: "<sup>o</sup>De",
		toCelsius(value) { return cToDe(value, true) },
		toFahrenheit: deToF,
		toKelvin: deToK,
		toRankine: deToR,
		toNewton: deToN,
	}

	this.fahrenheit = {
		symbol: "<sup>o</sup>F",
		toCelsius(value) { return cToF(value, true) },
		toDelisle(value) { return deToF(value, true) },
		toKelvin: fToK,
		toRankine: fToR,
		toNewton: fToN,
	}

	this.kelvin = {
		symbol: "K",
		toCelsius(value) { return cToK(value, true) },
		toDelisle(value) { return deToK(value, true) },
		toFahrenheit(value) { return fToK(value, true) },
		toRankine: kToR,
		toNewton: kToN,
	}

	this.rankine = {
		symbol: "<sup>o</sup>R",
		toCelsius(value) { return cToR(value, true) },
		toDelisle(value) { return deToR(value, true) },
		toFahrenheit(value) { return fToR(value, true) },
		toKelvin(value) { return kToR(value, true) },
		toNewton: rToN,
	}

	this.newton = {
		symbol: "<sup>o</sup>N",
		toCelsius(value) { return cToN(value, true) },
		toDelisle(value) { return deToN(value, true) },
		toFahrenheit(value) { return fToN(value, true) },
		toKelvin(value) { return kToN(value, true) },
		toRankine(value) { return rToN(value, true) },
	}
}

// export default Temperature
module.exports = Temperature