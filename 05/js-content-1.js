const title = document.querySelector('#title');
const userName = document.querySelector('#desc p');
const pfImage = document.querySelector('#profile img');
const bttn = document.querySelector('button');

title.onclick = () => {
  // title.textContent = '프로필';

  // title.style.backgroundColor = 'black';
  // title.style.color = 'white';

  // if (!title.classList.contains('clicked')) {
  //   title.classList.add('clicked');
  // } else {
  //   title.classList.remove('clicked');
  // }

  title.classList.toggle('clicked');
};

userName.onclick = () => {
  userName.classList.toggle('blue-italic');
};

pfImage.onclick = () => (pfImage.src = 'images/pf2.png');

bttn.onclick = () => {
  document.body.classList.toggle('dark');
  // userName.classList.toggle('dark');
}
