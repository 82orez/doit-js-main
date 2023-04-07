const items = document.querySelectorAll('li');
console.log(items);
console.log(items[0]);


for (const item of items) {
  item.addEventListener('click', function() {
    item.remove();
    console.log(this);
  });
}