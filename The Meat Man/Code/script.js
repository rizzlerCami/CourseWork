let floor, player, faceR, faceL

function preload() {
  faceR = loadImage(`theMeatManRight.png`)
}

function setup() {
  new Canvas(1000, 1000)
  world.gravity.y = 9.8

  floor = new Sprite(500, 900, 1000, 300, "s")
  
  meatMan = new Sprite(200, 800, 300, 300)
  meatMan.image = `theMeatManRight.png`
  meatMan.image.scale = 0.2
}
function draw() {
  clear()
}