const origin = document.querySelector('#origin');
const result = document.querySelector('#result');

let numbers = [2, 4, 6, 8, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

let newNums = [...numbers, sum];
console.log(newNums);

function showArr(area, arr) {
  const table = document.createElement('table');
  const tr = document.createElement('tr');
  // const td = document.createElement('td');
  let td = '';

  for (let i = 0; i < arr.length; i++) {
    td += `<td>${arr[i]}</td>`;
  }
  tr.innerHTML = td;
  table.appendChild(tr);
  area.appendChild(table);
}

showArr(origin, numbers);
showArr(result, newNums);
