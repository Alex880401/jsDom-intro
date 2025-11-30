'use strict'

const section = document.createElement('section');

const divRoot = document.querySelector('#root');

// додавання дочірнього елемента

divRoot.append(section);
section.textContent = 'Lorem ipsum';
section.style.backgroundColor = 'grey';

const article = document.createElement('article');
divRoot.prepend(article);
article.textContent = 'The first child'

// додавання сіблінгів

const btn = document.createElement('button');
section.after(btn);
btn.textContent = 'New button';

// видалення 

const divForRemove = document.querySelector('.removable');

divForRemove.addEventListener('click', function() {
    this.remove();
});