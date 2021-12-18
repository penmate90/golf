

console.log("js loaded");
// Create canvas variable
var canvas= new fabric.Canvas("myCanvas");

//Set initial positions for ball and hole images.
ball_x=10;
ball_y=10;
hole_x=700;
hole_y=395;



block_image_width = 5;
block_image_height = 5;

function load_img(){
	console.log("function called");
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png",function(Img){
     hole=Img;
	 hole.scaleToHeight(50);
	 hole.scaleToWidth(50);
	 hole.set({top:hole_y, left:hole_x });
	 

     
    canvas.add(hole);
	
	} 
	
	);

	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function (Img) {
		ball=Img;
		ball.scaleToHeight(50);
		ball.scaleToWidth(50);
		ball.set({top:ball_y, left:ball_x});
		canvas.add(ball);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if ((hole_x==ball_x) && (hole_y== ball_y)) {

		document.getElementById("hd3").innerHTML="GAME OVER";
		document.getElementById("myCanvas").style.borderColor="red";
        canvas.remove(ball);
	}
	else{
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
		// Write a code to move ball upward.
		if (ball_y >10) {
			ball_y -=block_image_height
		canvas.remove(ball);
		new_image();
		}
		

	}

	function down()
	{
		 // Write a code to move ball downward.
		 if (ball_y <590){
		 ball_y+=block_image_height;
		 canvas.remove(ball);
        new_image();}
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
			ball_x-=block_image_width;
			canvas.remove(ball);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1000)
		{
			// Write a code to move ball right side.
			ball_x+=block_image_width;
			canvas.remove(ball);
			new_image();
		}
	}
	
}

