let floor, player, faceR, faceL
let count, l
let walkR = {'': '', '': ''}

function preload() {
  faceR = loadImage('theMeatManRight.png')
  faceL = loadImage('theMeatManLeft.png')
  walkR[0] = loadImage('theMeatManWalkingRight-1.png')
  walkR[1] = loadImage('theMeatManWalkingRight-2.png')
  walkR[2] = loadImage('theMeatManWalkingRight-3.png')
  walkR[3] = loadImage('theMeatManWalkingRight-4.png')
}

function setup() {
  new Canvas(1000, 1000)
  world.gravity.y = 9.8

  floor = new Sprite(500, 900, 1000, 300, "s")
  
  meatMan = new Sprite(200, 800, 93, 100)
  meatMan.image = faceR
}

function draw() {
  if (kb.pressing('right') && kb.pressing('left')) {
  } else if (kb.pressing('right')) {
    meatMan.image = faceR
    meatMan.move(8, 'right', 4)
  } else if (kb.pressing('left')) {
    meatMan.image = faceL
    meatMan.move(8, 'left', 4)
  }
  meatMan.image.scale = 0.25
  meatMan.debug = mouse.pressing()
  clear()
}