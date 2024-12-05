let floor, player, faceR, faceL, crouchR, crouchL
let count, l, temp
let jump = false
let crouch = false
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
}

function movement() {
  if (crouch === false && jump === false) {
    if (kb.pressing('right') && kb.pressing('left')) {
    } else if (kb.pressing('right')) {
      if (count === 12) {
        if (l === 4) {
          l = 0
        }
        meatMan.image = walkR[l]
        l++
        count = 0
      }
      count++
      meatMan.move(10, 'right', 4)
    } else if (kb.pressing('left')) {
      if (count === 12) {
        if (l === 4) {
          l = 0
        }
        meatMan.image = walkL[l]
        l++
        count = 0
      }
      count++
      meatMan.move(10, 'left', 4)
    }

    if (kb.pressed('right')) {
      meatMan.image = 'theMeatManRight.png'
    } else if (kb.pressed('left')) {
      meatMan.image = 'theMeatManLeft.png'
    }
  }

  if (kb.presses('shift') && (meatMan.image === faceL || meatMan.image === walkL[0] || meatMan.image === walkL[1] || meatMan.image === walkL[2] || meatMan.image === walkL[3])) {
    temp = faceL
    meatMan.image = crouchL
    crouch = true
  } else if (kb.presses('shift') && (meatMan.image === faceR || meatMan.image === walkR[0] || meatMan.image === walkR[1] || meatMan.image === walkR[2] || meatMan.image === walkR[3])) {
    temp = faceR
    meatMan.image = crouchR
    crouch = true
  }
  if (kb.pressed('shift')) {
    meatMan.image = temp
    crouch = false
  }
}

function jumping() {
  if (kb.presses('space')) {
    if (meatMan.image === faceL || meatMan.image === walkL[0] || meatMan.image === walkL[1] || meatMan.image === walkL[2] || meatMan.image === walkL[3]) {
      meatMan.image = crouchL
        meatMan.image = faceL
    } else if (meatMan.image === faceR || meatMan.image === walkR[0] || meatMan.image === walkR[1] || meatMan.image === walkR[2] || meatMan.image === walkR[3]) {
      meatMan.image = crouchR
        meatMan.image = faceR
    }
    meatMan.velocity.y = -4
        jump = true
  }
}
function setup() {
  new Canvas(1000, 1000)
  world.gravity.y = 9.8

  floor = new Sprite(500, 900, 1000, 300, "s")
  floor.bounciness = 0
  
  meatMan = new Sprite(200, 800, 93, 100)
  meatMan.image = faceR
  meatMan.rotationLock = true
  meatMan.mass = 30
  meatMan.bounciness = 0

  count = 0
  l = 0
}

function draw() {
  movement()
  jumping()
  if (meatMan.collides(floor)) {
    jump = false
  }
  camera.pos = meatMan.pos
  meatMan.image.scale = 0.25
  clear()
}