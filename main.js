var mouseEvent = "empty";
var last_position_of_x , last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = xanvas.getContext("2d");

color + "black";
width_of_line = 1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{

current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown")
{
    ctx.beginpath();
    ctx.strokeStyle = color;
    ctx.lineWidth = color;
    ctx.moveto(last_position_of_x , last_position_of_y);
    ctx.lineto(current_position_of_mouse_x , current_position_of_mouse_y);

}
last_position_of_y = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}
canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseleave (e)
{
    mouseEvent = "mouseUP"
}
canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave (e)
{
    mouseEvent = "mouseleave"
}
var last_position_of_x , last_position_of_y;
var width = screen.width

var width = screen.width - 70;
var height  = screen.height - 300;

if(width < 992)
{
    document.getElementById
    new_width;
    document.get
}