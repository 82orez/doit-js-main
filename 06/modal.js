const openBttn = document.querySelector('#open');
const modalBox = document.querySelector('#modal-box');
const closeBttn = document.querySelector('#close');

openBttn.addEventListener('click', () => {
  modalBox.classList.toggle('active');
});


closeBttn.addEventListener('click', () => {
  modalBox.classList.toggle('active');
});