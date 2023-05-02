const bttn = document.querySelector('button');
const result = document.querySelector('#result');

bttn.addEventListener('click', () => {
  const emailAddress = document.querySelector('#userEmail').value;

  if (!emailAddress.includes('@')) {
    alert('Please confirm your email address!');
  } else {
    let userName = emailAddress.split('@')[0];
    userName = userName.slice(0, 3);

    const domain = emailAddress.split('@')[1];
    console.log(userName);
    console.log(domain);

    const resultAddress = `${userName}****@${domain}`;
    result.innerText = resultAddress;
  }
});

// const myEmail = '82orez@gmail.com';
// const arr = myEmail.split('@');
// console.log(arr);
