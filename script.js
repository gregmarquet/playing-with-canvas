const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
const colors = document.querySelectorAll('.color');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

let positionInfo = canvas.getBoundingClientRect();
canvas.height = positionInfo.height;
canvas.width = positionInfo.width;


ctx.strokeStyle = 'black';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if(!isDrawing) return; // stop the function from running when not moused (mousedown)
  console.log(e);
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);




// canvas.addEventListener('touchstart', (e) => {
//   isDrawing = true;
//   [lastX, lastY] = [e.offsetX, e.offsetY];
// });

// canvas.addEventListener('touchmove', draw);
// canvas.addEventListener('touchend', () => isDrawing = false);
// canvas.addEventListener('touchleave', () => isDrawing = false);

colors.forEach((color) => {
  color.addEventListener('click', () => ctx.strokeStyle = color.dataset.color);
});






