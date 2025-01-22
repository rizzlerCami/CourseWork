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
let uGround
let uGroundImg
let set = false
let blinkDelay = [0, 0, 0]
let blink = ["", ""]
let titleImg
let treeImg

function preload() {
  idle = loadImage('idle.png')
  skyImg = loadImage('sky_fc.png')
  fMountImg = loadImage('far_mountains_fc.png')
  cMountImg = loadImage('grassy_mountains_fc.png')
  fCloudImg = loadImage('clouds_mid_fc.png')
  mCloudImg = loadImage('clouds_mid_t_fc.png')
  cCloudImg = loadImage('clouds_front_t_fc.png')
  floorImg = loadImage('ground.png')
  uGroundImg = loadImage('underGround.png')
  blink[0] = loadImage('meatManBlinking-1.png')
  blink[1] = loadImage('meatManBlinking-2.png')
  titleImg = loadImage('title.png')
  treeImg = loadImage('tree.png')
}

function setup() {
  new Canvas(1200, 1000)
  world.gravity.y = 9.8

  meatMan = new Sprite([[158, 647], [117, 647], [97, 620], [97, 553], [183, 553], [183, 620], [158, 647]])
  meatMan.image = idle
  meatMan.rotationLock = true
  scaleF = 0.24

  floor = new Group()
  floor.w = 101
  floor.h = 105
  uGround = new Group()
  uGround.w = 101
  uGround.h = 105


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
  uGround.image.scale = 0.3
  uGround.image.offset.y = -30
  uGround.collider = "s"
  meatMan.image.scale = scaleF
  meatMan.image.offset.y = -30
}

function movement() {

}

function shooting() {

}

function blinking() {
  if (blinkDelay[0] === 150) {
    if (blinkDelay[1] === 4) {
      if (blinkDelay[2] === 0 || blinkDelay[2] === 2) {
        meatMan.image = blink[0]
      } else if (blinkDelay[2] === 1) {
        meatMan.image = blink[1]
      } else if (blinkDelay[2] === 3) {
        meatMan.image = idle
      } else {
        blinkDelay[2] = -1
        blinkDelay[0] = 0
      }
      blinkDelay[2]++
      blinkDelay[1] = 0
    } else {
      blinkDelay[1]++
    }
  } else {
    blinkDelay[0]++
  }
}

function menu() {
  background('#d1e8eb')
  image(skyImg, 0, 0, 1408, 792)
  image(fMountImg, 0, 0, 1408, 792)
  image(cMountImg, 0, 0, 1408, 792)
  image(fCloudImg, 0, 0, 1408, 792)
  image(mCloudImg, 0, 0, 1408, 792)
  image(cCloudImg, 0, 0, 1408, 792)
  for (let i = 0; i <= 3; i++) {
    image(treeImg, 200 + i*400, 381, 270, 270)
  }
  image(titleImg, 340, -80, 500, 500)
  floor.image = floorImg
  uGround.image = uGroundImg
  if (set === false) {
    for (let i = 0; i<= 20; i++) {
      let ground = new floor.Sprite(101*i, 700)
      for (let l = 0; l <= 2; l++) {
        let uFloor = new uGround.Sprite(101*i, 805 + 105*l)
      }
    }
    set = true
  }
  blinking()
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