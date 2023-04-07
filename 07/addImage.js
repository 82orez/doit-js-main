const today = new Date();
const hours = today.getHours();
const container = document.querySelector('#container');

let newImg = document.createElement('img');
newImg.src = hours < 12 ? 'images/morning.jpg' : 'images/afternoon.jpg';

container.appendChild(newImg);