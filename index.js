let inputWidth = document.querySelector(".input_width")
let inputHeight = document.querySelector(".input_height")
let inputColor = document.querySelector(".input_color")
let btnCreate = document.querySelector(".btn_create")
let btnClear = document.querySelector(".btn_clear")
let btnUp = document.querySelector(".btn_up")
let btnDown = document.querySelector(".btn_down")
let btnLeft = document.querySelector(".btn_left")
let btnRight = document.querySelector(".btn_right")






btnCreate.addEventListener("click", () => createDiv())
btnClear.addEventListener("click", () => clearDiv())
btnUp.addEventListener("click", () => UpDiv())
btnDown.addEventListener("click", () => DownDiv())
btnLeft.addEventListener("click", () => LeftDiv())
btnRight.addEventListener("click", () => RightDiv())

let isDiv = false


function createDiv() {
	if (!isDiv) {
		iwValue = inputWidth.value
		ihValue = inputHeight.value
		icValue = inputColor.value

		newDiv = document.createElement("div")
		newDiv.style.width = iwValue + "px"
		newDiv.style.height = ihValue + "px"
		newDiv.style.backgroundColor = icValue

		document.querySelector(".field_create").prepend(newDiv)
		isDiv = true
	}
}

function clearDiv() {
	document.querySelector(".field_create").firstChild.remove()
	isDiv = false
}

let mTop = 0
let mLeft = 0


function UpDiv() {
	if (mTop - 10 >= 0) {
		mTop -= 10
		newDiv.style.marginTop = mTop + "px"
	}
}
function DownDiv() {
	if (mTop + 10 <= 500-ihValue)  {
		mTop += 10
		newDiv.style.marginTop = mTop + "px"
		
	}
}
function LeftDiv() {
	if (mLeft - 10 >= 0) {
		mLeft -= 10
		newDiv.style.marginLeft = mLeft + "px"
	}
}
function RightDiv() {
	if (mLeft + 10 <= 500-iwValue)  {
		mLeft += 10
		newDiv.style.marginLeft = mLeft + "px"
		
	}
}