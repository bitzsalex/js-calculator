feather.replace()

const SCIENTIFIC_CALC = "calculator--scientific"
const UNITS_CALC = "calculator--units"

const body = document.body
const themeToggler = document.querySelector("#theme-toggler")
const selects = document.querySelectorAll(".select")
const selectOptions = document.querySelectorAll(".select__option")
const growingField = document.querySelector("#growing-input")
const calculator = document.querySelector("#calculator")
const simpleCalculator = document.querySelector("#simple")
const scientificCalculator = document.querySelector("#scientific")
const unitsCalculator = document.querySelector("#units")
const pageButtons = document.querySelectorAll(".btn__page")
const scientificKeypad = document.querySelector("#scientific_keypad")
const history = document.querySelector("#history")
const showHistoryButton = document.querySelector("#show-history")
const inputTextField = document.querySelector(".screen__input--input")
const resultTextField = document.querySelector(".screen__input--result")

let historyItems

const removeSelectedOption = (parent) => {
	for (let option of parent.children) option.classList.remove("selected")
}

const selectOption = (event) => {
	let option = event.target
	let select = option.closest("div.select")
	removeSelectedOption(option.parentNode)
	option.classList.add("selected")

	// update the input
	select.querySelector("input.select__input").value = option.textContent
	// update the placeholder
	select.querySelector("span.select__placeholder").innerText = option.textContent
}

const closeSelectFromOutside = () => {
	let isThereClosedOption = false
	selects.forEach((select) => {
		if (select.classList.contains("show")) {
			select.classList.remove("show")
			isThereClosedOption = true
		}
	})

	return isThereClosedOption
}

selects.forEach((select) => {
	select.addEventListener("click", (event) => {
		event.stopPropagation()
		if (!closeSelectFromOutside()) select.classList.toggle("show")
	})
})

selectOptions.forEach((option) => {
	option.addEventListener("click", selectOption)
})

// this event is to hide the visible select option
body.addEventListener("click", closeSelectFromOutside)

const changeTheme = (theme) => {
	if (theme === "dark") body.classList.add("dark-theme")
	else body.classList.remove("dark-theme")
}

const toggleTheme = () => {
	if (body.classList.contains("dark-theme")) {
		changeTheme("light")
		localStorage.setItem("theme", "light")
	} else {
		changeTheme("dark")
		localStorage.setItem("theme", "dark")
	}
}

const setTheme = () => {
	let usersTheme = localStorage.getItem("theme")

	if (!usersTheme) changeTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
	else changeTheme(usersTheme)
}

const removeCalculatorType = () => {
	if (calculator.classList.contains(SCIENTIFIC_CALC)) calculator.classList.remove(SCIENTIFIC_CALC)
	else if (calculator.classList.contains(UNITS_CALC)) calculator.classList.remove(UNITS_CALC)
}

const changeCalculatorType = (type) => {
	calculator.classList.add("zoom-fade-out")

	setTimeout(() => {
		removeCalculatorType()
		if (type) calculator.classList.add(type)

		calculator.classList.remove("zoom-fade-out")
		calculator.classList.add("zoom-fade-in")
		setTimeout(() => {
			calculator.classList.remove("zoom-fade-in")
		}, 400)
	}, 400)
}

// changing calculator types
simpleCalculator.addEventListener("input", () => {
	changeCalculatorType()
})
scientificCalculator.addEventListener("input", () => {
	changeCalculatorType(SCIENTIFIC_CALC)
})
unitsCalculator.addEventListener("input", () => {
	changeCalculatorType(UNITS_CALC)
})

growingField.addEventListener("input", () => {
	let parent = growingField.parentNode
	growingField.style.height = "auto"
	growingField.style.height = (growingField.scrollHeight <= parent.scrollHeight ? growingField.scrollHeight : parent.scrollHeight) + "px"
})

showHistoryButton.addEventListener("click", () => {
	if (!showHistoryButton.hasAttribute("disabled") && !showHistoryButton.classList.contains("btn__disabled")) {
		history.classList.add("calculator__history--show", "zoom-fade-in")
		setTimeout(() => {
			history.classList.remove("zoom-fade-in")
		}, 400)
	}
})

const getHistoryItems = () => {
	historyItems = document.querySelectorAll("ul.history__list li.history__item")
}

getHistoryItems()

history.addEventListener("click", (event) => {
	let historyList = history.querySelector("ul.history__list")
	if (event.target !== historyList) history.classList.remove("calculator__history--show")
})

historyItems.forEach((historyItem) => {
	historyItem.addEventListener("click", (event) => {
		event.stopPropagation()
		let expression = historyItem.querySelector("span.history__expression")
		let result = historyItem.querySelector("span.history__result")
		// [ ] parse the expression and store it on the current equation
		inputTextField.value = expression.innerText
		resultTextField.value = result.innerText
	})
})

// changing page for scientific calculator
pageButtons.forEach((button) => {
	button.addEventListener("click", () => {
		scientificKeypad.classList.toggle("keypad__scientific--second")
	})
})

if (themeToggler) themeToggler.addEventListener("click", toggleTheme)

setTheme()
