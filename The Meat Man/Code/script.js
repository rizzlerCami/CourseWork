let ground, floor, meatMan, faceR, faceL, crouchR, crouchL, meatballSprite, openMouthL, openMouthR, meatball, bottom
let count, l, temp, blink, delay, bli, v, shooting, underImg, underGround
let y = 1
let crouch = false
let blinkR = ['', '']
let blinkL = ['', '']
let walkR = ['', '', '', '']
let walkL = ['', '', '', '']

function preload() {
  faceR = loadImage('theMeatManRight.png')
  faceL = loadImage('theMeatManLeft.png')
  crouchR = loadImage('theMeatManCrouchedRight.png')
  crouchL = loadImage('theMeatManCrouchedLeft.png')
  walkR[0] = loadImage('theMeatManWalkingRight-1.png')
  walkR[1] = loadImage('theMeatManWalkingRight-2.png')
  walkR[2] = loadImage('theMeatManWalkingRight-3.png')
  walkR[3] = loadImage('theMeatManWalkingRight-4.png')
  walkL[0] = loadImage('theMeatManWalkingLeft-1.png')
  walkL[1] = loadImage('theMeatManWalkingLeft-2.png')
  walkL[2] = loadImage('theMeatManWalkingLeft-3.png')
  walkL[3] = loadImage('theMeatManWalkingLeft-4.png')
  blinkR[0] = loadImage('theMeatManBlinkingRight-1.png')
  blinkR[1] = loadImage('theMeatManBlinkingRight-2.png')
  blinkL[0] = loadImage('theMeatManBlinkingLeft-1.png')
  blinkL[1] = loadImage('theMeatManBlinkingLeft-2.png')
  meatballSprite = loadImage('Meatball.png')
  openMouthL = loadImage('theMeatManOpenMouthL.png')
  openMouthR = loadImage('theMeatManOpenMouthR.png')
  ground = loadImage('Ground.png')
  underImg = loadImage('underGround.png')

}

function movement() {
  if (crouch === false) {
    if (kb.pressing('right') && kb.pressing('left')) {
    } else if (kb.pressing('right')) {
      if (meatMan.colliding(floor) > 0) {
        if (count === 12) {
          if (l === 4) {
            l = 0
          }
          meatMan.image = walkR[l]
          l++
          count = 0
        }
        count++
      } else {
        meatMan.image = faceR
      }
      meatMan.velocity.x = 6
      blink = 0
      bli = 0
      delay = 0
    } else if (kb.pressing('left')) {
      if (meatMan.colliding(floor) > 0) {
        if (count === 12) {
          if (l === 4) {
            l = 0
          }
          meatMan.image = walkL[l]
          l++
          count = 0
        }
        count++
      } else {
        meatMan.image = faceL
      }
      meatMan.velocity.x = -6
      blink = 0
      bli = 0
      delay = 0
    }

    if (kb.pressed('right')) {
      meatMan.image = faceR
    } else if (kb.pressed('left')) {
      meatMan.image = faceL
    }
  }

  if (meatMan.colliding(floor) > 0) {
    if (kb.presses('space') && (meatMan.image === faceL || meatMan.image === walkL[0] || meatMan.image === walkL[1] || meatMan.image === walkL[2] || meatMan.image === walkL[3])) {
      temp = faceL
      meatMan.image = crouchL
      crouch = true
    } else if (kb.presses('space') && (meatMan.image === faceR || meatMan.image === walkR[0] || meatMan.image === walkR[1] || meatMan.image === walkR[2] || meatMan.image === walkR[3])) {
      temp = faceR
      meatMan.image = crouchR
      crouch = true
    }
    if (kb.pressed('space')) {
      meatMan.image = temp
      crouch = false
      meatMan.velocity.y = -7
    }
  }
}

