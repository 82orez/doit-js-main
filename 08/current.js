const displayDate = document.querySelector('#today');

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day1 = today.getDay();
let day2 = '';

switch (day1) {
  case 0:
    day2 = '일요일';
    break;
  case 1:
    day2 = '월요일';
    break;
  case 2:
    day2 = '화요일';
    break;
  case 3:
    day2 = '수요일';
    break;
  case 4:
    day2 = '목요일';
    break;
  case 5:
    day2 = '금요일';
    break;
  case 6:
    day2 = '토요일';
    break;
}

displayDate.innerText = `${year}년 ${month}월 ${date}일 `;

const dayBold = document.createElement('span');
dayBold.innerText = `${day2}`;
dayBold.style.fontWeight = 'bold';
displayDate.appendChild(dayBold);


/******* 시간 표시하기 *******/

const displayTime = document.querySelector('#clock');

let clock = function() {
  let current = new Date();
  let hours = current.getHours();
  let mins = current.getMinutes();
  let secs = current.getSeconds();

  let period = 'AM';

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
    period = 'PM';
  }

  hours = (hours < 10) ? "0" + hours : hours;
  mins = (mins < 10) ? "0" + mins : mins;
  secs = (secs < 10) ? "0" + secs : secs;

  displayTime.innerText = `${period}  ${hours} : ${mins} : ${secs} `;
}

setInterval(clock, 1000);