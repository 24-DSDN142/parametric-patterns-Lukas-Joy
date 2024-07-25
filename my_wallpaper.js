//your parameter variables go here!
let length = 50; //Influence strength for the Bezier curves
let AngleMin = 45;
let AngleMax = 135;
let Circles = false; //true or false 
let Grid = true;
let SeedRandom = false;
let Seed = 10;
let ReadyToPrint = false;
let DrawInfluenceLines = false;


function setup_wallpaper(pWallpaper) {
  if (Grid = true){pWallpaper.output_mode(GRID_WALLPAPER);}
  else 
  {pWallpaper.output_mode(DEVELOP_GLYPH);
  }

  pWallpaper.resolution(FIT_TO_SCREEN);

  if (ReadyToPrint === true) {
    pWallpaper.show_guide(false);
  }
  else {
    pWallpaper.show_guide(true); 
  }

  //Random Seed Option
  if (SeedRandom = true){
  SeedPick = random(0,100)
  }
  else{
  SendPick = Seed
  }

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //Set seed for consistant randomness lines
  randomSeed(SeedPick);

  //Set random angles
  let angleT1B1 = random(AngleMin, AngleMax); // Random angle between AngleMin and AngleMax degrees
  let angleT2B2 = random(AngleMin, AngleMax); // Random angle between AngleMin and AngleMax degrees
  let angleT3B3 = random(AngleMin, AngleMax); // Random angle between AngleMin and AngleMax degrees
  let angleL1R1 = random(AngleMin, AngleMax); // Random angle between AngleMin and AngleMax degrees
  let angleL2R2 = random(AngleMin, AngleMax); // Random angle between AngleMin and AngleMax degrees
  let angleL3R3 = random(AngleMin, AngleMax); // Random angle between AngleMin and AngleMax degrees

 //Co-ordinate Variables
  let x1T1B1 = 100/3; //Top Bottom Collumn 1
  let x1T2B2 = 100; //Top Bottom Collumn 2
  let x1T3B3 = 200-(100/3); //Top Bottom Collumn 3
  let y1T = 0; //Top Edge
  let y1B = 200; //Bottom Edge
  let x1L = 0; //Left Edge
  let x1R = 200; //Right Edge
  let y1L1R1 = 100/3; //Left Right Collumn 1
  let y1L2R2 = 100; //Left Right Collumn 2
  let y1L3R3 = 200-(100/3); //Left Right Collumn 3

//Circles
  if (Circles === true) {
  //Top
    circle(x1T1B1, y1T, 10); //Top Circle 1
    circle(x1T2B2, y1T, 20); //Top Circle 2
    circle(x1T3B3, y1T, 30); //Top Circle 3
  //Bottom
    circle(x1T1B1, y1B, 10); //Bottom Circle 1
    circle(x1T2B2, y1B, 20); //Bottom Circle 2
    circle(x1T3B3, y1B, 30); //Bottom Circle 3
  //Left
    circle(x1L, y1L1R1, 10); //Left Circle 1
    circle(x1L, y1L2R2, 20); //Left Circle 2
    circle(x1L, y1L3R3, 30); //Left Circle 3
  //Right
    circle(x1R, y1L1R1, 10); //Right Circle 1
    circle(x1R, y1L2R2, 20); //Right Circle 2
    circle(x1R, y1L3R3, 30); //Right Circle 3
  }

//Influence Lines
  //Top1 x1T1B1, y1T
    //Calculation
      let x2T1 = x1T1B1 + length * cos(angleT1B1);
      let y2T1 = y1T + length * sin(angleT1B1);
    //Draw Line
    if (DrawInfluenceLines === true){
    line(x1T1B1, y1T, x2T1, y2T1);
    }

  //Top2 x1T2B2, y1T
    //Calculation
    let x2T2 = x1T2B2 + length * cos(angleT2B2);
    let y2T2 = y1T + length * sin(angleT2B2);
    //Draw Line
    if (DrawInfluenceLines === true){
    line(x1T2B2, y1T, x2T2, y2T2);
    }
  //Top3 x1T3B3, y1T
    //Calculation
    let x2T3 = x1T3B3 + length * cos(angleT3B3);
    let y2T3 = y1T + length * sin(angleT3B3);
    //Draw Line
    if (DrawInfluenceLines === true){
    line(x1T3B3, y1T, x2T3, y2T3);  
    }

  //Bottom1 x1T1B1, y1B
    //Calculation
      let x2B1 = x1T1B1 - length * cos(angleT1B1);
      let y2B1 = y1B - length * sin(angleT1B1);
    //Draw Line
    if (DrawInfluenceLines === true){
    line(x1T1B1, y1B, x2B1, y2B1);
    }

  //Bottom2 x1T2B2, y1B
    //Calculation
    let x2B2 = x1T2B2 - length * cos(angleT2B2);
    let y2B2 = y1B - length * sin(angleT2B2);
    //Draw Line
    if (DrawInfluenceLines === true){
    line(x1T2B2, y1B, x2B2, y2B2);
    }

  //Bottom2 x1T3B3, y1B
    //Calculation
    let x2B3 = x1T3B3 - length * cos(angleT3B3);
    let y2B3 = y1B - length * sin(angleT3B3);
    //Draw Line
    if (DrawInfluenceLines === true){
    line(x1T3B3, y1B, x2B3, y2B3);  
    }

  //Left1 x1L, y1L1R1
    //Calculation
    let x2L1 = x1L + length * cos(angleL1R1 - 90);
    let y2L1 = y1L1R1 + length * sin(angleL1R1 - 90);
    //Draw Line
    if (DrawInfluenceLines === true){
    line(x1L, y1L1R1, x2L1, y2L1);
    }

  //Left2 x1L, y1L2R2
    //Calculation
    let x2L2 = x1L + length * cos(angleL2R2 - 90);
    let y2L2 = y1L2R2 + length * sin(angleL2R2 - 90);
    //Draw Line
    if (DrawInfluenceLines === true){
    line(x1L, y1L2R2, x2L2, y2L2);
    }

  //Left3 x1L, y1L3R3
    //Calculation
    let x2L3 = x1L + length * cos(angleL3R3 - 90);
    let y2L3 = y1L3R3 + length * sin(angleL3R3 - 90);
    //Draw Line
    if (DrawInfluenceLines === true){
    line(x1L, y1L3R3, x2L3, y2L3);
    }

  //Right1 x1R, y1L1R1
    //Calculation
    let x2R1 = x1R + length * cos(angleL1R1 + 90);
    let y2R1 = y1L1R1 + length * sin(angleL1R1 + 90);
    //Draw Line
    if (DrawInfluenceLines === true){
    line(x1R, y1L1R1, x2R1, y2R1);
    }

  //Right2 x1R, y1L2R2
    //Calculation
    let x2R2 = x1R + length * cos(angleL2R2 + 90);
    let y2R2 = y1L2R2 + length * sin(angleL2R2 + 90);
    //Draw Line
    if (DrawInfluenceLines === true){
    line(x1R, y1L2R2, x2R2, y2R2);
    }

  //Right3 x1R, y1L3R3
    //Calculation
    let x2R3 = x1R + length * cos(angleL3R3 + 90);
    let y2R3 = y1L3R3 + length * sin(angleL3R3 + 90);
    //Draw Line
    if (DrawInfluenceLines === true){
    line(x1R, y1L3R3, x2R3, y2R3);
    }

  let points = [
    [x1T1B1, y1T, x2T1, y2T1, x1T1B1, y1B, x2B1, y2B1],//Top Bottom 1,
    [x1T2B2, y1T, x2T2, y2T2, x1T2B2, y1B, x2B2, y2B2],//Top Bottom 2,
    [x1T3B3, y1T, x2T3, y2T3, x1T2B2, y1B, x2B3, y2B2],//Top Bottom 3,
    [x1L, y1L1R1, x2L1, y2L1, x1R, y1L1R1, x2R1, y2R1],//Left Right 1,
    [x1L, y1L2R2, x2L2, y2L2, x1R, y1L2R2, x2R2, y2R2],//Left Right 2
    [x1L, y1L3R3, x2L3, y2L3, x1R, y1L3R3, x2R3, y2R3],//Left Right 3
  ]
  noFill();

  for (let x = 0; x < points.length - 1; x++) {
    let [x1, y1, x2, y2, x3, y3, x4, y4] = points[x];
    let [nextX1, nextY1, nextX2, nextY2, nextX3, nextY3, nextX4, nextY4] = points[x + 1];

    bezier(x1, y1, x2, y2, nextX4, nextY4, nextX3, nextY3);

    let [lastX1, lastY1, lastX2, lastY2, lastX3, lastY3, lastX4, lastY4] = points[points.length - 1];
    let [firstX1, firstY1, firstX2, firstY2, firstX3, firstY3, firstX4, firstY4] = points[0];

    bezier(lastX4, lastY4, lastX3, lastY3, firstX2, firstY2, firstX1, firstY1);
  }
} 
