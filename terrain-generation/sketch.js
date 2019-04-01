let cols, rows, w, h, terrain;
let scale = 20

function setup() {
  // put setup code here
  createCanvas(600, 600, WEBGL)
  w = 600
  h = 600
  cols = w / scale
  rows = h / scale
  terrain = []

  for(let y = 0; y < rows; y++) {
    terrain[y] = []
    for(let x = 0; x < cols; x++) {
      terrain[y][x] = random(-10, 10)
    }
  }

}

function draw() {
  // put drawing code here
  background(0)
  stroke(255)
  noFill()

  rotateX(PI/3)
  translate(-w/2, -h/2)
  frameRate(1)

  for (let y = 0; y < rows; y++) {
    beginShape(TRIANGLE_STRIP)
    for (let x = 0; x < cols; x++) {
      vertex(x*scale, y*scale, terrain[x][y])
      vertex(x*scale, (y+1)*scale)
    }
    endShape()
  }
  
}