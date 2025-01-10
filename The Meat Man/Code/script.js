let meatMan, sky, cloudB, cloudM, cloudF, FMount, GMount, grass, ground, underImg, floor
let v
function preload() {
  sky = loadImage('sky_fc.png')
  cloudB = loadImage('clouds_mid_t_fc.png')
  cloudM = loadImage('clouds_mid_fc.png')
  cloudF = loadImage('clouds_front_t_fc.png')
  FMount = loadImage('far_mountains_fc.png')
  GMount = loadImage('grassy_mountains_fc.png')
  grass = loadImage('Ground.png')
  faceR = loadImage('theMeatManRight.png')
  ground = loadImage('Ground.png')
  underImg = loadImage('underGround.png')
}

function setup() {
  new Canvas(windowWidth, windowHeight, "pixelated")

  meatMan = new Sprite([[188, 677], [147, 677], [127, 650], [127, 583], [213, 583], [213, 650], [188, 677]])
  meatMan.image = faceR
  meatMan.rotationLock = true
  meatMan.mass = 30
  meatMan.bounciness = 0
  meatMan.friction = 500
  v = 0.24
}

function draw() {
  clear()

  image(sky, 0, 0, 900 * 16/9, 900)
  image(FMount, 0, 0, 900 * 16/9, 900)
  image(GMount, 0, 0, 900 * 16/9, 900)
  image(cloudB, 0, 0, 900 * 16/9, 900)
  image(cloudM, 0, 0, 900 * 16/9, 900)
  image(cloudF, 0, 0, 900 * 16/9, 900)
  meatMan.image.scale = v
  meatMan.image.offset.y = -30
  meatMan.image.offset.x = 4
} 