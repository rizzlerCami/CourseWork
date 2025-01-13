let meatMan, sky, cloudB, cloudM, cloudF, FMount, GMount, grass, ground, underImg, floor, blinkAni
let v, blink
function preload() {
  sky = loadImage('sky_fc.png')
  cloudB = loadImage('clouds_mid_t_fc.png')
  cloudM = loadImage('clouds_mid_fc.png')
  cloudF = loadImage('clouds_front_t_fc.png')
  FMount = loadImage('far_mountains_fc.png')
  GMount = loadImage('grassy_mountains_fc.png')
  faceR = loadImage('theMeatManRight.png')
  ground = loadImage('Ground-1.png')
  underImg = loadImage('underGround.png')
  blinkAni = loadAni('theMeatManBlinkingRight-1.png', 'theMeatManBlinkingRight-2.png')
}

function setup() {
  new Canvas(windowWidth, windowHeight, "pixelated")

  blink = false
  meatMan = new Sprite([[188, 677], [147, 677], [127, 650], [127, 583], [213, 583], [213, 650], [188, 677]])
  meatMan.image = faceR
  meatMan.rotationLock = true
  meatMan.mass = 30
  meatMan.bounciness = 0
  meatMan.friction = 500
  v = 0.24

  floor = new Group()
  floor.image = ground
  floor.bounciness = 0
  floor.image.scale = 0.4
  floor.image.offset.y = -32

  underGround = new Group()
  underGround.image = underImg
  underGround.image.scale = 0.4
  underGround.image.offset.y = -32
  for (let i = -1; i <= 10; i++) {
    let gr = new floor.Sprite(135*i, 700, 135, 140, "s")
    for (let l = 0; l <= 3; l++) {
      let ugr = new underGround.Sprite(135*i, 835+135*l, 135, 140, "s")
    }
  }
}

function draw() {
  clear()

  image(sky, 0, 0, 900 * 16/9, 900)
  image(FMount, 0, 0, 900 * 16/9, 900)
  image(GMount, 0, 0, 900 * 16/9, 900)
  image(cloudB, 0, 0, 900 * 16/9, 900)
  image(cloudM, 0, 0, 900 * 16/9, 900)
  image(cloudF, 0, 0, 900 * 16/9, 900)
  if (blink === false) {
    meatMan.addAni(blinkAni)
    blink === true
  }
  meatMan.image.offset.y = -30
  meatMan.image.offset.x = 4
  meatMan.image.scale = v
} 