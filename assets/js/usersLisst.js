'use strict'

const user = {
    firstName: 'Test1',
    lastName: 'Testovych1',
    age: 28,
    photoSrc: '/assets/images/frog.jpeg',
};

const userCaedEl = document.createElement('article');
userCaedEl.classList.add('userCard');
document.body.append(userCaedEl);

const userImg = document.createElement('img');
userImg.src = user.photoSrc;
userImg.alt = `${user.firstName} ${user.lastName}`;
userImg.classList.add('userImg');
userCaedEl.append(userImg);

const userInfEl = document.createElement('div');
userInfEl.classList.add('userInfo');
userCaedEl.append(userInfEl);

const userNameEl = document.createElement('p');
userNameEl.classList.add('userName');
userNameEl.textContent = `${user.firstName} ${user.lastName}`;
userInfEl.append(userNameEl);

const userAgeEl = document.createElement('span');
userAgeEl.classList.add('userAge');
userAgeEl.textContent = user.age;
userInfEl.append(userAgeEl);

const trashIconEl = document.createElement('i');
trashIconEl.classList.add('fa-solid');
trashIconEl.classList.add('fa-trash');
trashIconEl.classList.add('trashIcon');

function delUserHendler(e) {
    userCaedEl.remove();
};
trashIconEl.onclick = delUserHendler;

userCaedEl.append(trashIconEl);