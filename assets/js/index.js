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