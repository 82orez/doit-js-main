const origin = document.querySelector('#origin');
const result = document.querySelector('#result');

let numbers = [2, 4, 6, 8, 10, 12];
// 함수 작성할 부분
function tail(arr) {
  let resultArr;
  if (arr.length === 1) {
    resultArr = [...arr];
  } else {
    resultArr = [...arr.slice(1)];
  }
  return resultArr;
}

origin.innerText = numbers;
result.innerText = tail(numbers);
