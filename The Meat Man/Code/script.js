let floor, player, faceR, faceL, crouchR, crouchL, meatball, openMouthL, openMouthR
let count, l, temp, blink, delay, bli
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
  meatball = loadImage('Meatball.png')
  openMouthL = loadImage('theMeatManOpenMouthL.png')
  openMouthR = loadImage('theMeatManOpenMouthR.png')
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
  new Canvas(1000, 1000)
  world.gravity.y = 9.8

  floor = new Sprite(500, 900, 1000, 300, "s")
  floor.bounciness = 0
  
  meatMan = new Sprite([[388, 750], [347, 750], [320, 720], [320, 650], [413, 650], [413, 720], [388, 750]])
  meatMan.image = faceR
  meatMan.rotationLock = true
  meatMan.mass = 30
  meatMan.bounciness = 0
  meatMan.friction = 500

  count = 0
  l = 0
  blink = 0
  bli = 0
  delay = 0
}

function draw() {
  movement()
  blinking()
  shoot()
  camera.pos = meatMan.pos
  meatMan.image.scale = 0.25
  meatMan.image.offset.y = -30
  meatMan.image.offset.x = 4
  clear()
}