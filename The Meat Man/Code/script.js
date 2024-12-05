let floor, player, faceR, faceL
let count, l
let walkR = ['', '', '', '']

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
    skib()
  } else if (kb.pressing('left')) {
    meatMan.image = faceL
    meatMan.move(10, 'left', 4)
  }
  meatMan.image.scale = 0.25
  clear()
}

function skib() {
  count = 0
    l = 0
      if (l === 4) {
        l = 0
      }
      meatMan.image = walkR[l]
      l++
    count++
    meatMan.move(10, 'right', 4)
}