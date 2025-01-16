let meatMan
let level = [true, false, false, false, false, false, false]
let idle
let scaleF
let skyImg

function preload() {
  idle = loadImage('idle.png')
  skyImg = loadImage('sky_fc.png')
}

function setup() {
  new Canvas(windowWidth, windowHeight)
  world.gravity.y = 9.8

  meatMan = new Sprite([[388, 747], [347, 747], [327, 720], [327, 653], [413, 653], [413, 720], [388, 747]])
  meatMan.image = idle
  scaleF = 0.24

}

function draw() {
  meatMan.image.scale = scaleF

  if (level[0] === true) {
    menu()
  } else {
    if (level[1]) {
      one()
    } else if (level[2]) {
      two()
    } else if (level[3]) {
      three()
    } else if (level[4]) {
      four()
    } else if (level[5]) {
      five()
    } else {
      six()
    }
    movement()
    shooting()
    blinking()
  }
  clear()
}

function movement() {

}

function shooting() {

}

function blinking() {

}

function menu() {
  image(skyImg, 0, 0)
}

function one() {

}

function two() {

}

function three() {

}

function four() {

}

function five() {

}

function six() {

}