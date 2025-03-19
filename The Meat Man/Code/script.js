let meatMan
let crouchImg
let openMouthImg
let walk = ["", "", "", ""]
let level = [true, true, false, false, false, false, false]
let selector = false
let idle
let scaleF
let skyImg
let fMountImg
let cMountImg
let fCloudImg
let mCloudImg
let cCloudImg
let floor
let floorImg
let uGround
let uGroundImg
let set = [false, false]
let blinkDelay = [0, 0, 0]
let blink = ["", ""]
let titleImg
let treeImg
let playImg = ["", ""]
let playButton
let controlsImg = ["", ""]
let controls
let exitImg = ["", ""]
let exit
let levelSelectImg
let enlarge = 0
let lockImg
let levelClick = ["", "", "", "", "", ""]
let spacer = 0
let black
let wind
let wind2
let soundDelay = 0
let openingScene = false
let ctpimg
let ctp
let click = ["", ""]
let x
let ximg
let fade = false
let fading = false
let meatTheme
let controlsScreen
let controlsScreenImg
let controlsBool = false
let meatball
let meatballImg
let crouch = false

function preload() {
  idle = loadImage('idle.png')
  skyImg = loadImage('sky_fc.png')
  fMountImg = loadImage('far_mountains_fc.png')
  cMountImg = loadImage('grassy_mountains_fc.png')
  fCloudImg = loadImage('clouds_mid_fc.png')
  mCloudImg = loadImage('clouds_mid_t_fc.png')
  cCloudImg = loadImage('clouds_front_t_fc.png')
  floorImg = loadImage('ground.png')
  uGroundImg = loadImage('underGround.png')
  blink[0] = loadImage('meatManBlinking-1.png')
  blink[1] = loadImage('meatManBlinking-2.png')
  titleImg = loadImage('title.png')
  treeImg = loadImage('tree.png')
  playImg[0] = loadImage('play-1.png')
  playImg[1] = loadImage('play-2.png')
  controlsImg[0] = loadImage('controls-1.png')
  controlsImg[1] = loadImage('controls-2.png')
  exitImg[0] = loadImage('exit-1.png')
  exitImg[1] = loadImage('exit-2.png')
  levelSelectImg = loadImage('levelSelect.png')
  lockImg = loadImage('lock.png')
  wind = createAudio('wind.mp3')
  wind2 = createAudio('wind.mp3')
  ctpimg = loadImage('CTPlogo.png')
  click[0] = createAudio('click.mp3')
  click[1] = createAudio('clickOff.mp3')
  ximg = loadImage('x.png')
  meatTheme = createAudio('rem.wav')
  controlsScreenImg = loadImage('controlsScreen.png')
  crouchImg = loadImage('meatManCrouched.png')
  openMouthImg = loadImage('meatManOpenMouth.png')
  walk = [loadImage('meatManWalking-1.png'), loadImage('meatManWalking-2.png'), loadImage('meatManWalking-3.png'), loadImage('meatManWalking-4.png')]
  meatballImg = loadImage('Meatball.png')
}

function setup() {
  new Canvas(1200, 1000)
  world.gravity.y = 9.8

  black = new Sprite(0, 0, 3000, 5000, "n")
  black.layer = 100
  black.color = "black"

  meatMan = new Sprite([[158, 647], [117, 647], [97, 620], [97, 553], [183, 553], [183, 620], [158, 647]])
  meatMan.image = idle
  meatMan.rotationLock = true
  meatMan.layer = 3
  scaleF = 0.24

  floor = new Group()
  floor.w = 101
  floor.h = 105

  uGround = new Group()
  uGround.w = 101
  uGround.h = 105
  uGround.layer = 3

  levelClick = new Group()
  levelClick.layer = 5

  wind2.play()

  ctp = new Sprite(600, 360, 400, 400, "n")
  ctp.img = ctpimg
  ctp.opacity = 0

  meatball = new Group()
  meatball.image = meatballImg
  meatball.d = 37
}

