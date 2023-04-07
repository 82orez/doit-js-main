const title = document.querySelector('#title');
const author = document.querySelector('#author');
const saveBttn = document.querySelector('#save');
const bookList = document.querySelector('#bookList');


saveBttn.addEventListener('click', (e) => {
  e.preventDefault();

  const item = document.createElement('li');
  item.textContent = `${title.value} - ${author.value}`;

  const itemSpan = document.createElement('span');
  itemSpan.textContent = 'Del';
  itemSpan.classList.add('delButton');

  item.appendChild(itemSpan);

  bookList.appendChild(item);

  title.value = '';
  author.value = '';


  // * save 버튼을 click 한 다음에 del 버튼이 생기므로 save 버튼 click 이벤트 리스너 안에 작성.
  const delBttns = document.querySelectorAll('.delButton');

  for (const delBttn of delBttns) {
    delBttn.addEventListener('click', function() {
      this.parentNode.remove();
    });
  }
});

