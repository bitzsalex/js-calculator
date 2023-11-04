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
	let result = reverse ? value * conversionRate : value / conversionRate
	// TODO: toFixed will also be changed
	// return parseFloat(result.toFixed(15))
	return parseFloat(result)
}

const capitalize = (phrase) => {
	return phrase.split(" ").reduce((caps, word) => {
		return caps + word.charAt(0).toUpperCase() + word.slice(1)
	}, "")
}

// export { truncateLastConsecutiveZeros, calculateValue, capitalize }
module.exports = { calculateValue, capitalize }
