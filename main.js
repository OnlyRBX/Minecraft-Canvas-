var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
maxheight = 100
maxwidth = 100
minimumwidth = 10
minimumheight = 10

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
    
}

player_update()

function new_image(ImageName)
{
    fabric.Image.fromURL(ImageName, function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    })
}

window.addEventListener("keydown", keyisdown);

function keyisdown(e)
{
    KeyCode = e.keyCode
    console.log("The Keydown's Code is "+ KeyCode)
    if (e.shiftKey == true && KeyCode == '80') {
        if (block_image_width < maxwidth || block_image_height < maxheight ) {
            console.log("Increase Height and Width");
            block_image_width = block_image_width + 10;
            block_image_height = block_image_height + 10;
            document.getElementById("Width").innerHTML = block_image_width
            document.getElementById("Height").innerHTML = block_image_height
        }
    }
    if (e.shiftKey == true && KeyCode == '77') {
        if (block_image_width >= minimumwidth || block_image_height >= minimumheight ) {
            console.log("Decrease Height and Width");
            block_image_width = block_image_width - 10;
            block_image_height = block_image_height - 10;
            document.getElementById("Width").innerHTML = block_image_width
            document.getElementById("Height").innerHTML = block_image_height
        }
    }
    if (KeyCode == '38') {
        UP()
        console.log("Player Go Up")
    }
    if (KeyCode == '40') {
        DOWN()
        console.log("Player Go Down")
    }
    if (KeyCode == '37') {
        LEFT()
        console.log("Player Go Left")
    }
    if (KeyCode == '39') {
        RIGHT()
        console.log("Player Go Right")
    }
    if (KeyCode == '66') {
        new_image("brick.jpg")
        console.log("Brick")
    }
    if (KeyCode == '68') {
        new_image("dark_green.png")
        console.log("Dark Green")
    }
    if (KeyCode == '71') {
        new_image("grass.png")
        console.log("Grass Block")
    }
    if (KeyCode == '76') {
        new_image("light_green.jpg")
        console.log("Light Green")
    }
    if (KeyCode == '78') {
        new_image("neatherrack.jpg")
        console.log("Neather Rack")
    }
    if (KeyCode == '83') {
        new_image("stone.jpg")
        console.log("Stone")
    }
    if (KeyCode == '84') {
        new_image("trunk.jpg")
        console.log("Trunk")
    }
    if (KeyCode == '85') {
        new_image("unique.png")
        console.log("Yellow Brick")
    }
    if (KeyCode == '89') {
        new_image("yellowstone.png")
        console.log("GlowStone")
    }
}

function UP()
{
    if (player_y>0) {
        player_y = player_y - block_image_height;
        console.log("Block Image Height: "+ block_image_height)
        console.log(player_x+","+player_y)
        canvas.remove(player_object)
        player_update()
    }
}

function DOWN()
{
    if (player_y<700) {
        player_y = player_y + block_image_height;
        console.log("Block Image Height: "+ block_image_height)
        console.log(player_x+","+player_y)
        canvas.remove(player_object)
        player_update()
    }
}

function RIGHT()
{
    if (player_x<1050) {
        player_x = player_x + block_image_width;
        console.log("Block Image Width: "+ block_image_width)
        console.log(player_x+","+player_y)
        canvas.remove(player_object)
        player_update()
    }
}

function LEFT()
{
    if (player_x>0) {
        player_x = player_x - block_image_width;
        console.log("Block Image Width: "+ block_image_width)
        console.log(player_x+","+player_y)
        canvas.remove(player_object)
        player_update()
    }
}