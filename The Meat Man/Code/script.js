let meatMan
let level = [true, false, false, false, false, false, false]
let idle
let scaleF

function preload() {
  idle = loadImage('idle.png')
}

function setup() {
  new Canvas(windowWidth, windowHeight)
  world.gravity.y = 9.8

  let meatMan = new Sprite([[388, 747], [347, 747], [327, 720], [327, 653], [413, 653], [413, 720], [388, 747]])
  meatMan.image = idle
  scaleF = 0.24
}

function draw() {
  clear()
  
  meatMan.image.scale = scaleF
}