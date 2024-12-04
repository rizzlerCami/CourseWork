let smiley;
function setup() {
    new Canvas(500, 120);
    let smileText = `
..yyyyyy
.yybyybyy
yyyyyyyyyy
yybyyyybyy
.yybbbbyy
..yyyyyy`;
    smiley = new Sprite();
    smiley.img = spriteArt(smileText, 32);
}
function draw() {
  noLoop();
}