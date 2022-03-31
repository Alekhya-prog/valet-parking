canvas id = document.getElementById ("myCanvas");
ctx = canvas.getContext  ("2d"); 

greencar_width = 75 ;
greencar_height = 100 ;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 10;
greencar_y = 10;

function add() {
background_imgTag= new Image ();
background_imgTag.onload= uploadBackground;
background_imgTag.src= background_image; 
rover_imgTag= new Image ();
rover_imgTag.onload= uploadgreencar;
rover_imgTag.src= green_car;
}

function uploadBackground() {
ctx.drawImage(backgroud_imgTag , 0 , 0 , canvas_width , canvas_height );

}

function uploadgreencar() {
ctx.drawImage (greencar_imgTag , greencar_x , greencar_y , greencar_width , greencar_height );
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greencar_y >= 0){
		greencar_y = greencar_y - 10;
		uploadBackground ();
		uploadgreencar ();
		}
}

function down()
{
	
	if (greencar_y >= 500){
		greencar_y = greencar_y + 10;
		uploadBackground ();
		uploadgreencar ();
		}
}

function left()
{
	if (greencar_x >= 0){
		greencar_x = greencar_x - 10;
		uploadBackground ();
		uploadgreencar ();
		}
}

function right()
{
	if (greencar_x >= 500){
		greencar_x = greencar_x + 10;
		uploadBackground ();
		uploadgreencar ();
		}
}
