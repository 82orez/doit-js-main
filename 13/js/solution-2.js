const quotesURL = "http://dummyjson.com/quotes";

fetch(quotesURL)
  .then(response => response.json())
  .then(data => {
    const result = document.querySelector("#result");
    setInterval(() => {const random = Math.floor(Math.random() * 30);  // 0 ~ 29 사이의 수
      result.querySelector(".quote").innerHTML = data.quotes[random].quote;
      result.querySelector(".author").innerHTML = ` - ${data.quotes[random].author}`}, 3000);
  })
  .catch(error => console.log(error));