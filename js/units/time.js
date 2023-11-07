// import { calculateValue } from "../helper"
const helper = require("../helper")

// Nanosecond conversion functions
const nsToMCs = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 1000)
}

const nsToMs = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 1000000)
}

const nsToS = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 1000000000)
}

const nsToM = (value, reverse = false) => {}

const nsToHr = (value, reverse = false) => {}

const nsToD = (value, reverse = false) => {}

const nsToWk = (value, reverse = false) => {}

const nsToMn = (value, reverse = false) => {}

const nsToYr = (value, reverse = false) => {}

const nsToDc = (value, reverse = false) => {}

const nsToC = (value, reverse = false) => {}

// Microsecond conversion functions
const mcsToMs = nsToMCs

const mcsToS = nsToMs

const mcsToM = (value, reverse = false) => {}

const mcsToHr = (value, reverse = false) => {}

const mcsToD = (value, reverse = false) => {}

const mcsToWk = (value, reverse = false) => {}

const mcsToMn = (value, reverse = false) => {}

const mcsToYr = (value, reverse = false) => {}

const mcsToDc = (value, reverse = false) => {}

const mcsToC = (value, reverse = false) => {}

// Millisecond conversion functions
const msToS = nsToMCs

const msToM = (value, reverse = false) => {}

const msToHr = (value, reverse = false) => {}

const msToD = (value, reverse = false) => {}

const msToWk = (value, reverse = false) => {}

const msToMn = (value, reverse = false) => {}

const msToYr = (value, reverse = false) => {}

const msToDc = (value, reverse = false) => {}

const msToC = (value, reverse = false) => {}

// Second conversion function
const sToM = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 60)
}

const sToHr = (value, reverse = false) => {}

const sToD = (value, reverse = false) => {}

const sToWk = (value, reverse = false) => {}

const sToMn = (value, reverse = false) => {}

const sToYr = (value, reverse = false) => {}

const sToDc = (value, reverse = false) => {}

const sToC = (value, reverse = false) => {}

// Minute conversion function
const mToHr = sToM

const mToD = (value, reverse = false) => {}

const mToWk = (value, reverse = false) => {}

const mToMn = (value, reverse = false) => {}

const mToYr = (value, reverse = false) => {}

const mToDc = (value, reverse = false) => {}

const mToC = (value, reverse = false) => {}

// Hour conversion functions
const hrToD = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 24)
}

const hrToWk = (value, reverse = false) => {}

const hrToMn = (value, reverse = false) => {}

const hrToYr = (value, reverse = false) => {}

const hrToDc = (value, reverse = false) => {}

const hrToC = (value, reverse = false) => {}

// Day conversion functions
const dToWk = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 7)
}

const dToMn = (value, reverse = false) => {}

const dToYr = (value, reverse = false) => {}

const dToDc = (value, reverse = false) => {}

const dToC = (value, reverse = false) => {}

// Week conversion functions
const wkToMn = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 4.345238095238095238095238095)
}

const wkToYr = (value, reverse = false) => {}

const wkToDc = (value, reverse = false) => {}

const wkToC = (value, reverse = false) => {}

// Month conversion functions
const mnToYr = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 12)
}

const mnToDc = (value, reverse = false) => {}

const mnToC = (value, reverse = false) => {}

// Year conversion functions
const yrToDc = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 10)
}

const yrToC = (value, reverse = false) => {
	return dcToC(yrToDc(value, reverse), reverse)
}

// Decade conversion function
const dcToC = yrToDc

