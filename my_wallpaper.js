let AngleMin = 45;
// Your parameter variables go here!
let CanvasX = 200;
let CanvasY = 200;
let Grid = true;
let ReadyToPrint = false;
var BorderType = 2; //either 1 Spirals or 2 SnakesNPillars or 3 Labyrinth
let BorderThickness = 50
let BorderColour1 = (0);
let BorderColour2 = (135);
let BorderColour3 = (255);

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
	createBorder(BorderType, BorderThickness)
	circle(100,100,100)
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

function Border1(OriginX, OriginY, Direction, BorderThickness){
	translate(OriginX, OriginY)
	rotate(Direction);
	let Offset = 8 * BorderThickness / 9;
	Spiral(0,BorderThickness);
	let x = 0;
	while(x <(200-2*BorderThickness)) {
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
	while(x <(200-2*BorderThickness)) {
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
	while(x <(200-2*BorderThickness)) {
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