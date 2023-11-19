// import { calculateValue } from "../helper"
const helper = require("../helper")


// milligram conversion functions
const mgToCG = (value, reverse = false) => {}
const mgToDG = (value, reverse = false) => {}
const mgToCT = (value, reverse = false) => {}
const mgToG = (value, reverse = false) => {}
const mgToDAG = (value, reverse = false) => {}
const mgToOZ = (value, reverse = false) => {}
const mgToHG = (value, reverse = false) => {}
const mgToLB = (value, reverse = false) => {}
const mgToKG = (value, reverse = false) => {}
const mgToT = (value, reverse = false) => {}

// centigram conversion functions
const cgToDG = (value, reverse = false) => {}
const cgToCT = (value, reverse = false) => {}
const cgToG = (value, reverse = false) => {}
const cgToDAG = (value, reverse = false) => {}
const cgToOZ = (value, reverse = false) => {}
const cgToHG = (value, reverse = false) => {}
const cgToLB = (value, reverse = false) => {}
const cgToKG = (value, reverse = false) => {}
const cgToT = (value, reverse = false) => {}

// decigram conversion functions
const dgToCT = (value, reverse = false) => {}
const dgToG = (value, reverse = false) => {}
const dgToDAG = (value, reverse = false) => {}
const dgToOZ = (value, reverse = false) => {}
const dgToHG = (value, reverse = false) => {}
const dgToLB = (value, reverse = false) => {}
const dgToKG = (value, reverse = false) => {}
const dgToT = (value, reverse = false) => {}

// carat conversion functions
const ctToG = (value, reverse = false) => {}
const ctToDAG = (value, reverse = false) => {}
const ctToOZ = (value, reverse = false) => {}
const ctToHG = (value, reverse = false) => {}
const ctToLB = (value, reverse = false) => {}
const ctToKG = (value, reverse = false) => {}
const ctToT = (value, reverse = false) => {}

// gram conversion functions
const gToDAG = (value, reverse = false) => {}
const gToOZ = (value, reverse = false) => {}
const gToHG = (value, reverse = false) => {}
const gToLB = (value, reverse = false) => {}
const gToKG = (value, reverse = false) => {}
const gToT = (value, reverse = false) => {}

// decagram conversion functions
const dagToOZ = (value, reverse = false) => {}
const dagToHG = (value, reverse = false) => {}
const dagToLB = (value, reverse = false) => {}
const dagToKG = (value, reverse = false) => {}
const dagToT = (value, reverse = false) => {}

// ounce conversion functions
const ozToHG = (value, reverse = false) => {}
const ozToLB = (value, reverse = false) => {}
const ozToKG = (value, reverse = false) => {}
const ozToT = (value, reverse = false) => {}

// hectogram conversion functions
const hgToLB = (value, reverse = false) => {}
const hgToKG = (value, reverse = false) => {}
const hgToT = (value, reverse = false) => {}

// pound conversion functions
const lbToKG = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 2.2046226218487757)
}

const lbToT = (value, reverse = false) => {
	return kgToT(lbToKG(value, reverse), reverse)
}

// kilogram conversion functions
const kgToT = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 907.18474)
}

