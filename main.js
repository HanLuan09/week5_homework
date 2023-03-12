var colorMain = document.querySelector('.main');
const inputLeft = document.querySelector('#container-left');
const inputRight = document.querySelector('#container-right');
var btnRandom = document.getElementById('container-btn');

var rgbStringLeft ='rgb(255, 255, 0)';
inputLeft.value = "#FFFF00";
var rgbStringRight = 'rgb(255, 0, 0)';
inputRight.value = "#FF0000";
var textColor = document.getElementById("footer-text-color");

function getColorLeft(event) {
    // Lấy giá trị màu từ phần tử input
    const color = event.target.value;
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);
    // Tạo chuỗi màu RGB
    rgbStringLeft = `rgb(${r}, ${g}, ${b})`;
    // thay đổi bg
    colorMain.style.background = `linear-gradient(to right,${rgbStringLeft}, ${rgbStringRight})`;
    textColor.innerText = `linear-gradient(to right,${rgbStringLeft}, ${rgbStringRight})`;
}
function getColorRight(event) {
    // Lấy giá trị màu từ phần tử input
    const color = event.target.value;
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);
    // Tạo chuỗi màu RGB
    rgbStringRight = `rgb(${r}, ${g}, ${b})`;
    // thay đổi bg
    colorMain.style.background = `linear-gradient(to right,${rgbStringLeft}, ${rgbStringRight})`;
    textColor.innerText = `linear-gradient(to right,${rgbStringLeft}, ${rgbStringRight})`;
}
function colorRandom(){
    return Math.floor(Math.random()*256);
}
function rgbToHex(r, g, b) {
    const hex = ((r << 16) | (g << 8) | b).toString(16);
    return "#" + hex.padStart(6, "0");
}
function btnFunction() {
    const r1 = colorRandom();
    const g1 = colorRandom();
    const b1 = colorRandom();
    const r2 = colorRandom();
    const g2 = colorRandom();
    const b2 = colorRandom();
    rgbStringLeft = `rgb(${r1}, ${g1}, ${b1})`;
    rgbStringRight = `rgb(${r2}, ${g2}, ${b2})`;
    inputLeft.value = rgbToHex(r1, g1, b1);
    inputRight.value = rgbToHex(r2, g2, b2);
    colorMain.style.background = `linear-gradient(to right,${rgbStringLeft}, ${rgbStringRight})`;
    textColor.innerText = `linear-gradient(to right,${rgbStringLeft}, ${rgbStringRight})`;
}