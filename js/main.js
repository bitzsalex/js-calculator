feather.replace()

const body = document.body
const themeToggler = document.querySelector("#theme-toggler")
const selects = document.querySelectorAll(".select")
const selectOptions = document.querySelectorAll(".select__option")
const growingField = document.querySelector("#growing-input")

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

growingField.addEventListener("input", () => {
	let parent = growingField.parentNode
	growingField.style.height = "auto"
	growingField.style.height = (
		growingField.scrollHeight <= parent.scrollHeight ?
			growingField.scrollHeight : parent.scrollHeight
	) + "px"
})

if (themeToggler) themeToggler.addEventListener("click", toggleTheme)

setTheme()
