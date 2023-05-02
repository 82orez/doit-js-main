const str = prompt('String: ');

const strUp = str[0].toUpperCase();
console.log(strUp);

const newStr = strUp + str.slice(1);
console.log(newStr);
document.write(newStr);

console.log('-------');

const newStr1 = [strUp, ...str.slice(1)].join('');
console.log(newStr1);


