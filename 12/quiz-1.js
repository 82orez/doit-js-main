const url = 'https://reqres.in/api/products/10';

// const product = {
//   data: {
//     id: 10,
//     name: 'mimosa',
//     year: 2009,
//     color: '#F0C05A',
//     pantone_value: '14-0848',
//   },
//   support: {
//     url: 'https://reqres.in/#support-heading',
//     text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
//   },
// };

const result = document.querySelector('#result');

const xhr = new XMLHttpRequest();
xhr.open('get', url);
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let product = JSON.parse(xhr.responseText);
    console.log(product);
    result.innerHTML = `
      <p>상품명: ${product.data.name}</p>
      <p>생산년도: ${product.data.name}</p>`;
  }
}