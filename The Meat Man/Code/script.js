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
let set = [false, false, false]
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
let walkSound
let jumpSound
let shootSound
let crate
let crateImg
let tree
let spoon
let spoonImg = ["", "", "", ""]
let spoonImgCount = 0
let spoo
let spoonDelay = 0
let spoonBool = true
let dead = false
let flip = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
let spoonDead = [, , , , , , , , , ]
let black2
let won = false
let fakePipe
let won2 = false
let black3
let pan
let panFlip = false
let gameOverImg
let youWinImg
let screenEnlarge = 0.01
let gameOver
let menuButton
let menuButtonImg = [,]
let won3 = false

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
  walkSound = createAudio('walkSound.mp3')
  jumpSound = createAudio('jumpSound.mp3')
  shootSound = createAudio('shootSound.mp3')
  crateImg = loadImage('crate.png')
  spoonImg = [loadImage('spoon-1.png'), loadImage('spoon-2.png'), loadImage('spoon-3.png'), loadImage('spoon-4.png')]
  signImg = [loadImage('meatSign-1.png'), loadImage('meatSign-2.png'), loadImage('meatSign-3.png'), loadImage('meatSign-4.png')]
  farmImg = loadImage('FARMSIGN.png')
  pipeImg = loadImage('farmPipe.png')
  endPipeImg = loadImage('endPipeBig.png')
  panImg = loadImage('fry.png')
  youWinImg = loadImage('youWin.png')
  gameOverImg = loadImage('gameOver.png')
  menuButtonImg = [loadImage('menu-1.png'), loadImage('menu-2.png')]
}

function setup() {
  new Canvas(screen.width, screen.height)
  world.gravity.y = 9.8

  spoon = new Group()
  spoon.h = 290
  spoon.w = 85
  spoon.rotationLock = true 

  black = new Sprite(0, 0, 4000, 5000, "n")
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

  crate = new Group()
  crate.w = 80
  crate.h = 80
  crate.collider = "s"
  crate.img = crateImg
  crate.img.scale = 0.25
  crate.layer = 1

  tree = new Group()
  tree.w = 270
  tree.h = 270
  tree.collider = "n"
  tree.img = treeImg
  tree.scale = 0.7

  sign = new Group()
  sign.w = 100
  sign.h = 100
  sign.collider = "n"
  sign.layer = 0
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
    if (meatMan.y < 1200 && won2 === false && won3 == false && level[0] == false) {
    camera.pos = meatMan.pos
    } else {
    meatMan.velocity.x = 0
    }
    spoonMove()
    spoon.scale = 0.4
    spoon.offset.y = 10
    sign.scale = 0.25
  }

  blinking()
  meatMan.image.scale = scaleF
  meatMan.image.offset.y = -30
  meatMan.friction = 500
  allSprites.bounciness = 0
  floor.image.scale = 0.3
  floor.image.offset.y = -30
  floor.collider = "s"
  floor.bounciness = 0
  uGround.image.scale = 0.3
  uGround.image.offset.y = -30
  uGround.collider = "s"
  if (dead === true) {
    if (screenEnlarge < 1.7) {
      screenEnlarge += 0.05
    } else {
      if (set[2] == false) {
        menuButton = new Sprite([[90, 0], [210, 0], [250, -50], [210, -100], [90, -100], [50, -50], [90, 0]])
        menuButton.w = 340
        menuButton.h = 160
        set[2] = true
      }
      if (menuButton.mouse.pressing()) {
        menuButton.img = menuButtonImg[1]
        meatMan.img = crouchImg
      } else {
        menuButton.img = menuButtonImg[0]
      }
      if (menuButton.mouse.pressed()) {
        meatMan.velocity.y = -10
        won3 = true
      }
      menuButton.img.scale = 0.78
      menuButton.img.offset.y = -100
      if (won3) {
        black.pos = gameOver.pos
        black.layer = 999999999999999999999
        if (black.opacity <= 1) {
          black.opacity += 0.01
        } else {
          dead = false
          set = [false, false, false]
          level[0] = true
          fade = false
          fading = false
          menuButton.remove()
          gameOver.remove()
          tree.remove()
          sign.remove()
          crate.remove()
          floor.remove()
          uGround.remove()
          spoon.remove()
          meatMan.pos.x = 155
          meatMan.pos.y = 400
          camera.off()
          enlarge = 0
          selector = false
          meatTheme.play()
          meatTheme.volume(1)
          won2 = false
          won3 = false
          screenEnlarge = 0.01
        }
      }
    }
    gameOver.pos = camera.pos
    gameOver.scale.y = 0.9
    gameOver.img.scale = screenEnlarge
  }
}

