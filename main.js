var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

var color = "black";
var width_of_line = 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value; 
    width_of_line = document.getElementById("width_of_line").value; 

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    var current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x; 
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

// Cambiado a clearCanvas para evitar conflictos de nombres
function clearCanvas() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
