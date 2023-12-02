const readOnlyFloat = (value) => {
	if (isNaN(value)) {
		value = value.replace(/[^\d.]/g, "")
		if (value.split(".").length > 2) value = value.replace(/\.+$/g, "")
	}

	return value
}

const splitNumberAndDecimal = (number) => {
	let numArr = number.toString().split(".")
	return [Number(numArr[0]), numArr.length > 1 ? numArr[1] : ""]
}

const getInfoOfConsecutive = (decimal, num, size = 3, initIndex = 0) => {
	let i = initIndex - 1
	num = num.toString()

	while (i < decimal.length - 2) {
		let count = 0
		while (decimal[i++] === num) count++
		if (count >= size) return [--i - count, count]
	}

	return [-1, 0]
}

const round9s = (number) => {
	let [num, decimal] = splitNumberAndDecimal(number)
	let [index, ] = getInfoOfConsecutive(decimal, 9)

	if (index !== -1) {
		if (index === 0) return ++num
		decimal = decimal.substring(0, index).split("")
		decimal[decimal.length - 1] = parseInt(decimal[decimal.length - 1]) + 1
		return parseFloat(num + "." + decimal.join(""))
	}

	return number
}

const applyExponential = (number) => {
	let [num, decimal] = splitNumberAndDecimal(number)
	let [index, zeroCount] = getInfoOfConsecutive(decimal, 0, 5)

	// if the index is 0, there are 5 consecutive zeros,
	// and the number is zero; turn it into exponential
	if (!index && zeroCount && !num) return number.toExponential()
	// and if size of the digit is greater than 15
	// turn it into exponential as well
	else if (num && num.toString().length > 15) return num.toExponential(2)

	return String(number)
}

const truncateLastZeros = (number) => {
	let [num, decimal] = splitNumberAndDecimal(number)
	// if the number is expressed as exponential
	let indexOfE = decimal.indexOf("e")
	let eResult = indexOfE !== -1 ? decimal.substring(indexOfE) : ""
	decimal = eResult ? decimal.substring(0, indexOfE) : decimal
	let [idx, count] = getInfoOfConsecutive(decimal, 0)

	// if both the idx and the number are zero;
	// adjust the idx (i.e., find the last consecutive)
	// if the number isn't zero, return the number itself
	if (idx === 0) {
		if (num !== 0) {
			return num
		}
		[idx, count] = getInfoOfConsecutive(decimal, 0, 2, idx + count + 1)
	}

	return idx !== -1 ? parseFloat(num + "." + decimal.substring(0, idx) + eResult) : number
}

const calculateValue = (value, reverse, conversionRate) => {
	return reverse ? value * conversionRate : value / conversionRate
}

const capitalize = (phrase) => {
	return phrase.split(" ").reduce((caps, word) => {
		return caps + word.charAt(0).toUpperCase() + word.slice(1)
	}, "")
}

export { applyExponential, calculateValue, capitalize, round9s, readOnlyFloat, truncateLastZeros }