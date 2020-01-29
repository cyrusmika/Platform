// set the canvas "resolution" to the screen
let canvas = document.getElementById("display")
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight

//create 2D context object for drawing on the canvas
let ctx = canvas.getContext("2d")

//draw a blue rectangle the size of the screen
ctx.fillStyle = "lightblue"
ctx.fillRect(0, 0, canvas.width , canvas.height)

//draw a smaller red rectangle "on top"
ctx.fillStyle = "red"
ctx.fillRect(
	-200, 
	200, 
	400, 
	100
)
