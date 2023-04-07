const nodeList = document.querySelectorAll('p');
console.log(nodeList);
console.log(nodeList[1].textContent);

let newP = document.createElement('p');
newP.id = 'newP';
let textNode = document.createTextNode('Typescript');
newP.appendChild(textNode);
document.body.appendChild(newP);

let newImg = document.createElement('img');
let srcNode = document.createAttribute('src');
srcNode.value = 'images/wall.jpg';
newImg.setAttributeNode(srcNode);
document.body.appendChild(newImg);


let tsP = document.createElement('p');
let tsTextNode = document.createTextNode('ts');
tsP.appendChild(tsTextNode);
let first = document.querySelector('#first');
document.body.insertBefore(tsP, first);


let heading = document.querySelector('h1');
heading.remove();