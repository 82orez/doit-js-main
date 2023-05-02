const today = new Date();
const hours = today.getHours();
const container = document.querySelector('#container');

const newImg = document.createElement('img');
newImg.src = hours < 12 ? 'images/morning.jpg' : 'images/afternoon.jpg';
newImg.alt = '사진';
newImg.className = 'newImg'
container.appendChild(newImg);

const newText = document.createElement('h1');
newText.innerText = 'Hello';

// newText 요소를 container 요소의 자식으로 추가하되,
// newImg 요소 앞에 추가하기.
container.insertBefore(newText,newImg);