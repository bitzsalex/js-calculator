feather.replace()

const SCIENTIFIC_CALC = "calculator--scientific"
const UNITS_CALC = "calculator--units"
const MAX_SELECT_ITEM_NUMS = 8

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
const historyContent = document.querySelector(".history__content")
const clearHistoryButton = document.querySelector("#clear_history")
const unitInputs = document.querySelectorAll(".unit__input")

let historyItems
let selectedUnitInputCurrentValue = ""

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
	let options = select.querySelector("ul.select__options")
	options.style.maxHeight = options.firstElementChild.scrollHeight * MAX_SELECT_ITEM_NUMS + "px"

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

const changeCalculatorType = (type = "") => {
	calculator.classList.add("zoom-fade-out")

	setTimeout(() => {
		removeCalculatorType()
		if (type) calculator.classList.add(type)
		localStorage.setItem("calculator_type", type)

		calculator.classList.remove("zoom-fade-out")
		calculator.classList.add("zoom-fade-in")
		setTimeout(() => {
			calculator.classList.remove("zoom-fade-in")
		}, 400)
	}, 400)
}

const setCalculatorType = () => {
	let type = localStorage.getItem("calculator_type") ?? ""
	calculator.classList.add("visually-hidden")
	if (type === UNITS_CALC) unitsCalculator.checked = true
	else if (type === SCIENTIFIC_CALC) scientificCalculator.checked = true
	else simpleCalculator.checked = true

	changeCalculatorType(type)
	setTimeout(() => {
		calculator.classList.remove("visually-hidden")
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

const changeGrowFieldHeight = () => {
	let parent = growingField.parentNode
	growingField.style.height = "auto"
	growingField.style.height = (growingField.scrollHeight <= parent.scrollHeight ? growingField.scrollHeight : parent.scrollHeight) + "px"
}

growingField.addEventListener("input", changeGrowFieldHeight)

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

localStorage

// this insure history closing event won't be fired
// when clicked inside history__content element
historyContent.addEventListener("click", (event) => {
	event.stopPropagation()
})
// this will close the history page
history.addEventListener("click", () => {
	history.classList.remove("calculator__history--show")
})

historyItems.forEach((historyItem) => {
	historyItem.addEventListener("click", () => {
		let expression = historyItem.querySelector("span.history__expression")
		let result = historyItem.querySelector("span.history__result")
		// [ ] parse the expression and store it on the current equation
		inputTextField.value = expression.innerText
		resultTextField.value = result.innerText
		changeGrowFieldHeight()
	})
})

clearHistoryButton.addEventListener("click", () => {
	let list = historyContent.querySelector("ul.history__list")
	let listItem = document.createElement("li")

	listItem.innerText = "No History"
	listItem.classList.add("history__item", "history__item--no-history")

	list.innerHTML = ""
	localStorage.removeItem("history")

	list.appendChild(listItem)
	showHistoryButton.classList.add("btn__disabled")
	showHistoryButton.setAttribute("disabled", true)
})

// changing page for scientific calculator
pageButtons.forEach((button) => {
	button.addEventListener("click", () => {
		scientificKeypad.classList.toggle("keypad__scientific--second")
	})
})

const readOnlyFloat = (value) => {
	if (isNaN(value)) {
		value = value.replace(/[^\d.]/g, "")
		if (value.split(".").length > 2) value = value.replace(/\.+$/g, "")
	}

	return value
}

unitInputs.forEach((unitInput) => {
	unitInput.addEventListener("input", (event) => {
		event.stopPropagation()
		unitInput.value = readOnlyFloat(unitInput.value)
		// call the operation
	})
})

if (themeToggler) themeToggler.addEventListener("click", toggleTheme)

setTheme()
setCalculatorType()