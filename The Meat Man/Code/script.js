let floor, player, faceR

function preload() {
  faceR = loadImage('theMeatManRight.png')
  faceL = loadImage('The Meat Man Left.png')
}

function setup() {
  new Canvas(1000, 1000)
  world.gravity.y = 9.8

  floor = new Sprite(500, 900, 1000, 300, "s")
  
  meatMan = new Sprite(200, 800, 93, 100)
  meatMan.image = faceR
  meatMan.image.scale = 0.25
}

function draw() {
  clear()
  if (kb.presses('left')) {
    meatMan.image = faceL
  } else if (kb.presses('right')) {
    meatMan.image = faceR
  }
}