let directions = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]];
let raster = [[1, 0, 0, 0, 0], [1, 1, 1, 0, 0], [0, 0, 1, 0, 0], [1, 1, 0, 1, 0], [1, 0, 0, 0, 1]];

let rows = 5;
let cols = 5;
let radius = 10;
let margin = 5;

function fxrand() {
    return Math.random();
}

function setup() {
    randomSeed(int(fxrand() * 987654321));
    let w = min(windowWidth, windowHeight);
    createCanvas(w, w);
    margin = 0.1 * width;
    radius = (width - 2 * margin) / cols / 2;

    colorMode(HSL);
    background(39, 45, 90);
    noStroke();
    fill(269, 61, 18, 0.1);

    noLoop();

    rectMode(RADIUS);
    angleMode(DEGREES);
}

function draw_raster(raster) {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let x = margin + radius + col * 2 * radius;
            let y = margin + radius + row * 2 * radius;

            if (raster[row][col] == 1) {
                circle(x, y, 2 * radius);

                if (col + 1 < cols && raster[row][col + 1] == 1) {
                    rect(x + radius, y, radius);
                }

                if (row + 1 < rows && raster[row + 1][col] == 1) {
                    rect(x, y + radius, radius);
                }

                if (row + 1 < rows && col + 1 < cols && raster[row + 1][col + 1] == 1) {
                    push();
                    translate(x, y);
                    beginShape();
                    vertex(0, radius);
                    for (let angle = -90; angle <= 0; angle += 1) {
                        vertex(radius * cos(angle), radius * (2 + sin(angle)));
                    }
                    vertex(radius, 2 * radius);
                    vertex(2 * radius, radius);
                    for (let angle = 90; angle <= 180; angle += 1) {
                        vertex(radius * (2 + cos(angle)), radius * (0 + sin(angle)));
                    }
                    vertex(radius, 0);
                    endShape();
                    pop();
                }

                if (row + 1 < rows && col - 1 >= 0 && raster[row + 1][col - 1] == 1) {
                    push();
                    translate(x, y);
                    beginShape();
                    vertex(-radius, 0);
                    for (let angle = 0; angle <= 90; angle += 1) {
                        vertex(radius * (-2 + cos(angle)), radius * (0 + sin(angle)));
                    }
                    vertex(-2 * radius, radius);
                    vertex(-radius, 2 * radius);
                    for (let angle = 180; angle <= 270; angle += 1) {
                        vertex(radius * (0 + cos(angle)), radius * (2 + sin(angle)));
                    }
                    vertex(0, radius);
                    endShape();
                    pop();
                }
            }
        }
    }
}

function create_raster() {
    let newRaster = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

    for (let i = 0; i < rows * cols / 4; i++) {
        let row = Math.floor(fxrand() * rows);
        let col = Math.floor(fxrand() * cols);
        newRaster[row][col] = 1;
    }

    return newRaster;
}

function draw() {
    let colors = [color('#F1E9DA'), color('#2E294E'), color('#541388'), color('#FFD400'), color('#D90368')];

    for (let c of colors) {
        fill(c);
        stroke(c);
        let newRaster = create_raster();
        draw_raster(newRaster);
    }
}
