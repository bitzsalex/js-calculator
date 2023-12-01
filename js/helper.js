const splitNumberAndDecimal = (number) => {
	let numArr = number.toString().split(".")
	return [Math.trunc(number), numArr.length > 1 ? numArr[1] : ""]
}

const getIndexOfConsecutive = (decimal, num) => {
	let i = 0
	num = num.toString()
	while (i < decimal.length - 2) {
		if (decimal[i] === num && decimal[i + 1] === num && decimal[i + 2] === num) return i
		i++
	}

	return -1
}

const round9s = (number) => {
	let [num, decimal] = splitNumberAndDecimal(number)
	let index = getIndexOfConsecutive(decimal, 9)

	if (index !== -1) {
		if (index === 0) return ++num
		decimal = decimal.substring(0, index).split("")
		decimal[decimal.length - 1] = parseInt(decimal[decimal.length - 1]) + 1
		return parseFloat(num + "." + decimal.join(""))
	}

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

// export { truncateLastConsecutiveZeros, calculateValue, capitalize }
module.exports = { calculateValue, capitalize, round9s }
