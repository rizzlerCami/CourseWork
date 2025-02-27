let meatMan
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
let muteImg = ["", ""]
let mute
let sound = true
let levelSelectImg
let enlarge = 0
let lockImg
let levelClick = ["", "", "", "", "", ""]
let spacer = 0
let black
let wind
let soundDelay = 0
let openingScene = true

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
  muteImg[0] = loadImage('sound.png')
  muteImg[1] = loadImage('noSound.png')
  levelSelectImg = loadImage('levelSelect.png')
  lockImg = loadImage('lock.png')
  wind = createAudio('wind.mp3')
}

function setup() {
  new Canvas(1200, 1000)

  black = new Sprite(0, 0, 3000, 5000, "n")
  black.layer = 100
  black.color = "black"
  world.gravity.y = 9.8
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

  mute = new Sprite(1130, 70, 83, 83, "k")
  mute.layer = 20
  mute.img = muteImg[0]

  levelClick = new Group()
  levelClick.layer = 5

  wind.play()
}

function draw() {
  clear()

  if (level[0]) {
    menu()
  } else {
    if (level[1]) {
      one()
    } else if (level[1] && level[2]) {
      two()
    } else if (level[1] && level[2] && level[3]) {
      three()
    } else if (level[1] && level[2] && level[3] && level[4]) {
      four()
    } else if (level[1] && level[2] && level[3] && level[4] && level[5]) {
      five()
    } else {
      six()
    }
    levelClick.remove()
    movement()
    shooting()
  }
  if (mute.mouse.presses()) {
    if (sound) {
      mute.img = muteImg[1]
      sound = false
    } else {
      mute.img = muteImg[0]
      sound = true
    }
  }

  blinking()
  floor.image.scale = 0.3
  floor.image.offset.y = -30
  floor.collider = "s"
  uGround.image.scale = 0.3
  uGround.image.offset.y = -30
  uGround.collider = "s"
  meatMan.image.scale = scaleF
  meatMan.image.offset.y = -30
  mute.img.scale = 0.2
}

function movement() {

}

function shooting() {

}

function blinking() {
  if (blinkDelay[0] === 300) {
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

function fadeOut() {
  black = new Sprite(0, 0, 1500, 1500, "n")
  black.layer = 100
  black.opacity = 
  allSprites.remove()
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
      for (let i = 0; i<= 20; i++) {
        let ground = new floor.Sprite(101*i, 700)
        ground.layer = 1
        for (let l = 0; l <= 2; l++) {
          let uFloor = new uGround.Sprite(101*i, 805 + 105*l)
        }
      }
      set[0] = true
    }
    image(titleImg, 340, -80, 500, 500)
    if (black.opacity > 0.25) {
      black.opacity -= 0.006
    }
    if (playButton.mouse.pressing()) {
      playButton.img = playImg[1]
    } else {
      playButton.img = playImg[0]
    }
    if (playButton.mouse.pressed()) {
      selector = true
    }
    if (exit.mouse.pressing()) {
      exit.img = exitImg[1]
      //terminate
    } else {
      exit.img = exitImg[0]
    }
    if (controls.mouse.pressing()) {
      controls.img = controlsImg[1]
      controls.image.offset.x = 107
      controls.image.offset.y = 144
    } else {
      controls.img = controlsImg[0]
    }
    playButton.image.scale = 0.6
    exit.image.scale = 0.6
    controls.image.scale = 0.86
  
    if (selector) {
      playButton.remove()
      exit.remove()
      controls.remove()
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
      if (set[1]) {
        for (let i = 0; i <= 5; i++) {
          if (levelClick[i].mouse.presses() && levelClick[i].img != lockImg) {
            for (let l = i + 1; l >= 1; l--) {
              level[l] = true
            }
            level[0] = false
          }
        }
      }
    }
}

function one() {
  background('#d1e8eb')
  image(skyImg, 0, 0, 1408, 792)
  image(fMountImg, 0, 0, 1408, 792)
  image(cMountImg, 0, 0, 1408, 792)
  image(fCloudImg, 0, 0, 1408, 792)
  image(mCloudImg, 0, 0, 1408, 792)
  image(cCloudImg, 0, 0, 1408, 792)
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