function Time() {
	this.century = {
		symbol: "C",
		toDecade(value) {
			return dcToC(value, true)
		},
		toYear(value) {
			return yrToC(value, true)
		},
		toMonth(value) {
			return mnToC(value, true)
		},
		toWeek(value) {
			return wkToC(value, true)
		},
		toDay(value) {
			return dToC(value, true)
		},
		toHour(value) {
			return hrToC(value, true)
		},
		toMinute(value) {
			return mToC(value, true)
		},
		toSecond(value) {
			return sToC(value, true)
		},
		toMillisecond(value) {
			return msToC(value, true)
		},
		toMicrosecond(value) {
			return mcsToC(value, true)
		},
		toNanosecond(value) {
			return nsToC(value, true)
		},
	}

	this.decade = {
		symbol: "Dc",
		toCentury: dcToC,
		toYear(value) {
			return yrToDc(value, true)
		},
		toMonth(value) {
			return mnToDc(value, true)
		},
		toWeek(value) {
			return wkToDc(value, true)
		},
		toDay(value) {
			return dToDc(value, true)
		},
		toHour(value) {
			return hrToDc(value, true)
		},
		toMinute(value) {
			return mToDc(value, true)
		},
		toSecond(value) {
			return sToDc(value, true)
		},
		toMillisecond(value) {
			return msToDc(value, true)
		},
		toMicrosecond(value) {
			return mcsToDc(value, true)
		},
		toNanosecond(value) {
			return nsToDc(value, true)
		},
	}

	this.year = {
		symbol: "Yr",
		toCentury: yrToC,
		toDecade: yrToDc,
		toMonth(value) {
			return mnToYr(value, true)
		},
		toWeek(value) {
			return wkToYr(value, true)
		},
		toDay(value) {
			return dToYr(value, true)
		},
		toHour(value) {
			return hrToYr(value, true)
		},
		toMinute(value) {
			return mToYr(value, true)
		},
		toSecond(value) {
			return sToYr(value, true)
		},
		toMillisecond(value) {
			return msToYr(value, true)
		},
		toMicrosecond(value) {
			return mcsToYr(value, true)
		},
		toNanosecond(value) {
			return nsToYr(value, true)
		},
	}

	this.month = {
		symbol: "Mn",
		toCentury: mnToC,
		toDecade: mnToDc,
		toYear: mnToYr,
		toWeek(value) {
			return wkToMn(value, true)
		},
		toDay(value) {
			return dToMn(value, true)
		},
		toHour(value) {
			return hrToMn(value, true)
		},
		toMinute(value) {
			return mToMn(value, true)
		},
		toSecond(value) {
			return sToMn(value, true)
		},
		toMillisecond(value) {
			return msToMn(value, true)
		},
		toMicrosecond(value) {
			return mcsToMn(value, true)
		},
		toNanosecond(value) {
			return nsToMn(value, true)
		},
	}

	this.week = {
		symbol: "Wk",
		toCentury: wkToC,
		toDecade: wkToDc,
		toYear: wkToYr,
		toMonth: wkToMn,
		toDay(value) {
			return dToWk(value, true)
		},
		toHour(value) {
			return hrToWk(value, true)
		},
		toMinute(value) {
			return mToWk(value, true)
		},
		toSecond(value) {
			return sToWk(value, true)
		},
		toMillisecond(value) {
			return msToWk(value, true)
		},
		toMicrosecond(value) {
			return mcsToWk(value, true)
		},
		toNanosecond(value) {
			return nsToWk(value, true)
		},
	}

	this.day = {
		symbol: "D",
		toCentury: dToC,
		toDecade: dToDc,
		toYear: dToYr,
		toMonth: dToMn,
		toWeek: dToWk,
		toHour(value) {
			return hrToD(value, true)
		},
		toMinute(value) {
			return mToD(value, true)
		},
		toSecond(value) {
			return sToD(value, true)
		},
		toMillisecond(value) {
			return msToD(value, true)
		},
		toMicrosecond(value) {
			return mcsToD(value, true)
		},
		toNanosecond(value) {
			return nsToD(value, true)
		},
	}

	this.hour = {
		symbol: "Hr",
		toCentury: hrToC,
		toDecade: hrToDc,
		toYear: hrToYr,
		toMonth: hrToMn,
		toWeek: hrToWk,
		toDay: hrToD,
		toMinute(value) {
			return mToHr(value, true)
		},
		toSecond(value) {
			return sToHr(value, true)
		},
		toMillisecond(value) {
			return msToHr(value, true)
		},
		toMicrosecond(value) {
			return mcsToHr(value, true)
		},
		toNanosecond(value) {
			return nsToHr(value, true)
		},
	}

	this.minute = {
		symbol: "M",
		toCentury: mToC,
		toDecade: mToDc,
		toYear: mToYr,
		toMonth: mToMn,
		toWeek: mToWk,
		toDay: mToD,
		toHour: mToHr,
		toSecond(value) {
			return sToM(value, true)
		},
		toMillisecond(value) {
			return msToM(value, true)
		},
		toMicrosecond(value) {
			return mcsToM(value, true)
		},
		toNanosecond(value) {
			return nsToM(value, true)
		},
	}

	this.second = {
		symbol: "S",
		toCentury: sToC,
		toDecade: sToDc,
		toYear: sToYr,
		toMonth: sToMn,
		toWeek: sToWk,
		toDay: sToD,
		toHour: sToHr,
		toMinute: sToM,
		toMillisecond(value) {
			return msToS(value, true)
		},
		toMicrosecond(value) {
			return mcsToS(value, true)
		},
		toNanosecond(value) {
			return nsToS(value, true)
		},
	}

	this.millisecond = {
		symbol: "Ms",
		toCentury: msToC,
		toDecade: msToDc,
		toYear: msToYr,
		toMonth: msToMn,
		toWeek: msToWk,
		toDay: msToD,
		toHour: msToHr,
		toMinute: msToM,
		toSecond: msToS,
		toMicrosecond(value) {
			return mcsToMs(value, true)
		},
		toNanosecond(value) {
			return nsToMs(value, true)
		},
	}

	this.microsecond = {
		symbol: "µs",
		toCentury: mcsToC,
		toDecade: mcsToDc,
		toYear: mcsToYr,
		toMonth: mcsToMn,
		toWeek: mcsToWk,
		toDay: mcsToD,
		toHour: mcsToHr,
		toMinute: mcsToM,
		toSecond: mcsToS,
		toMillisecond: mcsToMs,
		toNanosecond(value) {
			return nsToMCs(value, true)
		},
	}

	this.nanosecond = {
		symbol: "Ns",
		toCentury: nsToC,
		toDecade: nsToDc,
		toYear: nsToYr,
		toMonth: nsToMn,
		toWeek: nsToWk,
		toDay: nsToD,
		toHour: nsToHr,
		toMinute: nsToM,
		toSecond: nsToS,
		toMillisecond: nsToMs,
		toMicrosecond: nsToMCs,
	}
}

// export default Time
module.exports = Time
