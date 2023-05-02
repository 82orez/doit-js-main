const userName = document.querySelector('#username');
const major = document.querySelector('#major');
const regBttn = document.querySelector('form > button');

regBttn.addEventListener('click', (e) => {
  e.preventDefault();

  let tbody = document.querySelector('#attendant > tbody');
  let newTr = document.createElement('tr');

  let newTdName = document.createElement('td');
  newTdName.innerText = userName.value;
  userName.value = '';

  let newTdMajor = document.createElement('td');
  newTdMajor.innerText = major.value;
  major.value = '';

  newTr.appendChild(newTdName);
  newTr.appendChild(newTdMajor);

  tbody.appendChild(newTr);
});
