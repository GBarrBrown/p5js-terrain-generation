let cols, rows, w, h, terrain;
let scale = 20

function setup() {
  // put setup code here
  createCanvas(600, 600, WEBGL)
  w = 600
  h = 600
  cols = w / scale
  rows = h / scale
  terrain = [...Array(cols)].map(() => Array(rows).fill(random(-10,10))) // 2d Array
  console.log(terrain)
}

function draw() {
  // put drawing code here
  background(0)
  // translate(-(w/2), -(w/2)) // WEBGL makes (0,0) centered. change to top left 
  stroke(255)
  noFill()

  rotateX(PI/3)
  translate(-w/2, -h/2)
  frameRate(1)

  for (let y = 0; y < rows; y++) {
    beginShape(TRIANGLE_STRIP)
    for (let x = 0; x < cols; x++) {
      vertex(x*scale, y*scale, random(-10, 10))
      vertex(x*scale, (y+1)*scale)
      // rect(x*scale, y*scale, scale, scale)
    }
    endShape()
  }
}