

const canvas = document.querySelector("canvas")

const ctx = canvas.getContext('2d') 
canvas.width = 448
canvas.height = 400

function drawBall() {

}
function drawPaddle(){

}
function drawBricks() {

}

function collisionDectection() {

}

function ballMovement() {

}
function paddleMovement() {

}
function draw() {
drawBall()
drawPaddle()
drawBricks()
collisionDectection()
ballMovement()
paddleMovement()
window.requestAnimationFrame(draw)
}
draw()