function Weight() {
	this.milligram = {
		symbol: "mg",
		toCentigram: mgToCG,
		toDecigram: mgToDG,
		toCarat: mgToCT,
		toGram: mgToG,
		toDecagram: mgToDAG,
		toOunce: mgToOZ,
		toHectogram: mgToHG,
		toPound: mgToLB,
		toKilogram: mgToKG,
		toTon: mgToT,
	}

	this.centigram = {
		symbol: "cg",
		toMilligram(value) { return mgToCG(value, true) },
		toDecigram: cgToDG,
		toCarat: cgToCT,
		toGram: cgToG,
		toDecagram: cgToDAG,
		toOunce: cgToOZ,
		toHectogram: cgToHG,
		toPound: cgToLB,
		toKilogram: cgToKG,
		toTon: cgToT,
	}

	this.decigram = {
		symbol: "dg",
		toMilligram(value) { return mgToDG(value, true) },
		toCentigram(value) { return cgToDG(value, true) },
		toCarat: dgToCT,
		toGram: dgToG,
		toDecagram: dgToDAG,
		toOunce: dgToOZ,
		toHectogram: dgToHG,
		toPound: dgToLB,
		toKilogram: dgToKG,
		toTon: dgToT,
	}

	this.carat = {
		symbol: "ct",
		toMilligram(value) { return mgToCT(value, true) },
		toCentigram(value) { return cgToCT(value, true) },
		toDecigram(value) { return dgToCT(value, true) },
		toGram: ctToG,
		toDecagram: ctToDAG,
		toOunce: ctToOZ,
		toHectogram: ctToHG,
		toPound: ctToLB,
		toKilogram: ctToKG,
		toTon: ctToT,
	}

	this.gram = {
		symbol: "g",
		toMilligram(value) { return mgToG(value, true) },
		toCentigram(value) { return cgToG(value, true) },
		toDecigram(value) { return dgToG(value, true) },
		toCarat(value) { return ctToG(value, true) },
		toDecagram: gToDAG,
		toOunce: gToOZ,
		toHectogram: gToHG,
		toPound: gToLB,
		toKilogram: gToKG,
		toTon: gToT,
	}

	this.decagram = {
		symbol: "dag",
		toMilligram(value) { return mgToDAG(value, true) },
		toCentigram(value) { return cgToDAG(value, true) },
		toDecigram(value) { return dgToDAG(value, true) },
		toCarat(value) { return ctToDAG(value, true) },
		toGram(value) { return gToDAG(value, true) },
		toOunce: dagToOZ,
		toHectogram: dagToHG,
		toPound: dagToLB,
		toKilogram: dagToKG,
		toTon: dagToT,
	}

	this.ounce = {
		symbol: "oz",
		toMilligram(value) { return mgToOZ(value, true) },
		toCentigram(value) { return cgToOZ(value, true) },
		toDecigram(value) { return dgToOZ(value, true) },
		toCarat(value) { return ctToOZ(value, true) },
		toGram(value) { return gToOZ(value, true) },
		toDecagram(value) { return dagToOZ(value, true) },
		toHectogram: ozToHG,
		toPound: ozToLB,
		toKilogram: ozToKG,
		toTon: ozToT,
	}

	this.hectogram = {
		symbol: "hg",
		toMilligram(value) { return mgToHG(value, true) },
		toCentigram(value) { return cgToHG(value, true) },
		toDecigram(value) { return dgToHG(value, true) },
		toCarat(value) { return ctToHG(value, true) },
		toGram(value) { return gToHG(value, true) },
		toDecagram(value) { return dagToHG(value, true) },
		toOunce(value) { return ozToHG(value, true) },
		toPound: hgToLB,
		toKilogram: hgToKG,
		toTon: hgToT,
	}

	this.pound = {
		symbol: "lb",
		toMilligram(value) { return mgToLB(value, true) },
		toCentigram(value) { return cgToLB(value, true) },
		toDecigram(value) { return dgToLB(value, true) },
		toCarat(value) { return ctToLB(value, true) },
		toGram(value) { return gToLB(value, true) },
		toDecagram(value) { return dagToLB(value, true) },
		toOunce(value) { return ozToLB(value, true) },
		toHectogram(value) { return hgToLB(value, true) },
		toKilogram: lbToKG,
		toTon: lbToT,
	}

	this.kilogram = {
		symbol: "kg",
		toMilligram(value) { return mgToKG(value, true) },
		toCentigram(value) { return cgToKG(value, true) },
		toDecigram(value) { return dgToKG(value, true) },
		toCarat(value) { return ctToKG(value, true) },
		toGram(value) { return gToKG(value, true) },
		toDecagram(value) { return dagToKG(value, true) },
		toOunce(value) { return ozToKG(value, true) },
		toHectogram(value) { return hgToKG(value, true) },
		toPound(value) { return lbToKG(value, true) },
		toTon: kgToT,
	}

	this.ton = {
		symbol: "t",
		toMilligram(value) { return mgToT(value, true) },
		toCentigram(value) { return cgToT(value, true) },
		toDecigram(value) { return dgToT(value, true) },
		toCarat(value) { return ctToT(value, true) },
		toGram(value) { return gToT(value, true) },
		toDecagram(value) { return dagToT(value, true) },
		toOunce(value) { return ozToT(value, true) },
		toHectogram(value) { return hgToT(value, true) },
		toPound(value) { return lbToT(value, true) },
		toKilogram(value) { return kgToT(value, true) },
	}


	this.defaults = ["milligram", "gram", "ton"]
}

// export default Weight
module.exports = Weight