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

let selectedUnitInputCurrentValue = ""
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

		event.stopPropagation()
		if (!closeSelectFromOutside()) {
			select.classList.toggle("show")
			options.style.maxHeight = options.firstElementChild.scrollHeight * MAX_SELECT_ITEM_NUMS + "px"
		}
	})
})

unitInputs.forEach((unitInput) => {
	unitInput.addEventListener("input", (event) => {
		event.stopPropagation()
		unitInput.value = helper.readOnlyFloat(unitInput.value)
		// call the operation
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

const changeUnit = () => {
	console.log("changing the unit")
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

// populating the unit select options
populateUnitOptions()
