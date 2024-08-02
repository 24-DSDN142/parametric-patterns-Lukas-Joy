// Your parameter variables go here!
let CanvasX = 200;
let CanvasY = 200;
let Grid = false;
let GridOffset = 0;
let ReadyToPrint = false;
let BorderType = 1; //1 Spirals or 2 SnakesNPillars or 3 Labyrinth
let BorderStyle = 1; //1 Four Side or 2 Rows or 3 Columns
let BorderThickness = 25; //Thickness of one strip of the border
let BorderDouble = true;
let BorderColour1 = (0);
let BorderColour2 = (125);
let BorderColour3 = (255);
let BackgroundType = 0; //1 PeaksNValleys or 2 CautionTape or 3 Crosses
let BackgroundVariation = 1;  //1 low detail or 2 and 3 high detail
let BackgroundScale = 100;
let BackgroundColour1 = (0);
let BackgroundColour2 = (125);
let BackgroundColour3 = (255); //only available for variation 3
let IconType = 0; //1 Amphora or 2 Column
let IconVariation = 2; // 1 or 2 or 3 (only 1 Column Variation)
let IconScale = 200;
let IconColour1 = (0);
let IconColour2 = (125);
let IconColour3 = (255);
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
  pWallpaper.grid_settings.row_offset = GridOffset;
}
function wallpaper_background() {
  background(240, 255, 240); // light honeydew green color
}
function my_symbol() {
	push();
	translate(-BackgroundScale,0)
	createBackground(BackgroundType, BackgroundVariation, BackgroundScale);
	pop();
	createBorder(BorderType, BorderStyle, BorderThickness);
	createIcon(IconType, IconVariation, IconScale);
}
function createBorder(Type, Style, BorderThickness){
	if(BorderDouble === true){
	if(Style === 1){
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
			Spiral(8*BorderThickness/11, BorderThickness)
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
	if(Style === 2){
		if(Type === 1){
			push();
			Border1(0, 0, 0, BorderThickness);
			Spiral((8 * BorderThickness / 11),BorderThickness);
			Spiral((8 * BorderThickness / 11),BorderThickness);
			pop();
	
			push()
			Border1(CanvasX,CanvasY,180,BorderThickness);
			Spiral(8 * BorderThickness / 11,BorderThickness);
			Spiral(8 * BorderThickness / 11,BorderThickness);
			pop();
		}
		if(Type === 2){
			push();
			Border2(0, 0, 0, BorderThickness);
			SnakesNPillars(16 * (BorderThickness / 17),BorderThickness);
			SnakesNPillars(16 * (BorderThickness / 17),BorderThickness);
			pop();
			
			push();
			Border2(CanvasX,CanvasY,180,BorderThickness);
			SnakesNPillars(16 * (BorderThickness / 17),BorderThickness);
			SnakesNPillars(16 * (BorderThickness / 17),BorderThickness);

			pop();
		}
		if(Type === 3){
			push();
			Border3(0, 0, 0, BorderThickness);
			Labyrinth(21 * BorderThickness / 9,BorderThickness);
			pop();
			
			push();
			Border3(CanvasX,CanvasY,180,BorderThickness);
			Labyrinth(21 * BorderThickness / 9,BorderThickness);
			pop();
		}

	}
	if(Style === 3){
		if(Type === 1){
			push();
			Border1(BorderThickness, 0, 90, BorderThickness);
			pop();
	
			push()
			rotate(90);
			translate(-2*BorderThickness,-BorderThickness)
			Spiral(8 * BorderThickness / 11,BorderThickness);
			Spiral(8 * BorderThickness / 11,BorderThickness);

			pop();
	
			push()
			Border1(CanvasX-BorderThickness,CanvasY,270, BorderThickness);
			
			pop();
			push()
			rotate(-90);
			translate(-2*BorderThickness,-BorderThickness)
			Spiral(8 * BorderThickness / 11,BorderThickness);
			Spiral(8 * BorderThickness / 11,BorderThickness);

			pop();
		}
		if(Type === 2){
			push();
			Border2(BorderThickness, 0, 90, BorderThickness);
			SnakesNPillars(16 * (BorderThickness / 17),BorderThickness);
			pop();
			
			push();
			Border2(CanvasX-BorderThickness,CanvasY,270,BorderThickness);
			SnakesNPillars(16 * (BorderThickness / 17),BorderThickness);
			pop();
		}
		if(Type === 3){
			push();
			Border3(BorderThickness, 0, 90, BorderThickness);
			Labyrinth(21 * BorderThickness / 9,BorderThickness);
			pop();
			
			push();
			Border3(CanvasX-BorderThickness,CanvasY,270,BorderThickness);
			Labyrinth(21 * BorderThickness / 9,BorderThickness);
			pop();
		}

	}
	}
	if(BorderDouble === false){
		if(Style === 1){
			if(Type === 1){
				push()
				Border1(BorderThickness/2, 8 * BorderThickness / 11, 90, BorderThickness)
				pop()
				
				push()
				Border1(8 * BorderThickness / 11, -BorderThickness/2, 0, BorderThickness)
				pop()
		
				push()
				translate(0,-BorderThickness/2)
				Spiral(0, BorderThickness)
				Spiral(8 * BorderThickness / 11, BorderThickness)
				pop()

				push()
				 translate(BorderThickness/2,-8 * BorderThickness / 11)
				rotate(90)
				Spiral(0, BorderThickness)
				Spiral(8 * BorderThickness / 11, BorderThickness)
				pop()
			}
			if(Type === 2){
				push()
				Border2(16 * BorderThickness / 17, -BorderThickness/2, 0, BorderThickness)
				pop()
				
				push()
				Border2(CanvasX +BorderThickness/2, 16 * BorderThickness / 17, 90, BorderThickness)
				pop()
				
				push()
				translate(0,-BorderThickness/2)
				SnakesNPillars(0, BorderThickness)
				SnakesNPillars(16 * BorderThickness / 17, BorderThickness)
				pop()

				push()
				 translate(CanvasX +BorderThickness/2,-16 * BorderThickness / 17)
				rotate(90)
				SnakesNPillars(0, BorderThickness)
				SnakesNPillars(16 * BorderThickness / 17, BorderThickness)
				pop()
			}
			if(Type === 3){
				push()
				Border3(21* BorderThickness / 9, -BorderThickness/2, 0, BorderThickness)
				pop()
				
				push()
				Border3(CanvasX +BorderThickness/2, 21* BorderThickness / 9, 90, BorderThickness)
				pop()
				
				push()
				translate(0,-BorderThickness/2)
				Labyrinth(0, BorderThickness)
				Labyrinth(21* BorderThickness / 9, BorderThickness)
				pop()

				push()
				 translate(CanvasX +BorderThickness/2,-21* BorderThickness / 9)
				rotate(90)
				Labyrinth(0, BorderThickness)
				Labyrinth(21* BorderThickness / 9, BorderThickness)
				pop()
			}
		}
		if(Style === 2){
			if(Type === 1){
				push();
				Border1(0, -BorderThickness/2, 0, BorderThickness);
				pop();

				push()
				translate(-8*BorderThickness/11,-BorderThickness/2)
				Spiral(0,BorderThickness);
				pop()
				
				push()
				translate(-16*BorderThickness/9,-BorderThickness/2)
				Spiral(0,BorderThickness);
				pop()
			}
			if(Type === 2){
				push();
				Border2(0, -BorderThickness/2, 0, BorderThickness);
				SnakesNPillars(-16 * (BorderThickness / 17),BorderThickness);
				pop();
				
			}
			if(Type === 3){
				push();
				Border3(0, -BorderThickness/2, 0, BorderThickness);
				pop();
				push()
				translate(-21 * BorderThickness / 9,-BorderThickness/2)
				Labyrinth(0,BorderThickness);
				pop()
				
				
			}
	
		}
		if(Style === 3){
			if(Type === 1){
				push();
				translate(BorderThickness/2,0)
				Border1(0, 0, 90, BorderThickness);
				pop();
				push();
				translate(BorderThickness/2,-8*BorderThickness/11)
				rotate(90)
				Spiral(0,BorderThickness);
				pop();
				push();
				translate(BorderThickness/2,-16*BorderThickness/11)
				rotate(90)
				Spiral(0,BorderThickness);
				pop();
		
			}
			if(Type === 2){
				push();
				translate(BorderThickness/2,0)
				Border2(0, 0, 90, BorderThickness);
				pop();
				push();
				translate(BorderThickness/2,-16 * (BorderThickness / 17))
				rotate(90)
				SnakesNPillars(0,BorderThickness);
				pop();
				push();
				translate(BorderThickness/2,-32 * (BorderThickness / 17))
				rotate(90)
				SnakesNPillars(0,BorderThickness);
				pop();
				
				
			}
			if(Type === 3){
				push();
				translate(BorderThickness/2,0)
				Border3(0, 0, 90, BorderThickness);
				pop();
				push();
				translate(BorderThickness/2,-21 * BorderThickness / 9)
				rotate(90)
				Labyrinth(0,BorderThickness);
				pop();
				push();
				translate(BorderThickness/2,-42 * BorderThickness / 9)
				rotate(90)
				Labyrinth(0,BorderThickness);
				pop();
			}
	
		}
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
function createIcon(Type, Variation, Scale){
	push();
	translate(((CanvasX-Scale)/2),((CanvasY-Scale)/2))
	if(Type === 1){
		if(Variation === 1){
			Icon1(1, Scale);
		}
		if(Variation === 2){
			Icon1(2, Scale);
		}
		if(Variation === 3){
			Icon1(3, Scale);
		}
	}
	if(Type === 2){
		if(Variation === 1){
			Icon2(1, Scale);
		}
	}
	pop();
}
function Border1(OriginX, OriginY, Direction, BorderThickness){
	translate(OriginX, OriginY)
	rotate(Direction);
	let Offset = 8 * BorderThickness / 11;
	Spiral(0,BorderThickness);
	let x = 0;
	while(x <(CanvasX-2*BorderThickness)) {
		Spiral(Offset,BorderThickness);
		x += Offset
	}

}
function Spiral(Offset, BorderThickness){
	translate(Offset, 0);
	let SquareSize = BorderThickness / 11;
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
        for (let column = 0; column  < CanvasY / Scale; column++) {
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
function Icon1(Variation,Scale){
			if(Variation === 1){
				Amphora1(Scale);
			}
			if(Variation === 2){
				Amphora2(Scale);
			}
			if(Variation === 3){
				Amphora3(Scale);
			}
}
function Amphora1(Scale){
	let SquareSize = Scale / 16;
	let Squares = [
		[3,3,3,3,2,2,2,2,2,2,2,2,3,3,3,3],
		[3,3,3,3,3,2,2,2,2,2,2,3,3,3,3,3],
		[3,2,2,3,3,0,0,0,1,1,1,3,3,2,2,3],
		[3,2,3,2,3,0,0,0,1,1,1,3,2,3,2,3],
		[3,2,3,3,0,0,0,1,1,1,1,1,3,3,2,3],
		[3,2,3,0,0,0,0,1,1,1,1,1,1,3,2,3],
		[3,3,2,2,2,2,2,2,2,2,2,2,2,2,3,3],
		[3,3,0,0,0,2,0,1,1,1,2,1,1,1,3,3],
		[3,3,2,2,0,2,0,2,2,1,2,1,2,2,3,3],
		[3,3,2,2,0,0,0,2,2,1,1,1,2,2,3,3],
		[3,3,3,2,2,2,2,2,2,2,2,2,2,3,3,3],
		[3,3,3,3,0,0,0,1,1,1,1,1,3,3,3,3],
		[3,3,3,3,3,0,0,0,1,1,1,3,3,3,3,3],
		[3,3,3,3,3,3,0,0,1,1,3,3,3,3,3,3],
		[3,3,3,3,3,3,2,2,2,2,3,3,3,3,3,3],
		[3,3,3,3,3,2,2,2,2,2,2,3,3,3,3,3]
	];

	for (let row = 0; row < Squares.length; row ++){
		for (let column = 0; column < Squares[row].length; column ++){
			stroke(1);
			if(Squares[row][column] === 0){
				fill(IconColour1);
			}
			if(Squares[row][column] === 1){
				fill(IconColour2);
			}
			if(Squares[row][column] === 2){
				fill(IconColour3);
			}
			if(Squares[row][column] === 3){
				noFill();
				noStroke();
			}
			square(column*SquareSize, row*SquareSize, SquareSize);
		}
	}
}
function Amphora2(Scale){
	let SquareSize = Scale / 24;
	let Squares = [
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
		[3,3,3,3,3,0,0,0,0,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3],
		[3,3,3,3,3,0,0,0,0,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3],
		[3,1,1,1,3,3,0,0,0,0,2,2,2,2,2,2,2,2,3,3,1,1,1,3],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,3,3,3,3,3,0,0,0,0,2,2,2,2,2,2,2,2,3,3,3,3,3,1],
		[1,3,3,3,3,3,0,0,0,0,2,2,2,2,2,2,2,2,3,3,3,3,3,1],
		[3,1,1,1,3,3,0,0,0,0,2,2,2,2,2,2,2,2,3,3,1,1,1,3],
		[3,3,3,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3],
		[3,3,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3],
		[3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3],
		[3,3,0,0,0,0,1,1,1,2,2,2,2,2,2,1,1,1,2,2,2,2,3,3],
		[3,3,1,1,1,0,1,1,1,2,1,1,1,1,2,1,1,1,2,1,1,1,3,3],
		[3,3,1,1,1,0,0,2,2,2,1,1,1,1,2,2,2,2,2,1,1,1,3,3],
		[3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3],
		[3,3,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3],
		[3,3,3,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3],
		[3,3,3,3,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,3,3,3,3],
		[3,3,3,3,3,0,0,0,0,0,2,2,2,2,2,2,2,2,2,3,3,3,3,3],
		[3,3,3,3,3,3,0,0,0,0,2,2,2,2,2,2,2,2,3,3,3,3,3,3],
		[3,3,3,3,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3],
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
	];

	for (let row = 0; row < Squares.length; row ++){
		for (let column = 0; column < Squares[row].length; column ++){
			stroke(1);
			if(Squares[row][column] === 1){
				fill(IconColour1);
			}
			if(Squares[row][column] === 0){
				fill(IconColour2);
			}
			if(Squares[row][column] === 2){
				fill(IconColour3);
			}
			if(Squares[row][column] === 3){
				noFill();
				noStroke();
			}
			square(column*SquareSize, row*SquareSize, SquareSize);
		}
	}
}
function Amphora3(Scale){
	let SquareSize = Scale / 22;
	let Squares = [
		[3,3,3,3,3,3,3,0,0,0,2,2,2,2,2,3,3,3,3,3,3,3],
		[3,3,3,1,1,1,1,3,0,0,0,2,2,2,3,1,1,1,1,3,3,3],
		[3,3,3,1,3,3,1,1,1,1,1,1,1,1,1,1,3,3,1,3,3,3],
		[3,3,3,1,1,3,3,0,0,0,2,2,2,2,2,3,3,1,1,3,3,3],
		[3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3],
		[3,3,3,3,3,3,0,0,0,2,2,2,2,2,2,2,3,3,3,3,3,3],
		[3,3,3,3,3,3,0,0,0,2,2,2,2,2,2,2,3,3,3,3,3,3],
		[3,3,3,3,3,0,0,0,2,2,2,2,2,2,2,2,2,3,3,3,3,3],
		[3,3,3,3,3,0,0,0,2,2,2,2,2,2,2,2,2,3,3,3,3,3],
		[3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3],
		[3,3,3,3,0,0,0,1,1,2,2,2,2,1,1,2,2,2,3,3,3,3],
		[3,3,3,3,1,1,0,1,1,2,1,1,2,1,1,2,1,1,3,3,3,3],
		[3,3,3,3,1,1,0,1,1,2,1,1,2,1,1,2,1,1,3,3,3,3],
		[3,3,3,3,1,1,0,2,2,2,1,1,2,2,2,2,1,1,3,3,3,3],
		[3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3],
		[3,3,3,3,3,0,0,0,2,2,2,2,2,2,2,2,2,3,3,3,3,3],
		[3,3,3,3,3,0,0,0,2,2,2,2,2,2,2,2,2,3,3,3,3,3],
		[3,3,3,3,3,3,0,0,0,2,2,2,2,2,2,2,3,3,3,3,3,3],
		[3,3,3,3,3,3,0,0,0,2,2,2,2,2,2,2,3,3,3,3,3,3],
		[3,3,3,3,3,3,3,0,0,0,2,2,2,2,2,3,3,3,3,3,3,3],
		[3,3,3,3,3,3,3,0,0,0,2,2,2,2,2,3,3,3,3,3,3,3],
		[3,3,3,3,3,3,3,0,0,0,2,2,2,2,2,3,3,3,3,3,3,3]		
	];

	for (let row = 0; row < Squares.length; row ++){
		for (let column = 0; column < Squares[row].length; column ++){
			stroke(1);
			if(Squares[row][column] === 1){
				fill(IconColour1);
			}
			if(Squares[row][column] === 0){
				fill(IconColour2);
			}
			if(Squares[row][column] === 2){
				fill(IconColour3);
			}
			if(Squares[row][column] === 3){
				noFill();
				noStroke();
			}
			square(column*SquareSize, row*SquareSize, SquareSize);
		}
	}
}

function Icon2(Variation,Scale){
	if(Variation === 1){
		Column1(Scale);
	}
	if(Variation === 2){
		Column2(Scale);
	}
	if(Variation === 3){
		Column3(Scale);
	}
}
function Column1(Scale){
let SquareSize = Scale / 18;
let Squares = [
	[0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2],
	[3,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,3],
	[3,3,0,0,0,0,0,0,2,2,2,2,2,2,2,2,3,3],
	[3,3,3,0,0,0,0,0,2,2,2,2,2,2,2,3,3,3],
	[3,3,3,0,0,0,0,0,2,2,2,2,2,2,2,3,3,3],
	[3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3],
	[3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3],
	[3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3],
	[3,3,3,0,2,0,2,0,2,0,2,0,2,0,2,3,3,3],
	[3,3,3,0,2,0,2,0,2,0,2,0,2,0,2,3,3,3],
	[3,3,3,0,2,0,2,0,2,0,2,0,2,0,2,3,3,3],
	[3,3,3,0,2,0,2,0,2,0,2,0,2,0,2,3,3,3],
	[3,3,3,0,2,0,2,0,2,0,2,0,2,0,2,3,3,3],
	[3,3,3,0,2,0,2,0,2,0,2,0,2,0,2,3,3,3],
	[3,3,3,0,2,0,2,0,2,0,2,0,2,0,2,3,3,3]
];

for (let row = 0; row < Squares.length; row ++){
for (let column = 0; column < Squares[row].length; column ++){
	stroke(1);
	if(Squares[row][column] === 0){
		fill(IconColour1);
	}
	if(Squares[row][column] === 1){
		fill(IconColour2);
	}
	if(Squares[row][column] === 2){
		fill(IconColour3);
	}
	if(Squares[row][column] === 3){
		noFill();
		noStroke();
	}
	square(column*SquareSize, row*SquareSize, SquareSize);
}
}
}
function Collumn2(Scale){
let SquareSize = Scale / 24;
let Squares = [
	[0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2],
	[3,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,3],
	[3,3,2,0,0,0,0,0,2,2,2,2,2,2,2,2,3,3],
	[3,3,3,0,0,0,0,0,2,2,2,2,2,2,2,3,3,3],
	[3,3,3,0,0,0,0,0,2,2,2,2,2,2,2,3,3,3],
	[3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3],
	[3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3],
	[3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3],
	[3,3,3,0,2,0,2,0,2,0,2,0,2,0,2,3,3,3],
	[3,3,3,0,2,0,2,0,2,0,2,0,2,0,2,3,3,3],
	[3,3,3,0,2,0,2,0,2,0,2,0,2,0,2,3,3,3],
	[3,3,3,0,2,0,2,0,2,0,2,0,2,0,2,3,3,3],
	[3,3,3,0,2,0,2,0,2,0,2,0,2,0,2,3,3,3],
	[3,3,3,0,2,0,2,0,2,0,2,0,2,0,2,3,3,3],
	[3,3,3,0,2,0,2,0,2,0,2,0,2,0,2,3,3,3],	

];

for (let row = 0; row < Squares.length; row ++){
for (let column = 0; column < Squares[row].length; column ++){
	stroke(1);
	if(Squares[row][column] === 1){
		fill(IconColour1);
	}
	if(Squares[row][column] === 0){
		fill(IconColour2);
	}
	if(Squares[row][column] === 2){
		fill(IconColour3);
	}
	if(Squares[row][column] === 3){
		noFill();
		noStroke();
	}
	square(column*SquareSize, row*SquareSize, SquareSize);
}
}
}
function Collumn3(Scale){
let SquareSize = Scale / 22;
let Squares = [
[3,3,3,3,3,3,3,0,0,0,2,2,2,2,2,3,3,3,3,3,3,3],
[3,3,3,1,1,1,1,3,0,0,0,2,2,2,3,1,1,1,1,3,3,3],
[3,3,3,1,3,3,1,1,1,1,1,1,1,1,1,1,3,3,1,3,3,3],
[3,3,3,1,1,3,3,0,0,0,2,2,2,2,2,3,3,1,1,3,3,3],
[3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3],
[3,3,3,3,3,3,0,0,0,2,2,2,2,2,2,2,3,3,3,3,3,3],
[3,3,3,3,3,3,0,0,0,2,2,2,2,2,2,2,3,3,3,3,3,3],
[3,3,3,3,3,0,0,0,2,2,2,2,2,2,2,2,2,3,3,3,3,3],
[3,3,3,3,3,0,0,0,2,2,2,2,2,2,2,2,2,3,3,3,3,3],
[3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3],
[3,3,3,3,0,0,0,1,1,2,2,2,2,1,1,2,2,2,3,3,3,3],
[3,3,3,3,1,1,0,1,1,2,1,1,2,1,1,2,1,1,3,3,3,3],
[3,3,3,3,1,1,0,1,1,2,1,1,2,1,1,2,1,1,3,3,3,3],
[3,3,3,3,1,1,0,2,2,2,1,1,2,2,2,2,1,1,3,3,3,3],
[3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3],
[3,3,3,3,3,0,0,0,2,2,2,2,2,2,2,2,2,3,3,3,3,3],
[3,3,3,3,3,0,0,0,2,2,2,2,2,2,2,2,2,3,3,3,3,3],
[3,3,3,3,3,3,0,0,0,2,2,2,2,2,2,2,3,3,3,3,3,3],
[3,3,3,3,3,3,0,0,0,2,2,2,2,2,2,2,3,3,3,3,3,3],
[3,3,3,3,3,3,3,0,0,0,2,2,2,2,2,3,3,3,3,3,3,3],
[3,3,3,3,3,3,3,0,0,0,2,2,2,2,2,3,3,3,3,3,3,3],
[3,3,3,3,3,3,3,0,0,0,2,2,2,2,2,3,3,3,3,3,3,3]		
];

for (let row = 0; row < Squares.length; row ++){
for (let column = 0; column < Squares[row].length; column ++){
	stroke(1);
	if(Squares[row][column] === 1){
		fill(IconColour1);
	}
	if(Squares[row][column] === 0){
		fill(IconColour2);
	}
	if(Squares[row][column] === 2){
		fill(IconColour3);
	}
	if(Squares[row][column] === 3){
		noFill();
		noStroke();
	}
	square(column*SquareSize, row*SquareSize, SquareSize);
}
}
}