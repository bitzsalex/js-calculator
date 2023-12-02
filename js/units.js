import Area from "./units/area.js"
import Data from "./units/data.js"
import Length from "./units/length.js"
import Speed from "./units/speed.js"
import Temperature from "./units/temperature.js"
import Time from "./units/time.js"
import Volume from "./units/volume.js"
import Weight from "./units/volume.js"
import * as helper from "./helper.js"

const MAX_SELECT_ITEM_NUMS = 8

const body = document.body
const selects = document.querySelectorAll(".select")
const selectOptions = document.querySelectorAll(".select__option")
const unitInputs = document.querySelectorAll(".unit__input")

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
	select.addEventListener("click", (event) => {
		let options = select.querySelector("ul.select__options")

		event.stopPropagation()
		if (!closeSelectFromOutside()) {
			select.classList.toggle("show")
			options.style.maxHeight = options.firstElementChild.scrollHeight * MAX_SELECT_ITEM_NUMS + "px"
		}
	})
})

selectOptions.forEach((option) => {
	option.addEventListener("click", selectOption)
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

