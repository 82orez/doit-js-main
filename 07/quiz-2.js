const bttn = document.querySelector('#bttn');
const notiBox = document.querySelector('#noti-box');

bttn.addEventListener('click', () => {
  const noti = document.createElement('div');
  noti.classList.add('noti');
  noti.innerText = 'New message!';
  notiBox.appendChild(noti);

  setTimeout(() => {
    noti.remove();
  }, 3000);
});
