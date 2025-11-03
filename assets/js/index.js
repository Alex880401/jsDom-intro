console.log(document);

console.log(document.head);

// скрипт виконується там, де він оголошений, тому до body прямого доступу немає
// потрібно в html при оголошенні скрипта происати атрибут defer (браузер спочатку розбирає документ а потім запускає скрипт)

console.log(document.body);

// доступ по id (використовується найчастіше)
const rootE1 = document.getElementById('root');
console.log(rootE1);
console.dir(rootE1);

//доступ по тегу
const divEls = document.getElementsByTagName('div');
console.log(divEls);

const divRoot2 = divEls[0];
console.log(divRoot2);

// доступ по класу
const contentDivs = document.getElementsByClassName('content');
console.log(contentDivs);

// по селектору

const rootEl3 = document.querySelector('#root');
console.log(rootEl3);

const divEl1 = document.querySelectorAll('div');
console.log(divEl1);

// отримати список елементів з класом 'content'

const clCont = document.querySelectorAll('.content');
console.log(clCont);

// обробка подій (будь який зовнішній вплив на об'єкт)

const btn = document.getElementById('clickBtn');

console.log(btn);

// функція обобник події
const clickHendler = function(event) {
    console.log('Button was clicked');
};

btn.onclick = clickHendler;

// зняти подію
btn.onclick = null;

//----------------------------------

const loginButton = document.getElementById('loginButton');

function loginButtonHendler(event) {
    alert('Log in in process');
};

loginButton.addEventListener('click', loginButtonHendler);

// зняти подію
loginButton.removeEventListener('click', loginButtonHendler);

//-----------------------------------

//  Виводити "Click me", коли наводимо курсор на кнопку loginButton

function loginMoseMoveHandler(e) {
    console.log('Click me!');
}

loginButton.addEventListener('mousemove', loginMoseMoveHandler);

// Атрибути
// доступ до атрибутів як до властивостей об'єкта

const p1 = document.querySelector('#p1');

console.log(p1);

console.log(p1.title);

// Вивести id параграфа
console.log(p1.id);

p1.title = 'New title'

// булевські атрибути
p1.hiden = true;

// доступ до атрибута стилів (через властивість)
p1.style.color = 'red'
p1.style.backgroundColor = 'orange'

// інший синтаксис (через метод)
const p2 = document.querySelector('#p2');

// задати значення атрибута
p2.setAttribute('title', 'Title of p2');

p2.setAttribute('style', 'font-size: 10px; color: yellow');

// <p hiden....
//p2.setAttribute('hidden', 'hidden')

// отримати значення атрибута
console.log(p2.getAttribute('style'));

//Задати для баді колір тла
//const docBody = document.querySelector('body');
//docBody.style.backgroundColor = 'green'

//document.querySelector('body').style.backgroundColor = 'green';

document.body.setAttribute('style', 'background-color: green');

//Зміна контенту в елементі
p2.textContent = 'New content'

//Задати атрибути зображення по об'єкту
const imageAttr = {src: "https://media.istockphoto.com/id/1443562748/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%B8%D0%BB%D0%B0%D1%8F-%D1%80%D1%8B%D0%B6%D0%B0%D1%8F-%D0%BA%D0%BE%D1%88%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=k8RwP4usK_LCpQ1bPn3fNDLk3vtfptH7CEcEMZw_K1A=", alt: 'cat'};

const im = document.querySelector('img');

im.src = imageAttr.src;
im.alt = imageAttr.alt;

// задати розміри
//im.setAttribute('width', '200');

im.setAttribute('style', 'width: 200px');