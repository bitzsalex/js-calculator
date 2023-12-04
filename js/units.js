import Area from "./units/area.js"
import Data from "./units/data.js"
import Length from "./units/length.js"
import Weight from "./units/weight.js"
import Speed from "./units/speed.js"
import Temperature from "./units/temperature.js"
import Time from "./units/time.js"
import Volume from "./units/volume.js"
import * as helper from "./helper.js"

const MAX_SELECT_ITEM_NUMS = 9

const units = {
	list: {
		Area: Area,
		Data: Data,
		Length: Length,
		"Mass/Weight": Weight,
		Speed: Speed,
		Temperature: Temperature,
		Time: Time,
		Volume: Volume,
	},
	default: "Mass/Weight",
}

const body = document.body
const selects = document.querySelectorAll(".select")
const unitSelect = document.querySelector(".select.select--unit")
const unitInputs = document.querySelectorAll(".unit__input")

// always focus on the first one when converting
// calculator type to units
let focusedUnitInputIndex = 0
let selectedUnit = null

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
		let options = select.querySelector("ul.select__options")
		let selected = options.querySelector("li.selected")

		event.stopPropagation()
		if (!closeSelectFromOutside()) {
			select.classList.toggle("show")
			options.style.maxHeight = options.firstElementChild.scrollHeight * MAX_SELECT_ITEM_NUMS + "px"
			setTimeout(() => {
				selected.scrollIntoView()
			}, 50)
		}
	})
})

unitInputs.forEach((unitInput, index) => {
	unitInput.addEventListener("input", (event) => {
		event.stopPropagation()
		event.target.value = helper.readOnlyFloat(unitInput.value)
		// call the operation
	})

	unitInput.addEventListener("focus", (event) => {
		event.stopPropagation()
		focusedUnitInputIndex = index
	})
})

// this event is to hide the visible select option
body.addEventListener("click", closeSelectFromOutside)

const createSelectOptions = (parent, list, defaultOption, eventCallback) => {
	let selected = null
	parent.innerHTML = ""
	let children = []

	for (let item of list) {
		let li = document.createElement("li")
		li.classList.add("select__option")
		li.innerText = item
		li.addEventListener("click", selectOption)
		li.addEventListener("click", eventCallback)

		if (item === defaultOption) {
			li.classList.add("selected")
			selected = li
		}
		parent.append(li)
		children.push(li)
	}

	if (selected) {
		selected.click()
		closeSelectFromOutside()
	}

	return children
}

const getLabelsMaxWidth = (unitLabels) => {
	let maxWidth = 0

	unitLabels.forEach((label) => {
		maxWidth = label.scrollWidth > maxWidth ? label.scrollWidth : maxWidth
	})

	return maxWidth
}

const adjustUnitLabelsWidth = () => {
	const unitLabels = document.querySelectorAll(".calculator--units label.screen__label")

	if (unitLabels) {
		let maxWidth = getLabelsMaxWidth(unitLabels)
		unitLabels.forEach((label) => {
			label.style.width = maxWidth + "px"
		})
	}
}

const changeUnit = (event) => {
	let target = event.target
	let ancestor = target.closest("div.screen__group__item")
	let label = ancestor.querySelector("label.screen__label")
	let selected = selectedUnit[target.innerText.toLowerCase()]

	label.innerHTML = ""
	label.append(selected["symbol"])

	if (Object.hasOwn(selected, "supPost")) {
		let sup = document.createElement("sup")
		sup.innerText = selected["supPost"]
		label.append(sup)
	}

	adjustUnitLabelsWidth()
	focusOnSelectedUnitInput()
}

const changeToSelectedUnit = (event) => {
	event.stopPropagation()
	let selected = event.target.innerText
	selectedUnit = new units.list[selected]()

	if (selected === units.default && localStorage.getItem("lastUnitChoice")) localStorage.removeItem("lastUnitChoice")
	else localStorage.setItem("lastUnitChoice", selected)

	populateSelectedUnitOptions()
}

const populateUnitOptions = () => {
	let userUnitChoice = localStorage.getItem("lastUnitChoice")
	userUnitChoice = userUnitChoice ?? units.default
	selectedUnit = new units.list[userUnitChoice]()

	let unitSelectOptions = unitSelect.querySelector("ul.select__options")
	createSelectOptions(unitSelectOptions, Object.keys(units.list), userUnitChoice, changeToSelectedUnit)
}

const populateSelectedUnitOptions = () => {
	let unitSelects = document.querySelectorAll("div.screen__unit .select")
	let defaults = selectedUnit.defaults
	let keys = Object.keys(selectedUnit).filter((item) => item !== "defaults")

	unitSelects.forEach((innerSelect, index) => {
		let selectOptions = innerSelect.querySelector("ul.select__options")
		createSelectOptions(selectOptions, keys, defaults[index], changeUnit)
	})
}

const focusOnSelectedUnitInput = () => {
	unitInputs[focusedUnitInputIndex].focus()
}

// populating the unit select options
populateUnitOptions()
focusOnSelectedUnitInput()

export { adjustUnitLabelsWidth, focusOnSelectedUnitInput }
