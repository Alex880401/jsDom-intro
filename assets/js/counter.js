// const [decBtn, incBtn] = document.querySelectorAll('.counterBtn');

//const counterEl = document.querySelector('#counter');

// let counter = 0;
// counterEl.textContent = counter;

// function decCount(e) {
//     counter--;
//     counterEl.textContent = counter;
// };

// function incCount(e) {
//     counter++;
//     counterEl.textContent = counter;
// };

// decBtn.addEventListener('click', decCount);
// incBtn.addEventListener('click', incCount);

// model (дані + методи роботи з ними)
class Counter {
    constructor(counter) {
        this._counter = counter; 
    };

    inc() {this._counter++};

    dec() {this._counter--};
};

// vievModel (обробка, призводить до зміни моделі)
const [decBtn, incBtn] = document.querySelectorAll('.counterBtn');

const counterEl = document.querySelector('#counter');

const count = new Counter(0);

updateViev();

function decCount(e) {
    count.dec();
    updateViev();
};

function incCount(e) {
    count.inc();
    updateViev();
    console.log(count._counter);
};

function updateViev() {
    counterEl.textContent = count._counter;
}

decBtn.addEventListener('click', decCount);
incBtn.addEventListener('click', incCount);
