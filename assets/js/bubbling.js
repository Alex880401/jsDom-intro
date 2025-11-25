// Керування розповсюдженням подій

const body = document.body;
const section = document.querySelector('section');
const button = document.querySelector('button');

// function btnClickHandler(e) {
//     //console.log(e);
//     console.log(this); // = curent target
//     // console.log(e.target); // = ціль події
//     // console.log(e.currentTarget);
    
//     // Звернення до об'єкту, на якому відбувається подія
//     //this.style.backgroundColor = 'yellow';

//     console.log('--------------------------------------');
// };

// // занурення
// body.addEventListener('click', btnClickHandler, {capture: true});
// section.addEventListener('click', btnClickHandler, {capture: true});
// button.addEventListener('click', btnClickHandler, {capture: true});

// // спливання
// button.addEventListener('click', btnClickHandler);
// section.addEventListener('click', btnClickHandler);
// body.addEventListener('click', btnClickHandler);

// припинити розповсюдження події
let clickCounter = 0;

body.addEventListener('click', () => {
    clickCounter++;
    console.log(clickCounter);
});

button.addEventListener('click', e => {
    e.stopPropagation(); // припиняє розповсюдження
});

