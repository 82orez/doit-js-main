const orderBttn = document.querySelector('#order');
const orderInfo = document.querySelector('#orderInfo');
const title = document.querySelector('#container > h2');

// orderBttn.addEventListener('click', () => {
//   let newP = document.createElement('p');
//   let textNode = document.createTextNode(title.innerText);
//
//   newP.appendChild(textNode);
//   newP.style.fontSize = '0.8em';
//   newP.style.color = 'blue';
//
//   orderInfo.appendChild(newP);
// }, {once: true});

function ok() {
  let newP = document.createElement('p');
  let textNode = document.createTextNode(title.innerText);

  newP.appendChild(textNode);
  newP.style.fontSize = '0.8em';
  newP.style.color = 'blue';

  orderInfo.appendChild(newP);
}
orderBttn.addEventListener('click', ok);
