let today = new Date();

console.log(today.toString());
console.log(today.toDateString());

let passedTime = today.getTime(today.toDateString());
console.log(passedTime);

let passedDay = Math.round(passedTime/1000 / 24 /60 / 60);
console.log(passedDay);