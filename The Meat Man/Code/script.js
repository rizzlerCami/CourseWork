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
let floor
let floorImg
let set = false
let blinkDelay = [0, 0, 0]
let blink = ["", ""]
let move

function preload() {
  idle = loadImage('idle.png')
  skyImg = loadImage('sky_fc.png')
  fMountImg = loadImage('far_mountains_fc.png')
  cMountImg = loadImage('grassy_mountains_fc.png')
  fCloudImg = loadImage('clouds_mid_fc.png')
  mCloudImg = loadImage('clouds_mid_t_fc.png')
  cCloudImg = loadImage('clouds_front_t_fc.png')
  floorImg = loadImage('ground.png')
  blink[0] = loadImage('meatManBlinking-1.png')
  blink[1] = loadImage('meatManBlinking-2.png')
}

function setup() {
  new Canvas(1200, 792)
  world.gravity.y = 9.8

  meatMan = new Sprite([[358, 647], [317, 647], [297, 620], [297, 553], [383, 553], [383, 620], [358, 647]])
  meatMan.image = idle
  meatMan.image.offset.y = -30
  scaleF = 0.24

  floor = new Group()
  floor.w = 101
  floor.h = 105

}

function draw() {
  clear()

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
  floor.image.scale = 0.3
  floor.image.offset.y = -30
  floor.collider = "s"
  meatMan.image.scale = scaleF

}

function movement() {

}

function shooting() {

}

function blinking() {
  if (move === false) {
    if (blinkDelay[0] === 150) {
      if (blinkDelay[1] === 3) {
        if (blinkDelay[2] === 0 || blinkDelay[2] === 2) {
          meatMan.image = blink[0]
        } else if (blinkDelay[2] === 1) {
          meatMan.image = blink[1]
        } else if (blinkDelay[2] === 3) {
          meatMan.image = idle
        } else {
          blinkDelay[2] = 0
        }
        blinkDelay[0] = 0
        blinkDelay[1] = 0
      } else {
        blinkDelay[1]++
      }
    } else {
      blinkDelay[0]++
    }
  }
}

function menu() {
  move = false
  image(skyImg, 0, 0, 1408, 792)
  image(fMountImg, 0, 0, 1408, 792)
  image(cMountImg, 0, 0, 1408, 792)
  image(fCloudImg, 0, 0, 1408, 792)
  image(mCloudImg, 0, 0, 1408, 792)
  image(cCloudImg, 0, 0, 1408, 792)
  floor.image = floorImg
  if (set === false) {
    for (let i = 0; i<= 20; i++) {
      let ground = new floor.Sprite(0 + 101*i, 700)
    }
    set = true
  }

}

function one() {
  image(skyImg, 0, 0, 1408, 792)
  image(fMountImg, 0, 0, 1408, 792)
  image(cMountImg, 0, 0, 1408, 792)
  image(fCloudImg, 0, 0, 1408, 792)
  image(mCloudImg, 0, 0, 1408, 792)
  image(cCloudImg, 0, 0, 1408, 792)
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