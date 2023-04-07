let selectMenu = document.querySelector('#major');
console.log(selectMenu);

function displaySelect() {
  let selectText = selectMenu.options[selectMenu.selectedIndex].innerText;
  alert(`You choose ${selectText}!`)
}

selectMenu.onchange = displaySelect;


let b = document.testForm.subject;
console.log(b);

let c = document.testForm.mailing;
console.log(c);