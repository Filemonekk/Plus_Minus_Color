const sizeUp = document.querySelector('.size-up');
const sizeDown = document.querySelector('.size-down');
const color = document.querySelector('.color');
const p = document.querySelector('p');

let fontSize = 20;

const bigText = () => {
    p.style.fontSize = fontSize + 'px';
    fontSize++
}

const minText = () => {
    p.style.fontSize = fontSize + 'px';
    fontSize--
}

const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const changeTextColor = () => {
   p.style.color = getRandomColor()
}





sizeUp.addEventListener('click', bigText);
sizeDown.addEventListener('click', minText);
color.addEventListener('click', changeTextColor);
