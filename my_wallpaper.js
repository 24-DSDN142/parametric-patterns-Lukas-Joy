// Your parameter variables go here!
let CanvasX = 200;
let CanvasY = 200;
let Grid = true;
let ReadyToPrint = false;
let BorderType = 2; //either 1 Spirals or 2 SnakesNPillars or 3 Labyrinth or 4 no borders
let BorderThickness = 50
let BorderColour1 = (0);
let BorderColour2 = (135);
let BorderColour3 = (255);
let BackgroundType = 3; //
let BackgroundVariation = 3;  //
let BackgroundScale = 40;
let BackgroundFlipHorizontal = false;
let BackgroundFlipVertical = false;
let BackgroundColour1 = (0);
let BackgroundColour2 = (125);
let BackgroundColour3 = (255); //not avaliable for all variations

function setup_wallpaper(pWallpaper) {
  if (Grid === true) {
    pWallpaper.output_mode(GRID_WALLPAPER);
  } else {
    pWallpaper.output_mode(DEVELOP_GLYPH);
  }

  pWallpaper.resolution(FIT_TO_SCREEN);

  if (ReadyToPrint === true) {
    pWallpaper.show_guide(false);
  } else {
    pWallpaper.show_guide(true);
  }

  // Grid settings
  pWallpaper.grid_settings.cell_width = CanvasX;
  pWallpaper.grid_settings.cell_height = CanvasY;
  pWallpaper.grid_settings.row_offset = 0;

  //Other Settings
  colorMode(RGB, 255)
}

function wallpaper_background() {
  background(240, 255, 240); // light honeydew green color
}

function my_symbol() {
	if(BackgroundFlipHorizontal === true && BackgroundFlipVertical === false){
		push();
		translate(CanvasX+BackgroundScale,CanvasY)
		rotate(180);
		createBackground(BackgroundType, BackgroundVariation, BackgroundScale);
		pop();
	}
	if(BackgroundFlipHorizontal === false && BackgroundFlipVertical === true){
		push();
		translate(CanvasX,-BackgroundScale)
		rotate(90);
		createBackground(BackgroundType, BackgroundVariation, BackgroundScale);
		pop();
	}
	if(BackgroundFlipHorizontal === true && BackgroundFlipVertical === true){
		push();
		translate(CanvasX+BackgroundScale,CanvasY)
		rotate(180);
		translate(CanvasX+BackgroundScale,-BackgroundScale)
		rotate(90);
		createBackground(BackgroundType, BackgroundVariation, BackgroundScale);
		pop();
	}
	if(BackgroundFlipHorizontal === false && BackgroundFlipVertical === false){
		push();
		translate(-BackgroundScale,0)
		createBackground(BackgroundType, BackgroundVariation, BackgroundScale);
		pop();
	}
	createBorder(BorderType, BorderThickness);

}

function createBorder(Type, BorderThickness){
	if(Type === 1){
		push()
		Border1(0, 0, 0, BorderThickness)
		pop()
		
		push()
		Border1(CanvasX,0,90,BorderThickness)
		pop()

		push()
		Border1(CanvasX,CanvasY,180,BorderThickness)
		pop()

		push()
		Border1(0,CanvasY,270,BorderThickness)
		pop()
		
		push()
		Spiral(0, BorderThickness)
		Spiral(8 * BorderThickness / 9, BorderThickness)
		pop()
	}
	if(Type === 2){
		push()
		Border2(0, 0, 0, BorderThickness)
		pop()
		
		push()
		Border2(CanvasX,0,90,BorderThickness)
		pop()

		push()
		Border2(CanvasX,CanvasY,180,BorderThickness)
		pop()

		push()
		Border2(0,CanvasY,270,BorderThickness)
		pop()
		
		push()
		SnakesNPillars(0, BorderThickness)
		SnakesNPillars(16*BorderThickness/17, BorderThickness)

		pop()
	}
	if(Type === 3){
		push()
		Border3(0, 0, 0, BorderThickness)
		pop()
		
		push()
		Border3(CanvasX,0,90,BorderThickness)
		pop()

		push()
		Border3(CanvasX,CanvasY,180,BorderThickness)
		pop()

		push()
		Border3(0,CanvasY,270,BorderThickness)
		pop()
		
		push()
		Labyrinth(0, BorderThickness)
		pop()
	}
}