function draw() {
  clear()

  if (level[0]) {
    menu()
  } else {
    if (level[1] && level[2] && level[3] && level[4] && level[5] && level[6]) {
      six()
    } else if (level[1] && level[2] && level[3] && level[4] && level[5]) {
      five()
    } else if (level[1] && level[2] && level[3] && level[4]) {
      four()
    } else if (level[1] && level[2] && level[3]) {
      three()
    } else if (level[1] && level[2]) {
      two()
    } else {
      one()
    }
    levelClick.remove()
    movement()
    shooting()
    meatball.image.scale = 0.24
    meatball.image.offset.x = -17
    meatball.image.offset.y = 6
    if (meatMan.y < 800) {
    camera.pos = meatMan.pos
    } else {
    meatMan.velocity.x = 0
    }
  }

  blinking()
  floor.image.scale = 0.3
  floor.image.offset.y = -30
  floor.collider = "s"
  floor.bounciness = 0
  uGround.image.scale = 0.3
  uGround.image.offset.y = -30
  uGround.collider = "s"
  meatMan.image.scale = scaleF
  meatMan.image.offset.y = -30
  meatMan.friction = 500
  allSprites.bounciness = 0
}

function movement() {
  if (crouch === false) {
    if (kb.pressing('left') && kb.pressing('right')) {
    } else if (kb.pressing('right')) {
      meatMan.scale.x = 1
      if (meatMan.colliding(floor) > 0) {
        if (enlarge === 12) {
          if (spacer === 4) {
            spacer = 0
          }
          meatMan.image = walk[spacer]
          spacer++
          enlarge = 0
        }
        enlarge++
      } else {
        meatMan.image = idle
      }
      meatMan.velocity.x = 6
    } else if (kb.pressing('left')) {
      meatMan.scale.x = -1
      if (meatMan.colliding(floor) > 0) {
        if (enlarge === 12) {
          if (spacer === 4) {
            spacer = 0
          }
          meatMan.image = walk[spacer]
          spacer++
          enlarge = 0
        }
        enlarge++
      } else {
        meatMan.image = idle
      }
      meatMan.velocity.x = -6
    }
    if (kb.pressed('right') || kb.pressed('left')) {
      meatMan.image = idle
    }
  }
  if (meatMan.colliding(floor) > 0) {
    if (kb.pressing('space')) {
      meatMan.image = crouchImg
      crouch = true
      if (kb.presses('left')) {
        meatMan.scale.x = -1
      } else if (kb.presses('right')) {
        meatMan.scale.x = 1
      }
    }
    if (kb.pressed('space')) {
      meatMan.image = idle
      crouch = false
      meatMan.velocity.y = -7
    }
  }
}

function shooting() {
  if (mouse.presses()) {
    let meat = new meatball.Sprite()
    if (meatMan.scale.x === -1) {
      meat.x = meatMan.x - 60
      meat.velocity.x = -5
    } else {
      meat.x = meatMan.x + 60
      meat.velocity.x = 5
    }
    meat.velocity.y = -7
    meat.y = meatMan.y - 30
    scaleF -= 0.005
    meatMan.w -= 1.8
    meatMan.h -= 2
  }
  if (meatball.collides(floor)) {
    meatball[0].remove()
  }
  if (mouse.pressing()) {
    meatMan.image = openMouthImg
  }
  if (mouse.pressed()) {
    meatMan.image = idle
  }
}

function blinking() {
  if (blinkDelay[0] === 450) {
    if (blinkDelay[1] === 6) {
      if (blinkDelay[2] === 0 || blinkDelay[2] === 2) {
        meatMan.image = blink[0]
      } else if (blinkDelay[2] === 1) {
        meatMan.image = blink[1]
      } else if (blinkDelay[2] === 3) {
        meatMan.image = idle
      } else {
        blinkDelay[2] = -1
        blinkDelay[0] = 0
      }
      blinkDelay[2]++
      blinkDelay[1] = 0
    } else {
      blinkDelay[1]++
    }
  } else {
    blinkDelay[0]++
  }
}

