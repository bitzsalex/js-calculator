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

const nsToM = (value, reverse = false) => {
	return sToM(nsToS(value, reverse), reverse)
}

const nsToHr = (value, reverse = false) => {
	return mToHr(nsToM(value, reverse), reverse)
}

const nsToD = (value, reverse = false) => {
	return hrToD(nsToHr(value, reverse), reverse)
}

const nsToWk = (value, reverse = false) => {
	return dToWk(nsToD(value, reverse), reverse)
}

const nsToMn = (value, reverse = false) => {
	return wkToMn(nsToWk(value, reverse), reverse)
}

const nsToYr = (value, reverse = false) => {
	return mnToYr(nsToMn(value, reverse), reverse)
}

const nsToDc = (value, reverse = false) => {
	return yrToDc(nsToYr(value, reverse), reverse)
}

const nsToC = (value, reverse = false) => {
	return dcToC(nsToDc(value, reverse), reverse)
}

// Microsecond conversion functions
const mcsToMs = nsToMCs

const mcsToS = nsToMs

const mcsToM = (value, reverse = false) => {
	return sToM(mcsToS(value, reverse), reverse)
}

const mcsToHr = (value, reverse = false) => {
	return mToHr(mcsToM(value, reverse), reverse)
}

const mcsToD = (value, reverse = false) => {
	return hrToD(mcsToHr(value, reverse), reverse)
}

const mcsToWk = (value, reverse = false) => {
	return dToWk(mcsToD(value, reverse), reverse)
}

const mcsToMn = (value, reverse = false) => {
	return wkToMn(mcsToWk(value, reverse), reverse)
}

const mcsToYr = (value, reverse = false) => {
	return mnToYr(mcsToMn(value, reverse), reverse)
}

const mcsToDc = (value, reverse = false) => {
	return yrToDc(mcsToYr(value, reverse), reverse)
}

const mcsToC = (value, reverse = false) => {
	return dcToC(mcsToDc(value, reverse), reverse)
}

// Millisecond conversion functions
const msToS = nsToMCs

const msToM = (value, reverse = false) => {
	return sToM(msToS(value, reverse), reverse)
}

const msToHr = (value, reverse = false) => {
	return mToHr(msToM(value, reverse), reverse)
}

const msToD = (value, reverse = false) => {
	return hrToD(msToHr(value, reverse), reverse)
}

const msToWk = (value, reverse = false) => {
	return dToWk(msToD(value, reverse), reverse)
}

const msToMn = (value, reverse = false) => {
	return wkToMn(msToWk(value, reverse), reverse)
}

const msToYr = (value, reverse = false) => {
	return mnToYr(msToMn(value, reverse), reverse)
}

const msToDc = (value, reverse = false) => {
	return yrToDc(msToYr(value, reverse), reverse)
}

const msToC = (value, reverse = false) => {
	return dcToC(msToDc(value, reverse), reverse)
}

// Second conversion function
const sToM = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 60)
}

const sToHr = (value, reverse = false) => {
	return mToHr(sToM(value, reverse), reverse)
}

const sToD = (value, reverse = false) => {
	return hrToD(sToHr(value, reverse), reverse)
}

const sToWk = (value, reverse = false) => {
	return dToWk(sToD(value, reverse), reverse)
}

const sToMn = (value, reverse = false) => {
	return wkToMn(sToWk(value, reverse), reverse)
}

const sToYr = (value, reverse = false) => {
	return mnToYr(sToMn(value, reverse), reverse)
}

const sToDc = (value, reverse = false) => {
	return yrToDc(sToYr(value, reverse), reverse)
}

const sToC = (value, reverse = false) => {
	return dcToC(sToDc(value, reverse), reverse)
}

// Minute conversion function
const mToHr = sToM

const mToD = (value, reverse = false) => {
	return hrToD(mToHr(value, reverse), reverse)
}

const mToWk = (value, reverse = false) => {
	return dToWk(mToD(value, reverse), reverse)
}

const mToMn = (value, reverse = false) => {
	return wkToMn(mToWk(value, reverse), reverse)
}

const mToYr = (value, reverse = false) => {
	return mnToYr(mToMn(value, reverse), reverse)
}

const mToDc = (value, reverse = false) => {
	return yrToDc(mToYr(value, reverse), reverse)
}

const mToC = (value, reverse = false) => {
	return dcToC(mToDc(value, reverse), reverse)
}

// Hour conversion functions
const hrToD = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 24)
}

const hrToWk = (value, reverse = false) => {
	return dToWk(hrToD(value, reverse), reverse)
}

const hrToMn = (value, reverse = false) => {
	return wkToMn(hrToWk(value, reverse), reverse)
}

const hrToYr = (value, reverse = false) => {
	return mnToYr(hrToMn(value, reverse), reverse)
}

const hrToDc = (value, reverse = false) => {
	return yrToDc(hrToYr(value, reverse), reverse)
}

const hrToC = (value, reverse = false) => {
	return dcToC(hrToDc(value, reverse), reverse)
}

// Day conversion functions
const dToWk = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 7)
}

const dToMn = (value, reverse = false) => {
	return wkToMn(dToWk(value, reverse), reverse)
}

const dToYr = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 365)
}

const dToDc = (value, reverse = false) => {
	return yrToDc(dToYr(value, reverse), reverse)
}

const dToC = (value, reverse = false) => {
	return dcToC(dToDc(value, reverse), reverse)
}

// Week conversion functions
const wkToMn = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 4.345238095238095238095238095)
}

const wkToYr = (value, reverse = false) => {
	return mnToYr(wkToMn(value, reverse), reverse)
}

const wkToDc = (value, reverse = false) => {
	return yrToDc(wkToYr(value, reverse), reverse)
}

const wkToC = (value, reverse = false) => {
	return dcToC(wkToDc(value, reverse), reverse)
}

// Month conversion functions
const mnToYr = (value, reverse = false) => {
	return helper.calculateValue(value, reverse, 12)
}

const mnToDc = (value, reverse = false) => {
	return yrToDc(mnToYr(value, reverse), reverse)
}

const mnToC = (value, reverse = false) => {
	return dcToC(mnToDc(value, reverse), reverse)
}

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