function createBackground(Type, Variation, Scale){
	if(Type === 1){
		if(Variation === 1){
			Background1(1, Scale);
		}
		if(Variation === 2){
			Background1(2, Scale);
		}
		if(Variation === 3){
			Background1(3, Scale);
		}
	}
	if(Type === 2){
		if(Variation === 1){
			Background2(1, Scale);
		}
		if(Variation === 2){
			Background2(2, Scale);
		}
		if(Variation === 3){
			Background2(3, Scale);
		}
	}
	if(Type === 3){
		if(Variation === 1){
			Background3(1, Scale);
		}
		if(Variation === 2){
			Background3(2, Scale);
		}
		if(Variation === 3){
			Background3(3, Scale);
		}
	}

}

function Border1(OriginX, OriginY, Direction, BorderThickness){
	translate(OriginX, OriginY)
	rotate(Direction);
	let Offset = 8 * BorderThickness / 9;
	Spiral(0,BorderThickness);
	let x = 0;
	while(x <(CanvasX-2*BorderThickness)) {
		Spiral(Offset,BorderThickness);
		x += Offset
	}

}

function Spiral(Offset, BorderThickness){
	translate(Offset, 0);
	let SquareSize = BorderThickness / 9;
	let Squares = [
		[2, 2, 2, 2, 2, 2, 2, 2],
		[1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 1, 1, 1, 0, 1],
        [0, 1, 0, 0, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 0, 0, 1],
        [0, 1, 0, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
		[2, 2, 2, 2, 2, 2, 2, 2]
	];

	for (let row = 0; row < Squares.length; row ++){
		for (let column = 0; column < Squares[row].length; column ++){
			if(Squares[row][column] === 1){
				fill(BorderColour1);
			}
			if(Squares[row][column] === 0){
				fill(BorderColour3);
			}
			if(Squares[row][column] === 2){
				fill(BorderColour2);
			}
			square(column*SquareSize, row*SquareSize, SquareSize)
		}
	}
}

function Border2(OriginX, OriginY, Direction, BorderThickness){
	translate(OriginX, OriginY)
	rotate(Direction);
	let Offset = 16 * BorderThickness / 17;
	SnakesNPillars(0,BorderThickness);
	let x = 0;
	while(x <(CanvasX-2*BorderThickness)) {
		SnakesNPillars(Offset,BorderThickness);
		x += Offset
	}

}

function SnakesNPillars(Offset, BorderThickness){
	translate(Offset, 0);
	let SquareSize = BorderThickness / 17;
	let Squares = [
		[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
		[2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1],
		[2,1,0,1,2,1,0,0,0,0,0,0,0,0,0,1],
		[2,1,1,1,2,1,0,1,1,1,1,1,1,1,0,1],
		[2,2,2,2,2,1,0,1,2,2,2,2,2,1,0,1],
		[1,1,1,1,2,1,0,1,2,1,1,1,1,1,1,1],
		[0,0,0,1,2,1,0,1,2,1,0,0,0,0,0,0],
		[1,1,0,1,2,1,0,1,2,1,0,1,1,1,1,1],
		[2,1,0,1,2,1,0,1,2,1,0,1,2,1,0,1],
		[1,1,1,1,1,1,0,1,2,1,0,1,2,1,0,1],
		[0,0,0,0,0,0,0,1,2,1,0,1,2,1,0,0],
		[1,1,1,1,1,1,1,1,2,1,0,1,2,1,1,1],
		[2,1,0,1,2,2,2,2,2,1,0,1,2,2,2,2],
		[2,1,0,1,1,1,1,1,1,1,0,1,2,1,1,1],
		[2,1,0,0,0,0,0,0,0,0,0,1,2,1,0,1],
		[2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1],
		[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
	];

	for (let row = 0; row < Squares.length; row ++){
		for (let column = 0; column < Squares[row].length; column ++){
			if(Squares[row][column] === 1){
				fill(BorderColour1);
			}
			if(Squares[row][column] === 0){
				fill(BorderColour2);
			}
			if(Squares[row][column] === 2){
				fill(BorderColour3);
			}
			square(column*SquareSize, row*SquareSize, SquareSize)
	
		}
	}
}

function Border3(OriginX, OriginY, Direction, BorderThickness){
	translate(OriginX, OriginY)
	rotate(Direction);
	let Offset = 21 * BorderThickness / 9;
	Labyrinth(0,BorderThickness);
	let x = 0;
	while(x <(CanvasX-2*BorderThickness)) {
		Labyrinth(Offset,BorderThickness);
		x += Offset
	}

}

function Labyrinth(Offset, BorderThickness){
	translate(Offset, 0);
	let SquareSize = BorderThickness / 9;
	let Squares = [
		[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0],
		[1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0],
		[1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0],
		[1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
		[1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0],
		[0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
	];

	for (let row = 0; row < Squares.length; row ++){
		for (let column = 0; column < Squares[row].length; column ++){
			if(Squares[row][column] === 1){
				fill(BorderColour1);
			}
			if(Squares[row][column] === 2){
				fill(BorderColour2);
			}
			if(Squares[row][column] === 0){
				fill(BorderColour3);
			}
			square(column*SquareSize, row*SquareSize, SquareSize)
	
		}
	}
}

function Background1(Variation, Scale) {
    translate(Scale, 0);
    for (let row = 0; row < CanvasX / Scale; row++) {
        for (let column = 0; column < CanvasY / Scale; column++) {
			push();
            translate(column * Scale, row * Scale);
			if(Variation === 1){
				PeaksNValleys1(Scale);
			}
			if(Variation === 2){
				PeaksNValleys2(Scale);
			}
			if(Variation === 3){
				PeaksNValleys3(Scale);
			}
			pop();
        }
    }
}

function PeaksNValleys1(Scale){
	let SquareSize = Scale / 4;
	let Squares = [
		[0,0,1,0],
		[0,1,1,1],
		[1,1,0,1],
		[1,0,0,0],
	];

	for (let row = 0; row < Squares.length; row ++){
		for (let column = 0; column < Squares[row].length; column ++){
			if(Squares[row][column] === 1){
				fill(BackgroundColour1);
			}
			if(Squares[row][column] === 0){
				fill(BackgroundColour2);
			}
			if(Squares[row][column] === 2){
				fill(BackgroundColour3);
			}
			square(column*SquareSize, row*SquareSize, SquareSize)
	
		}
	}
}
function PeaksNValleys2(Scale){
	let SquareSize = Scale / 8;
	let Squares = [
		[0,0,0,0,1,0,0,0],
		[0,0,0,1,1,1,0,0],
		[0,0,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1],
		[1,1,1,1,0,1,1,1],
		[1,1,1,0,0,0,1,1],
		[1,1,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0],
	];

	for (let row = 0; row < Squares.length; row ++){
		for (let column = 0; column < Squares[row].length; column ++){
			if(Squares[row][column] === 1){
				fill(BackgroundColour1);
			}
			if(Squares[row][column] === 0){
				fill(BackgroundColour2);
			}
			if(Squares[row][column] === 2){
				fill(BackgroundColour3);
			}
			square(column*SquareSize, row*SquareSize, SquareSize)
	
		}
	}
}

function PeaksNValleys3(Scale){
	let SquareSize = Scale / 8;
	let Squares = [
		[0,0,0,0,1,0,0,0],
		[0,0,0,1,1,1,0,0],
		[0,0,1,1,2,1,1,0],
		[0,1,1,2,2,2,1,1],
		[1,1,2,2,0,2,2,1],
		[1,2,2,0,0,0,2,2],
		[2,2,0,0,0,0,0,2],
		[2,0,0,0,0,0,0,0],
	];

	for (let row = 0; row < Squares.length; row ++){
		for (let column = 0; column < Squares[row].length; column ++){
			if(Squares[row][column] === 1){
				fill(BackgroundColour1);
			}
			if(Squares[row][column] === 0){
				fill(BackgroundColour2);
			}
			if(Squares[row][column] === 2){
				fill(BackgroundColour3);
			}
			square(column*SquareSize, row*SquareSize, SquareSize)
	
		}
	}
}

function Background2(Variation, Scale) {
    translate(Scale, 0);
    for (let row = 0; row < CanvasX / Scale; row++) {
        for (let column = 0; column < CanvasY / Scale; column++) {
			push();
            translate(column*Scale, row* Scale);
			if(Variation === 1){
				CautionTape1(Scale);
			}
			if(Variation === 2){
				CautionTape2(Scale);
			}
			if(Variation === 3){
				CautionTape3(Scale);
			}
			pop();
        }
    }
}

function CautionTape1(Scale){
	let SquareSize = Scale / 4;
	let Squares = [
		[1,1,0,0],
		[0,1,1,0],
		[0,0,1,1],
		[1,0,0,1],
	];

	for (let row = 0; row < Squares.length; row ++){
		for (let column = 0; column < Squares[row].length; column ++){
			if(Squares[row][column] === 1){
				fill(BackgroundColour1);
			}
			if(Squares[row][column] === 0){
				fill(BackgroundColour2);
			}
			if(Squares[row][column] === 2){
				fill(BackgroundColour3);
			}
			square(column*SquareSize, row*SquareSize, SquareSize)
	
		}
	}
}
function CautionTape2(Scale){
	let SquareSize = Scale / 8;
	let Squares = [
		[1,1,1,0,0,0,0,1],
		[1,1,1,1,0,0,0,0],
		[0,1,1,1,1,0,0,0],
		[0,0,1,1,1,1,0,0],
		[0,0,0,1,1,1,1,0],
		[0,0,0,0,1,1,1,1],
		[1,0,0,0,0,1,1,1],
		[1,1,0,0,0,0,1,1],
	];

	for (let row = 0; row < Squares.length; row ++){
		for (let column = 0; column < Squares[row].length; column ++){
			if(Squares[row][column] === 1){
				fill(BackgroundColour1);
			}
			if(Squares[row][column] === 0){
				fill(BackgroundColour2);
			}
			if(Squares[row][column] === 2){
				fill(BackgroundColour3);
			}
			square(column*SquareSize, row*SquareSize, SquareSize)
	
		}
	}
}

function CautionTape3(Scale){
	let SquareSize = Scale / 8;
	let Squares = [
		[2,1,1,0,0,0,0,2],
		[2,2,1,1,0,0,0,0],
		[0,2,2,1,1,0,0,0],
		[0,0,2,2,1,1,0,0],
		[0,0,0,2,2,1,1,0],
		[0,0,0,0,2,2,1,1],
		[1,0,0,0,0,2,2,1],
		[1,1,0,0,0,0,2,2],
	];

	for (let row = 0; row < Squares.length; row ++){
		for (let column = 0; column < Squares[row].length; column ++){
			if(Squares[row][column] === 1){
				fill(BackgroundColour1);
			}
			if(Squares[row][column] === 0){
				fill(BackgroundColour2);
			}
			if(Squares[row][column] === 2){
				fill(BackgroundColour3);
			}
			square(column*SquareSize, row*SquareSize, SquareSize)
	
		}
	}
}

function Background3(Variation, Scale) {
    translate(Scale, 0);
    for (let row = 0; row < CanvasX / Scale; row++) {
        for (let column = 0; column < CanvasY / Scale; column++) {
			push();
            translate(column*Scale, row* Scale);
			if(Variation === 1){
				Crosses1(Scale);
			}
			if(Variation === 2){
				Crosses2(Scale);
			}
			if(Variation === 3){
				Crosses3(Scale);
			}
			pop();
        }
    }
}

function Crosses1(Scale){
	let SquareSize = Scale / 10;
	let Squares = [
		[0,1,1,1,0,1,0,0,0,1],
		[1,0,1,0,1,0,1,0,1,0],
		[1,1,0,1,1,0,0,1,0,0],
		[1,0,1,0,1,0,1,0,1,0],
		[0,1,1,1,0,1,0,0,0,1],
		[1,0,0,0,1,0,1,1,1,0],
		[0,1,0,1,0,1,0,1,0,1],
		[0,0,1,0,0,1,1,0,1,1],
		[0,1,0,1,0,1,0,1,0,1],
		[1,0,0,0,1,0,1,1,1,0]
	];

	for (let row = 0; row < Squares.length; row ++){
		for (let column = 0; column < Squares[row].length; column ++){
			if(Squares[row][column] === 1){
				fill(BackgroundColour1);
			}
			if(Squares[row][column] === 0){
				fill(BackgroundColour2);
			}
			if(Squares[row][column] === 2){
				fill(BackgroundColour3);
			}
			square(column*SquareSize, row*SquareSize, SquareSize)
	
		}
	}
}
function Crosses2(Scale){
	let SquareSize = Scale / 20;
	let Squares = [
		[0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0],
		[0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1],
		[1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0],
		[1,1,0,0,0,,0,0,1,1,0,0,1,1,1,1,1,1,0,0],
		[1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0],
		[1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0],
		[1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0],
		[1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0],
		[0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1],
		[1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1],
		[1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1],
		[1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0],
		[0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1],
		[0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1],
		[0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1],
		[0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1],
		[0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1],
		[0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1],
		[1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0],
		[0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0]
	];

	for (let row = 0; row < Squares.length; row ++){
		for (let column = 0; column < Squares[row].length; column ++){
			if(Squares[row][column] === 1){
				fill(BackgroundColour1);
			}
			if(Squares[row][column] === 0){
				fill(BackgroundColour2);
			}
			if(Squares[row][column] === 2){
				fill(BackgroundColour3);
			}
			square(column*SquareSize, row*SquareSize, SquareSize)
	
		}
	}
}

function Crosses3(Scale){
	let SquareSize = Scale / 20;
	let Squares = [
		[0,0,1,1,1,1,1,1,0,0,0,1,2,2,2,2,2,2,1,0],
		[0,0,0,1,1,1,1,0,0,0,1,1,1,2,2,2,2,1,1,1],
		[1,0,0,0,1,1,0,0,0,1,2,1,1,1,2,2,1,1,1,2],
		[1,1,0,0,0,0,0,0,1,1,2,2,1,1,1,1,1,1,2,2],
		[1,1,1,0,0,0,0,1,1,1,2,2,2,1,1,1,1,2,2,2],
		[1,1,1,0,0,0,0,1,1,1,2,2,2,1,1,1,1,2,2,2],
		[1,1,0,0,0,0,0,0,1,1,2,2,1,1,1,1,1,1,2,2],
		[1,0,0,0,1,1,0,0,0,1,2,1,1,1,2,2,1,1,1,2],
		[0,0,0,1,1,1,1,0,0,0,1,1,1,2,2,2,2,1,1,1],
		[1,0,1,1,1,1,1,1,0,1,1,1,2,2,2,2,2,2,1,1],
		[1,1,2,2,2,2,2,2,1,1,1,0,1,1,1,1,1,1,0,1],
		[1,1,1,2,2,2,2,1,1,1,0,0,0,1,1,1,1,0,0,0],
		[2,1,1,1,2,2,1,1,1,2,1,0,0,0,1,1,0,0,0,1],
		[2,2,1,1,1,1,1,1,2,2,1,1,0,0,0,0,0,0,1,1],
		[2,2,2,1,1,1,1,2,2,2,1,1,1,0,0,0,0,1,1,1],
		[2,2,2,1,1,1,1,2,2,2,1,1,1,0,0,0,0,1,1,1],
		[2,2,1,1,1,1,1,1,2,2,1,1,0,0,0,0,0,0,1,1],
		[2,1,1,1,2,2,1,1,1,2,1,0,0,0,1,1,0,0,0,1],
		[1,1,1,2,2,2,2,1,1,1,0,0,0,1,1,1,1,0,0,0],
		[0,1,2,2,2,2,2,2,1,0,0,0,1,1,1,1,1,1,0,0]
	];

	for (let row = 0; row < Squares.length; row ++){
		for (let column = 0; column < Squares[row].length; column ++){
			if(Squares[row][column] === 1){
				fill(BackgroundColour1);
			}
			if(Squares[row][column] === 0){
				fill(BackgroundColour2);
			}
			if(Squares[row][column] === 2){
				fill(BackgroundColour3);
			}
			square(column*SquareSize, row*SquareSize, SquareSize)
	
		}
	}
}