// DOM
// Document
// Object
// Model

// const span = document.getElementsByTagName("span")[0];

// const lis = [...document.getElementsByTagName('li')];

// const ul = document.getElementsByTagName('ul')[0];
// console.log(ul.getElementsByTagName('li'))

// const div = document.getElementsByTagName('div');
// console.log(div[0].children);

// const ul = document.getElementsByClassName('smth');
// console.log(ul);

// console.dir(document.forms[0])
// const oneInput = document.querySelector(`form[name='registration'] > input`);
// const inputs = document.querySelectorAll(`form[name='registration'] > input`);
// console.dir([...input]);

// const one = document.getElementById('one');
// const two = document.querySelector('#one');
// console.dir(one)

// const ul = document.getElementsByClassName('smth')[0];
// const liveCollection = ul.getElementsByTagName('li');
// const deadCollection = ul.querySelectorAll('li');

// ul.addEventListener('click', () => {
//     ul.children[ul.children.length - 1].remove();
//     console.log(liveCollection);
//     console.log(ul.querySelectorAll('li'));
// })

// const ul = document.getElementsByTagName('ul');

// ul.addEventListener('click', () => {
//     console.log('EVENT FIRE!')
// });

// ul.addEventListener('click', () => {
//     console.log('BLABLA')
// // });

// const lis = document.getElementsByTagName('li');
// const ul = document.querySelector('ul');

// const lisArr = [...lis];

// const clickHandler = function () {
//     console.log(this.textContent);
//     this.removeEventListener('click', clickHandler);
// };

// lisArr[1].addEventListener('click', clickHandler);


// lisArr.forEach(li => li.addEventListener('click', clickHandler ))

// EVENT DELEGATION