function blinking() {
  if (blink === 150) {
    if (meatMan.image === faceL || meatMan.image === blinkL[0] || meatMan.image === blinkL[1]) {
      if (delay === 3) {
        if (bli === 0) {
          meatMan.image = blinkL[0]
        } else if (bli === 1) {
          meatMan.image = blinkL[1]
        } else if (bli === 2) {
          meatMan.image = blinkL[0] 
        } else if (bli === 3){
          meatMan.image = faceL
        } else if (bli === 4){
          bli = -1
          blink = 0
        }
        bli++
        delay = 0
      } else {
        delay++
      }
    } else if (meatMan.image === faceR || meatMan.image === blinkR[0] || meatMan.image === blinkR[1]) {
      if (delay === 3) {
        if (bli === 0) {
          meatMan.image = blinkR[0]
          bli++
        } else if (bli === 1) {
          meatMan.image = blinkR[1]
          bli++
        } else if (bli === 2) {
          meatMan.image = blinkR[0]
          bli++
        } else if (bli === 3){
          meatMan.image = faceR
          bli++
        } else {
          bli = 0
          blink = 0
        }
        delay = 0
      } else {
        delay++
      }
    }
  } else {
    blink++
  }
}

function shoot() {
    if (mouse.presses()) {
      let meat = new meatball.Sprite()
      if (meatMan.image === faceL || meatMan.image === walkL[0] || meatMan.image === walkL[1] || meatMan.image === walkL[2] || meatMan.image === walkL[3] || meatMan.image === openMouthL || meatMan.image === blinkL[0] || meatMan.image === blinkL[1]) {
        meat.x = meatMan.x - 60
        meat.velocity.x = -5
      } else {
        meat.x = meatMan.x + 60
        meat.velocity.x = 5
      }
      meat.velocity.y = -7
      meat.y = meatMan.y - 30
      v -= 0.01
      meatMan.w -= 4
      meatMan.h -= 4
    }

    if (meatball.collides(floor) || meatball.collides(bottom)) {
      meatball[0].remove()
    }
  
    if (mouse.pressing()) {
      if (meatMan.image === faceL || meatMan.image === walkL[0] || meatMan.image === walkL[1] || meatMan.image === walkL[2] || meatMan.image === walkL[3]) {
        meatMan.image = openMouthL
        crouch = true
      } else if (meatMan.image === faceR || meatMan.image === walkR[0] || meatMan.image === walkR[1] || meatMan.image === walkR[2] || meatMan.image === walkR[3]) {
        meatMan.image = openMouthR
          crouch = true
      }
    }
  
    if (mouse.pressed()) {
      crouch = false
      if (meatMan.image === openMouthL) {
        meatMan.image = faceL
      } else if (meatMan.image === openMouthR) {
        meatMan.image = faceR
      }
    }
}

function setup() {
  new Canvas(windowWidth, windowHeight)
  world.gravity.y = 9.8

  floor = new Group()
  floor.image = ground
  floor.bounciness = 0
  floor.image.scale = 0.4
  floor.image.offset.y = -32

  underGround = new Group()
  underGround.image = underImg
  underGround.image.scale = 0.4
  underGround.image.offset.y = -32
  for (let i = -1; i <= 50; i++) {
    if (i === 5) {
      i = 7
    }
    if (i >= 6) {
      y = -100
    }
    let gr = new floor.Sprite(135*i, 820+y, 135, 140, "s")
    for (let l = 0; l <= 3; l++) {
      let ugr = new underGround.Sprite(135*i, 960+y+135*l, 135, 140, "s")
    }
  }
  
  meatMan = new Sprite([[388, 747], [347, 747], [327, 720], [327, 653], [413, 653], [413, 720], [388, 747]])
  meatMan.image = faceR
  meatMan.rotationLock = true
  meatMan.mass = 30
  meatMan.bounciness = 0
  meatMan.friction = 500

  meatball = new Group()
  meatball.image = meatballSprite
  meatball.d = 37

  bottom = new Sprite(500, 1500, 2000, 3, "s")
  bottom.img = ''

  count = 0
  l = 0
  blink = 0
  bli = 0
  delay = 0
  v = 0.24
}

function draw() {
  movement()
  blinking()
  shoot()
  meatMan.image.scale = v
  meatMan.image.offset.y = -30
  meatMan.image.offset.x = 4

  meatball.image.scale = 0.24
  meatball.image.offset.x = -17
  meatball.image.offset.y = 6
  if (meatMan.y < 800) {
    camera.pos = meatMan.pos
  } else {
    meatMan.velocity.x = 0
  }
  if (v <= 0 || meatMan.collides(bottom)) {
    //GAME OVER
  }
  clear()
}