function menu() {
  background('#d1e8eb')
  image(skyImg, 0, 0, 1408, 792)
  image(fMountImg, 0, 0, 1408, 792)
  image(cMountImg, 0, 0, 1408, 792)
  image(fCloudImg, 0, 0, 1408, 792)
  image(mCloudImg, 0, 0, 1408, 792)
  image(cCloudImg, 0, 0, 1408, 792)
  image(treeImg, 850, 381, 270, 270)
  floor.image = floorImg
  uGround.image = uGroundImg
  if (set[0] === false) {
    playButton = new Sprite([[480, 480], [480, 518], [527, 565], [660, 565], [700, 525], [700, 479], [660, 439], [521, 439], [480, 480]])
    playButton.collider = "k"
    playButton.layer = 3
    playButton.image = playImg[0]
    exit = new Sprite([[630, 620], [630, 658], [677, 705], [810, 705], [850, 665], [850, 619], [810, 579], [671, 579], [630, 620]])
    exit.collider = "k"
    exit.layer = 4
    exit.image = exitImg[0]
    controls = new Sprite([[300, 620], [300, 658], [347, 705], [570, 705], [610, 665], [610, 619], [570, 579], [341, 579], [300, 620]])
    controls.collider = "k"
    controls.image = controlsImg[0]
    controls.image.offset.x = 107
    controls.image.offset.y = 144
    controls.layer = 2
    x = new Sprite(1155, 45, 45, 45, "k")
    x.img = ximg
    x.img.scale = 2
    x.img.offset.y = 2
    x.img.offset.x = 1
    x.opacity = 0
    for (let i = 0; i<= 100; i++) {
      let ground = new floor.Sprite(101*i, 700)
      ground.layer = 1
      for (let l = 0; l <= 2; l++) {
        let uFloor = new uGround.Sprite(101*i, 805 + 105*l)
      }
    }
    set[0] = true
  }
  image(titleImg, 340, -80, 500, 500)
  if (black.opacity > 0.25 && fade === false) {
    black.opacity -= 0.005
  } else {
    fade === true
  }
  if (playButton.mouse.presses()) {
    click[0].play()
  }
  if (playButton.mouse.pressing()) {
    playButton.img = playImg[1]
  } else {
    playButton.img = playImg[0]
  }
  if (playButton.mouse.pressed()) {
    selector = true
    click[1].play()
  }
  if (exit.mouse.presses()) {
    click[0].play()
  }
  if (exit.mouse.pressing()) {
    exit.img = exitImg[1]
    //terminate
  } else {
    exit.img = exitImg[0]
  }
  if (controls.mouse.presses()) {
    click[0].play()
  }
  if (controls.mouse.pressing()) {
    controls.img = controlsImg[1]
    controls.image.offset.x = 107
    controls.image.offset.y = 144
  } else {
    controls.img = controlsImg[0]
  }
  if (controls.mouse.pressed()) {
    controlsBool = true
    click[1].play()
  }
  playButton.image.scale = 0.6
  exit.image.scale = 0.6
  controls.image.scale = 0.86

  if (controlsBool) {
    playButton.remove()
    controls.remove()
    exit.remove()
    if (enlarge != 900) {
      enlarge += 75
    }
    image(controlsScreenImg, 150, -50, enlarge, enlarge)
    x.opacity = 1
    if (x.mouse.presses()) {
      enlarge = 0
      controlsBool = false
      set[0] = false
      x.opacity = 0
      playButton.opacity = 1
      controls.opacity = 1
      exit.opacity = 1
    }
  }
  if (selector) {
    playButton.remove()
    controls.remove()
    exit.remove()
    if (enlarge === 1000) {
      if (set[1] === false) {
        for (let i = 1; i<=6; i++) {
          if (i === 6) {
            let levels = new levelClick.Sprite(618, 475, 170, 170, "k")
          } else {
            let levels = new levelClick.Sprite(322 + spacer, 305, 120, 120, "k")
            spacer += 148.3
          }
          if (level[i] === false) {
            levelClick[i - 1].img = lockImg
          } else {
            levelClick[i - 1].img = ""
          }
          levelClick[i-1].image.scale = 0.47
        }
        set[1] = true
      }
    } else {
      enlarge += 50
    }
    image(levelSelectImg, 122, -200, enlarge, enlarge)
    x.opacity = 1
    if (set[1]) {
      for (let i = 0; i <= 5; i++) {
        if (levelClick[i].mouse.presses() && levelClick[i].img != lockImg) {
          for (let l = i + 1; l >= 1; l--) {
            level[l] = true
          }
          fading = true
          x.remove()
        }
      }
    }
    if (fading) {
      if (black.opacity < 1){
        black.opacity += 0.02
      }
      if (meatTheme.volume() >= 0.01) {
        meatTheme.volume(meatTheme.volume() - 0.01)
      } else {
        meatTheme.stop()
        level[0] = false
        enlarge = 0
        spacer = 0
        selector = false
      }
    }
    if (x.mouse.presses()) {
      enlarge = 0
      selector = false
      set = [false, false]
      x.opacity = 0
      levelClick.remove()
      playButton.opacity = 1
      controls.opacity = 1
      exit.opacity = 1
      spacer = 0
    }
  }
  if (openingScene) {
    if (blinkDelay[0] === 3100) {
      openingScene = false
      blinkDelay = [0, 0, 0]
      set[0] = false
      meatTheme.play()
    } else {
      blinkDelay[0]++
      playButton.remove()
      controls.remove()
      exit.remove()
      x.remove()
      black.opacity = 1
      if (blinkDelay[1] === 500) {
        if (ctp.opacity < 1) {
          ctp.opacity += 0.07
        }
        if (blinkDelay[2] === 700) {
          ctp.opacity = 0
        } else {
          blinkDelay[2]++
        }
      } else {
        blinkDelay[1]++
      }
    }
  }
}

