
let hero = new Hero()
let shapes = []

ERASE()
hero.draw()

window.addEventListener("keydown", event => {
	if (event.code === 'KeyS'){
		let colorIndex = Math.random()
		let color = "red"
		if (colorIndex < 0.5) {
			color = "orange"
		}
		if (colorIndex < 0.4){
			color = "yellow"
		}
		CTX.fillStyle = color

		let x = Math.random() * CANVAS.width
		let y = Math.random() * CANVAS.height
		let height = Math.random() * 500
		let width = Math.random() * 500
		let s = new Shape(x, y, height, width)
		shapes.push(s)
	}
	if (event.code === "ArrowRight") {
		hero.moveRight()
	}

	ERASE()
	shapes.forEach(s => s.draw())
	hero.draw()

})

