let cols, rows, w, h, terrain;
let scale = 20
let flying = 0

function setup() {
  // put setup code here
  createCanvas(600, 600, WEBGL)
  w = 1200
  h = 1000
  cols = w / scale
  rows = h / scale
  terrain = []

}

function draw() {
  // put drawing code here
  flying -= 0.6

  let xoff = 0
  for(let x = 0; x < cols; x++) {
    terrain[x] = []
    let yoff = flying
    for(let y = 0; y < rows; y++) {
      terrain[x][y] = map(noise(xoff,yoff), 0, 1, -20, 40)
      yoff += 0.4
    }
    xoff += 0.4
  }

  background(25, 190, 210)
  stroke(130)
  fill(125,210,25)
  // noFill()

  rotateX(PI/3)
  translate(-w/2, -h/2)
  frameRate(60)

  for (let y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP)
    for (let x = 0; x < cols; x++) {
      vertex(x*scale, y*scale, terrain[x][y])
      vertex(x*scale, (y+1)*scale, terrain[x][y+1])
    }
    endShape()
  }

}