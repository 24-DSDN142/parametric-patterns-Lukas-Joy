function setup() {
  createCanvas(200, 200); // this sets the size of the area in which we can draw things. We call it a canvas
  background(170);
  
  let points = [
    [100/3, 0, 100/3, 200], [100, 0, 100, 200], [200-(100/3), 0, 200-(100/3), 200], // Four points on the top/bottom edge
    [200, 100/3, 0, 100/3], [200, 100, 0, 100], [200, 200-(100/3), 0, 200-(100/3)] // Four points on the right/left edge
  ];
  
  // Draw circles at each point
  for (let x = 0; x < points.length; x++)  {
    circle(points[x][0], points[x][1], 10);
    circle(points[x][2], points[x][3], 10);
  }

  // Shuffle the points array
  points = shuffle(points);

  // Draw lines between the shuffled points
  for (let x = 0; x < points.length - 1; x++) {
    line(points[x][2], points[x][3], points[x+1][0], points[x+1][1]);
  }
  line(points[points.length - 1][2], points[points.length - 1][3], points[0][0], points[0][1]);

  // Draw mirrored lines
  for (let x = 0; x < points.length; x++) {
    let [x1, y1, x2, y2] = points[x];
    drawMirroredLines(x1, y1, x2, y2);
  }

  // Draw Bezier curves
  for (let x = 0; x < points.length - 1; x++) {
    let [x1, y1, x2, y2] = points[x];
    let [nextX1, nextY1, nextX2, nextY2] = points[x + 1];
    drawBezierCurve(x2, y2, nextX1, nextY1);
  }
  let [lastX1, lastY1, lastX2, lastY2] = points[points.length - 1];
  let [firstX1, firstY1, firstX2, firstY2] = points[0];
  drawBezierCurve(lastX2, lastY2, firstX1, firstY1);
}

function drawMirroredLines(x1, y1, x2, y2) {
  let angle = random((PI/4), (3*PI/4)); // Random angle between 0 and PI (180 degrees)
  let length = 20; // Length of the short line

  // Calculate the end points for the first line
  let x1_end = x1 + length * cos(angle);
  let y1_end = y1 + length * sin(angle);

  // Calculate the end points for the mirrored line
  let x2_end = x2 + length * cos(angle + PI);
  let y2_end = y2 + length * sin(angle + PI);

  // Draw the lines
  line(x1, y1, x1_end, y1_end);
  line(x2, y2, x2_end, y2_end);
}

function drawBezierCurve(x1, y1, x2, y2) {
  let controlX1 = (x1 + x2) / 2;
  let controlY1 = y1;
  let controlX2 = (x1 + x2) / 2;
  let controlY2 = y2;

  bezier(x1, y1, controlX1, controlY1, controlX2, controlY2, x2, y2);
}