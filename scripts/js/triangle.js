const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.beginPath();
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
ctx.moveTo(centerX, centerY);
ctx.lineTo(centerX-80, centerY+80);
ctx.lineTo(centerX-80, centerY-80);
ctx.fill();