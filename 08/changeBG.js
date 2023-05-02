function changeBG() {
  let randomNum = Math.floor(Math.random() * 5 + 1);
  console.log(randomNum);
  document.body.style.backgroundImage = `url(images/bg-${randomNum}.jpg`;
}

// * load 이벤트 관련해서는 changeBG 함수 뒤에 () 를 붙여야만 실행이 되는 것 같음.
// * 원래는 함수명 뒤에 () 를 붙이면 안됨.
// document.addEventListener('load', changeBG());

// * load 이벤트 관련해서는 아래처럼 작성해야 할 듯.
window.onload = () => {
  let randomNum = Math.floor(Math.random() * 5 + 1);
  console.log(randomNum);
  document.body.style.backgroundImage = `url(images/bg-${randomNum}.jpg`;
}


// * 일반적인 이벤트에서는 함수명 뒤에 () 를 붙이면 안됨.
const bttn = document.querySelector('button');
bttn.addEventListener('click', changeBG);