function one() {
  background('#d1e8eb')
    for (let i = 0; i <= 5632; i+=1408) {
      if (meatMan.pos.y < 800) {
        image(skyImg, 0.1* (140 - meatMan.pos.x) + i, 0.5*(600 - meatMan.pos.y) - 100, 1408, 792)
        image(fMountImg, 0.2* (140 - meatMan.pos.x) + i, 0.5*(600 - meatMan.pos.y), 1408, 792)
        image(cMountImg, 0.3* (140 - meatMan.pos.x) + i, 0.5*(600 - meatMan.pos.y), 1408, 792)
        image(fCloudImg, 0.4* (140 - meatMan.pos.x) + i, 0.5*(600 - meatMan.pos.y), 1408, 792)
        image(mCloudImg, 0.4* (140 - meatMan.pos.x) + i, 0.5*(600 - meatMan.pos.y), 1408, 792)
        image(cCloudImg, 0.5* (140 - meatMan.pos.x) + i, 0.5*(600 - meatMan.pos.y), 1408, 792)
      } else {
        image(skyImg, 0.1* (140 - meatMan.pos.x) + i, -200, 1408, 792)
        image(fMountImg, 0.2* (140 - meatMan.pos.x) + i, -200, 1408, 792)
        image(cMountImg, 0.3* (140 - meatMan.pos.x) + i, -200, 1408, 792)
        image(fCloudImg, 0.4* (140 - meatMan.pos.x) + i, -200, 1408, 792)
        image(mCloudImg, 0.4* (140 - meatMan.pos.x) + i, -200, 1408, 792)
        image(cCloudImg, 0.5* (140 - meatMan.pos.x) + i, -200, 1408, 792)
      }
    }
  image(skyImg, 0.1* (140 - meatMan.pos.x) - 1408, 0.5*(600 - meatMan.pos.y) - 100, 1408, 792)
  image(fMountImg, 0.2* (140 - meatMan.pos.x) - 1408, 0.5*(600 - meatMan.pos.y), 1408, 792)
  image(cMountImg, 0.3* (140 - meatMan.pos.x) - 1408, 0.5*(600 - meatMan.pos.y), 1408, 792)
  image(fCloudImg, 0.4* (140 - meatMan.pos.x) - 1408, 0.5*(600 - meatMan.pos.y), 1408, 792)
  image(mCloudImg, 0.4* (140 - meatMan.pos.x) - 1408, 0.5*(600 - meatMan.pos.y), 1408, 792)
  image(cCloudImg, 0.5* (140 - meatMan.pos.x) - 1408, 0.5*(600 - meatMan.pos.y), 1408, 792)
  if (black.opacity > 0.005) {
    black.opacity -= 0.005
  }
}

function two() {

}

function three() {

}

function four() {

}

function five() {

}

function six() {

}