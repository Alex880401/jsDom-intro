const div = document.querySelector('.div');

div.addEventListener('click', function() {
    // this.classList.add('div2');
    // this.classList.remove('div');
    this.classList.toggle('div2');
});

div.style.color = 'red';

//div.className = div.className + ' div2';

const title = document.querySelector('h1');

title.addEventListener('click', function() {
    title.classList.toggle('title-border');
});