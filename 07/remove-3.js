const bttn = document.querySelectorAll('p > span');
console.log(bttn)

for (const bttnElement of bttn) {
  bttnElement.addEventListener('click', function() {
    this.parentNode.remove();
    console.log(this)
  });
}