function movement() {
  if (crouch === false && dead === false) {
    if (kb.pressing('left') && kb.pressing('right')) {
    } else if (kb.pressing('right')) {
      meatMan.scale.x = 1
      if (meatMan.colliding(floor) > 0 || meatMan.colliding(crate) > 0 || meatMan.colliding(pan) === false) {
        if (enlarge === 12) {
          if (spacer === 4) {
            spacer = 0
          }
          meatMan.image = walk[spacer]
          spacer++
          enlarge = 0
        }
        enlarge++
        walkSound.play()
      } else {
        meatMan.image = idle
      }
      meatMan.velocity.x = 6
    } else if (kb.pressing('left')) {
      meatMan.scale.x = -1
      if (meatMan.colliding(floor) > 0 || meatMan.colliding(crate) > 0) {
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
      walkSound.play()
    }
    if (kb.pressed('right') || kb.pressed('left') || kb.presses('space')) {
      meatMan.image = idle
      walkSound.pause()
    }
  }
  if (meatMan.colliding(floor) > 0 || meatMan.colliding(crate) > 0 || meatMan.colliding(pan)) {
    if (kb.pressing('space')) {
      meatMan.image = crouchImg
      crouch = true
      if (kb.presses('left')) {
        meatMan.scale.x = -1
      } else if (kb.presses('right')) {
        meatMan.scale.x = 1
      }
    }
    if (kb.pressed('space') && dead == false || meatMan.colliding(pan) && kb.pressed('space')) {
      meatMan.image = idle
      crouch = false
      meatMan.velocity.y = -7
      jumpSound.play()
    }
  } else {
    walkSound.pause()
  }
}

function shooting() {
  if (mouse.presses() || won2) {
    let meat = new meatball.Sprite()
    shootSound.play()
    if (meatMan.scale.x === -1) {
      meat.x = meatMan.x - 60
      meat.velocity.x = -5
    } else {
      meat.x = meatMan.x + 60
      meat.velocity.x = 5
    }
    meat.velocity.y = -7
    meat.y = meatMan.y - 30
    if (won2 === false) {
      scaleF -= 0.005
      meatMan.w -= 1.8
      meatMan.h -= 2
    }
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
  if (meatMan.velocity.x == 0 && meatMan.velocity.y == 0) {
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
}

function spoonMove() {
  if (spoon[0].x <= 470 || (spoon[0].collides(spoon) && flip[0] == -1)) {
    flip[0] = 1
    spoon[0].img.scale.x = -1
  } else if (spoon[0].x >= 1500 || (spoon[0].collides(spoon) && flip[0] == 1)) {
    flip[0] = -1
  }
  spoon[0].x+= 2*flip[0]

  if (spoon[1].x <= 470 || (spoon[1].collides(spoon) && flip[1] == -1)) {
    flip[1] = 1
    spoon[1].img.scale.x = -1
  } else if (spoon[1].x >= 1500 || (spoon[1].collides(spoon) && flip[1] == 1)) {
    flip[1] = -1
  }
  spoon[1].x+= 2*flip[1]

}

function groundMaker(x, y, w, h) {
  for (let i = 0; i<= w; i++) {
      let ground = new floor.Sprite(x + 101*i, y)
      ground.layer = 1
      for (let l = 0; l <= h; l++) {
        let uFloor = new uGround.Sprite(x + 101*i, y + 105 + 105*l)
      }
    }
}

function menu() {
  camera.on()
  background('#d1e8eb')
  image(skyImg, -500, 0, 1408, 792)
  image(fMountImg, -500, 0, 1408, 792)
  image(cMountImg, -500, 0, 1408, 792)
  image(fCloudImg, -500, 0, 1408, 792)
  image(mCloudImg, -500, 0, 1408, 792)
  image(cCloudImg, -500, 0, 1408, 792)
  image(skyImg, 908, 0, 1408, 792)
  image(fMountImg, 908, 0, 1408, 792)
  image(cMountImg, 908, 0, 1408, 792)
  image(fCloudImg, 908, 0, 1408, 792)
  image(mCloudImg, 908, 0, 1408, 792)
  image(cCloudImg, 908, 0, 1408, 792)
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
    for (let i = 0; i<= 12; i++) {
      let ground = new floor.Sprite(101*i, 700)
      ground.layer = 1
      for (let l = 0; l <= 5; l++) {
        let uFloor = new uGround.Sprite(101*i, 805 + 105*l)
      }
    }
    set[0] = true
  }
  image(titleImg, 340, -80, 500, 500)
  if (black.opacity > 0.25 && fade === false) {
    black.opacity -= 0.005
  } else {
    fade = true
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
        meatTheme.pause()
        level[0] = false
        enlarge = 0
        spacer = 0
        selector = false
        floor.remove()
        uGround.remove()
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
  if (won2 === false && won3 == false) {
for (let i = 0; i <= 5632; i+=1408) {
        image(skyImg, 0.1* (140 - meatMan.pos.x) + i, 0.5*(600 - meatMan.pos.y) - 100, 1408, 792)
        image(fMountImg, 0.2* (140 - meatMan.pos.x) + i, 0.5*(600 - meatMan.pos.y), 1408, 792)
        image(cMountImg, 0.3* (140 - meatMan.pos.x) + i, 0.5*(600 - meatMan.pos.y), 1408, 792)
        image(fCloudImg, 0.4* (140 - meatMan.pos.x) + i, 0.5*(600 - meatMan.pos.y), 1408, 792)
        image(mCloudImg, 0.4* (140 - meatMan.pos.x) + i, 0.5*(600 - meatMan.pos.y), 1408, 792)
        image(cCloudImg, 0.5* (140 - meatMan.pos.x) + i, 0.5*(600 - meatMan.pos.y), 1408, 792)
    }
  image(skyImg, 0.1* (140 - meatMan.pos.x) - 1408, 0.5*(600 - meatMan.pos.y) - 100, 1408, 792)
  image(fMountImg, 0.2* (140 - meatMan.pos.x) - 1408, 0.5*(600 - meatMan.pos.y), 1408, 792)
  image(cMountImg, 0.3* (140 - meatMan.pos.x) - 1408, 0.5*(600 - meatMan.pos.y), 1408, 792)
  image(fCloudImg, 0.4* (140 - meatMan.pos.x) - 1408, 0.5*(600 - meatMan.pos.y), 1408, 792)
  image(mCloudImg, 0.4* (140 - meatMan.pos.x) - 1408, 0.5*(600 - meatMan.pos.y), 1408, 792)
  image(cCloudImg, 0.5* (140 - meatMan.pos.x) - 1408, 0.5*(600 - meatMan.pos.y), 1408, 792)
  }
  if (black.opacity > 0.005) {
    black.opacity -= 0.005
  }
  if (set[0]) {
    for (let i = 0; i < 10; i++) {
      spoonDead[i] = false
    }
    pan = new Sprite ([[-1200, 660], [-800, 660], [-750, 610], [-770, 610], [-800, 640], [-1200, 640], [-1230, 610], [-1250, 610], [-1200, 660]])
    pan.collider = "k"
    pan.img = panImg
    pan.img.scale = 2
    pan.img.offset.x = 120
    pan.img.offset.y = 30
    pan.opacity = 0
    pan.bounciness = -100
    set[0] = false
    dead = false
    tree1 = new tree.Sprite(850, 503)
    tree2 = new tree.Sprite(3500, 803)
    tree3 = new tree.Sprite(6150, 903)
    tree4 = new tree.Sprite(9750, 903)
    sign1 = new sign.Sprite(-3, 470)
    sign1.img = signImg[0]
    sign2 = new sign.Sprite(0, 600)
    sign2.img = signImg[1]
    sign3 = new sign.Sprite(1400, 600)
    sign3.img = signImg[2]
    sign4 = new sign.Sprite(4000, 903)
    sign4.img = signImg[3]
    farmSign = new sign.Sprite(10100, 980)
    farmSign.img = farmImg
    farmSign.img.scale = 1.2
    meatPipe = new Sprite([[10500, 1084], [10750, 1084], [10750, 984], [10700, 884], [10600, 734], [10500, 684], [10305, 654], [10600, 739], [10700, 889], [10745, 989], [10550, 989], [10305, 959], [10500, 1084]])
    meatPipe.img = pipeImg
    meatPipe.scale = 0.8
    meatPipe.rotationLock = true
    meatPipe.collider = "s"
    meatPipe.layer = 1000
    groundMaker(0, 700, 15, 5)
    groundMaker(2000, 600, 8, 5)
    groundMaker(3300, 1000, 8, 5)
    groundMaker(4500, 800, 5, 5)
    groundMaker(5400, 900, 5, 5)
    groundMaker(6000, 1100, 2, 5)
    groundMaker(6500, 960, 2, 5)
    groundMaker(7000, 820, 20, 5)
    groundMaker(9000, 1000, 4, 1)
    groundMaker(9700, 1100, 15, 5)
    let p = new crate.Sprite(400, 608)
    spoo = new spoon.Sprite(650, 580)
    spoo2 = new spoon.Sprite(900, 580)
    spoon.velocity.x = -2
    black2 = new Sprite(9500, 1500, 5000, 5000, "n")
    black2.layer = 100000000
    black2.color = "black"
    black2.opacity = 0
    black3 = new Sprite(0, 1000, 5000, 5000, "n")
    black3.layer = 100000000
    black3.color = "black"
    black3.opacity = 0
  }

  if (spoonDelay == 18) {
    if (spoonImgCount === 3) {
      spoonImgCount = 0
    } else {
      spoonImgCount++
    }
    spoonDelay = 0
    spoon[0].img = spoonImg[spoonImgCount]
    spoon[1].img = spoonImg[spoonImgCount]
  } else {
    spoonDelay++
  }


  if (meatMan.collides(spoon[0]) && meatMan.y + 70 < spoon[0].y) {
    spoonDead[0] = true
    meatMan.velocity.y = -5
  } else if (meatMan.collides(spoon[0]) && dead == false) {
    meatMan.velocity.y = -5
    dead = true
    gameOver = new Sprite()
    gameOver.collider = "n"
    gameOver.img = gameOverImg
    gameOver.layer = 9999999999
    gameOver.opacity = 0.9
  }
  if (meatMan.collides(spoon[1]) && meatMan.y + 70 < spoon[1].y) {
    spoonDead[1] = true
    meatMan.velocity.y = -5
  } else if (meatMan.collides(spoon[1]) && dead == false) {
    meatMan.velocity.y = -5
    dead = true
    gameOver = new Sprite()
    gameOver.collider = "n"
    gameOver.img = gameOverImg
    gameOver.layer = 9999999999
    gameOver.opacity = 0.9
  }

  if (meatball.collides(spoon[0])) {
    spoonDead[0] = true
  }
  if (meatball.collides(spoon[1])) {
    spoonDead[1] = true
  }
  for (let i = 0; i < 10; i++) {
    if (spoonDead[i]) {
        spoon[i].collider = "n"
        spoon[i].img = ""
      }
  }

  if (meatMan.collides(meatPipe)) {
    won = true
  }

  if (won) {
    win()
  }
  meatPipe.image.offset.x = 5
  meatPipe.image.offset.y = -70
}

function two() {
//dead = false
}

function three() {
//dead = false
}

function four() {
//dead = false
}

function five() {
//dead = false
}

function six() {
//dead = false
}

function win() {
  if (set[1]) {
    fading = true
    fade = false
    set[1] = false
  }
  if (fade === false) {
    if (fading) {
      if (black2.opacity < 1){
        black2.opacity += 0.02
        black3.opacity += 0.02
      } else if (black2.opacity >= 1) {
        fading = false
        won2 = true
        meatMan.pos.x = -1000
        meatMan.pos.y = 500
        camera.pos = meatMan.pos
        meatMan.pos.y = -200
        fakePipe = new Sprite(-1005, 100, 100, 100, "n")
        fakePipe.img = endPipeImg
        fakePipe.img.scale = 0.7
        fakePipe.layer = 4
        groundMaker(-1900, 700, 19, 2)
        meatMan.rotationLock = false
        pan.opacity = 1
        fading = false
      }
    }
  }
  if (black2.opacity > 0.005) {
      black2.opacity -= 0.005
      black3.opacity -= 0.005
    }
  if (won2) {
    image(skyImg, -500, 0, 1408, 792)
    image(fMountImg, -500, -100, 1408, 792)
    image(cMountImg, -500, -100, 1408, 792)
    image(fCloudImg, -500, -100, 1408, 792)
    image(mCloudImg, -500, -100, 1408, 792)
    image(cCloudImg, -500, -100, 1408, 792)
    image(skyImg, 908, 0, 1408, 792)
    image(fMountImg, 908, -100, 1408, 792)
    image(cMountImg, 908, -100, 1408, 792)
    image(fCloudImg, 908, -100, 1408, 792)
    image(mCloudImg, 908, -100, 1408, 792)
    image(cCloudImg, 908, -100, 1408, 792)
    black3.pos = camera.pos

    if (meatMan.colliding(pan)) {
      meatMan.velocity.y = -2
      meatMan.img = openMouthImg
    }
  }
}