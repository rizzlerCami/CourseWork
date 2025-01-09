let meatMan, sky, cloudB, cloudM, cloudF, FMount, GMount, grass

function preload() {
  sky = loadImage('sky_fc.png')
  cloudB = loadImage('clouds_mid_t_fc.png')
  cloudM = loadImage('clouds_mid_fc.png')
  cloudF = loadImage('clouds_front_t_fc.png')
  FMount = loadImage('far_mountains_fc.png')
  GMount = loadImage('grassy_mountains_fc.png')
  grass = loadImage('Ground.png')
}

function setup() {
  new Canvas(windowWidth, windowHeight, "pixelated")
}

function draw() {
  clear()

  image(sky, 0, 0, windowHeight * 16/9, windowHeight)
  image(FMount, 0, 0, windowHeight * 16/9, windowHeight)
  image(GMount, 0, 0, windowHeight * 16/9, windowHeight)
  image(cloudB, 0, 0, windowHeight * 16/9, windowHeight)
  image(cloudM, 0, 0, windowHeight * 16/9, windowHeight)
  image(cloudF, 0, 0, windowHeight * 16/9, windowHeight)
} 