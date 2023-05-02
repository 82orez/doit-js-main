const result = document.querySelector('#result');

let fromDay = new Date('2023-01-01');
let today = new Date();

let diff = today - fromDay;

let passedTime = Math.ceil(diff / 1000 / 24 / 60 / 60);
console.log(passedTime);

result.innerText = passedTime;