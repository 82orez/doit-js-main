const book = {
  // 메서드에 관한 ES6 신규 문법
  buy() {
    console.log('I bought this book.');
    console.log(this.name);
  },
  name: 'Javascript',
  done: true,
  // finish 함수가 속한 객체는 book.
  finish: function () {
    this.done === false ? console.log('Still reading') : console.log('Done');
  },
};

book.buy();
book.finish();
