let num1 = document.querySelector('#number1');
let num2 = document.querySelector('#number2');
let bttn = document.querySelector('#calc');
let resultArea = document.querySelector('#result');

bttn.onclick = () => resultArea.textContent = common(num1.value, num2.value);


function common(num1, num2) {
  let min = num1 < num2 ? num1 : num2;
  let result;
  for (let i = 1; i <= min; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
}
