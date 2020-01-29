
window.addEventListener("keydown", event => {
	let colorIndex = Math.random()
	let color = "red"
	if (colorIndex < 0.5) {
		color = "orange"
	}
	if (colorIndex < 0.4){
		color = "yellow"
	}
	ctx.fillStyle = color

	let x = Math.random() * canvas.width
	let y = Math.random() * canvas.height
	new Shape(x, y, 123, 456).draw()
})