const splitNumberAndDecimal = (number) => {
	let numArr = number.toString().split(".")
	return [Math.trunc(number), numArr.length > 1 ? numArr[1] : ""]
}

const getInfoOfConsecutive = (decimal, num, size = 3) => {
	let i = -1
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
	let [index, _] = getInfoOfConsecutive(decimal, 9)

	if (index !== -1) {
		if (index === 0) return ++num
		decimal = decimal.substring(0, index).split("")
		decimal[decimal.length - 1] = parseInt(decimal[decimal.length - 1]) + 1
		return parseFloat(num + "." + decimal.join(""))
	}

	return number
}

const applyExponential = number => {
	let [num, decimal] = splitNumberAndDecimal(number)
	let [index, zeroCount] = getInfoOfConsecutive(decimal, 0, 5)

	// if the index is 0, there are 5 consecutive zeros,
	// and the number is zero; turn it into exponential
	if (!index && zeroCount && !num)
		return number.toExponential()
	// and if size of the digit is greater than 15
	// turn it into exponential as well
	else if (num && num.toString().length > 15)
		return num.toExponential(2)

	return number
}

// TODO: This has to be moved to the final step, at the time to display result
const truncateLastConsecutiveZeros = (strNum) => {
	let dot = strNum.indexOf(".")

	if (dot !== -1)
		// loop through each decimal point in reverse order
		for (let itr = strNum.length - 2; itr > dot + 2; itr--) {
			let count = 0
			while (strNum[itr] == 0) {
				count++
				itr--
			}
			if (count >= 2) return strNum.slice(0, itr + 1)
		}

	return strNum
}

const calculateValue = (value, reverse, conversionRate) => {
	return reverse ? value * conversionRate : value / conversionRate
}

const capitalize = (phrase) => {
	return phrase.split(" ").reduce((caps, word) => {
		return caps + word.charAt(0).toUpperCase() + word.slice(1)
	}, "")
}

// export default { truncateLastConsecutiveZeros, calculateValue, capitalize }
module.exports = { calculateValue, capitalize, round9s, applyExponential }
