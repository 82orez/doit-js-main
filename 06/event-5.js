let word = document.querySelector('#word');
let resultArea = document.querySelector('#result');

let bttn = document.querySelector('#bttn');

function wordNum() {
  resultArea.innerText = word.value.length;
}

bttn.addEventListener('click', wordNum);
