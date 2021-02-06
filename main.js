canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

Nasa_Image_Array = ["nasa_1.jfif","nasa_2.jpg","nasa_3.jpg","nasa_4.jpg"]

random_number = Math.floor(Math.random()*4)
rover_width = 100;
rover_height = 90;

background = Nasa_Image_Array[random_number];
rover_img = "rover.png";

rover_x = 10;
rover_y = 10;

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = upload_background;
    background_imgTag.src = background;

    rover_imgTag = new Image();
    rover_imgTag.onload = upload_rover;
    rover_imgTag.src = rover_img;
}

function upload_background()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function upload_rover()
{
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_Keydown)
function my_Keydown(e)
{
    keypress = e.keyCode;
    if(keypress=='38')
    {
        up();
        console.log("up");
    }

    if(keypress=='40')
    {
        down();
        console.log("down");
    }

    if(keypress=='37')
    {
        left();
        console.log("left");
    }

    if(keypress=='39')
    {
        right();
        console.log("right");
    }
}

function up()
{
    if(rover_y>=0)
    {
        rover_y = rover_y - 10;
        console.log(rover_x,rover_y);
        upload_background();
        upload_rover();
    }
}

function down()
{
    if(rover_y<=500)
    {
        rover_y = rover_y + 10;
        console.log(rover_x,rover_y);
        upload_background();
        upload_rover();
    }
}

function left()
{
    if(rover_x>=0)
    {
        rover_x = rover_x - 10;
        console.log(rover_x,rover_y);
        upload_background();
        upload_rover();
    }
}

function right()
{
    if(rover_x<=700)
    {
        rover_x = rover_x + 10;
        console.log(rover_x,rover_y);
        upload_background();
        upload_rover();
    }
}