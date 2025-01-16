let meatMan
let level = [true, false, false, false, false, false, false]
let idle
let scaleF
let skyImg
let fMountImg
let cMountImg
let fCloudImg
let mCloudImg
let cCloudImg

function preload() {
  idle = loadImage('idle.png')
  skyImg = loadImage('sky_fc.png')
  fMountImg = loadImage('far_mountains_fc.png')
  cMountImg = loadImage('grassy_mountains_fc.png')
  fCloudImg = loadImage('clouds_mid_fc.png')
  mCloudImg = loadImage('clouds_mid_t_fc.png')
  cCloudImg = loadImage('clouds_front_t_fc.png')
}

function setup() {
  new Canvas(windowWidth, windowHeight)
  world.gravity.y = 9.8

  meatMan = new Sprite([[388, 747], [347, 747], [327, 720], [327, 653], [413, 653], [413, 720], [388, 747]])
  meatMan.image = idle
  scaleF = 0.24

}

function draw() {
  clear()
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
}

function movement() {

}

function shooting() {

}

function blinking() {

}

function menu() {
  image(skyImg, 0, 0, 1408, 792)
  image(fMountImg, 0, 0, 1408, 792)
  image(cMountImg, 0, 0, 1408, 792)
  image(fCloudImg, 0, 0, 1408, 792)
  image(mCloudImg, 0, 0, 1408, 792)
  image(cCloudImg, 0, 0, 1408, 792)
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