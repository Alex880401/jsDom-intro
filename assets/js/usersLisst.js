'use strict'

// const user = {
//     firstName: 'Test1',
//     lastName: 'Testovych1',
//     age: 28,
//     photoSrc: '/assets/images/frog.jpeg',
// };

const users = [
    {
        firstName: 'Test1',
        lastName: 'Testovych1',
        age: 28,
        photoSrc: '/assets/images/frog.jpeg',
    },
    {
        firstName: 'Test2',
        lastName: 'Testovych12',
        age: 29,
        photoSrc: '/assets/images/frog.jpeg',
    },
    {
        firstName: 'Test3',
        lastName: 'Testovych3',
        age: 30,
        photoSrc: '/assets/images/frog.jpeg',
    },
    {
        firstName: 'Test4',
        lastName: 'Testovych4',
        age: 31,
        photoSrc: '/assets/images/frog.jpeg',
    },
    {
        firstName: 'Test5',
        lastName: 'Testovych5',
        age: 32,
        photoSrc: '/assets/images/frog.jpeg',
    },
]

// const userCaedEl = document.createElement('article');
// userCaedEl.classList.add('userCard');
// document.body.append(userCaedEl);

// const userImg = createImage(user);
// const userInfEl = createUserInfoEl(user);
// const trashIconEl = createTrashIcon();

// userCaedEl.append(userImg, userInfEl, trashIconEl);

const userCards = users.map(u => createUserCard(u))
document.body.append(...userCards);

// const userCaedEl = createUserCard(user);
// document.body.append(userCaedEl);

function createUserCard(user) {
    const userCaedEl = document.createElement('article');
    userCaedEl.classList.add('userCard');

    const userImg = createImage(user);
    const userInfEl = createUserInfoEl(user);
    const trashIconEl = createTrashIcon();

    userCaedEl.append(userImg, userInfEl, trashIconEl);

    return userCaedEl;
};

// const userImg = document.createElement('img');
// userImg.src = user.photoSrc;
// userImg.alt = `${user.firstName} ${user.lastName}`;
// userImg.classList.add('userImg');
// userCaedEl.append(userImg);

function createImage({photoSrc, firstName, lastName}) {
    const userImg = document.createElement('img');
    userImg.src = photoSrc;
    userImg.alt = `${firstName} ${lastName}`;
    userImg.classList.add('userImg');
    return userImg;
};

// const userInfEl = document.createElement('div');
// userInfEl.classList.add('userInfo');
// userCaedEl.append(userInfEl);

// const userNameEl = document.createElement('p');
// userNameEl.classList.add('userName');
// userNameEl.textContent = `${user.firstName} ${user.lastName}`;
// userInfEl.append(userNameEl);

// const userAgeEl = document.createElement('span');
// userAgeEl.classList.add('userAge');
// userAgeEl.textContent = user.age;
// userInfEl.append(userAgeEl);

function createUserInfoEl({firstName, lastName, age}) {
    const userInfEl = document.createElement('div');
    userInfEl.classList.add('userInfo');

    const userNameEl = document.createElement('p');
    userNameEl.classList.add('userName');
    userNameEl.textContent = `${firstName} ${lastName}`;
    userInfEl.append(userNameEl);

    const userAgeEl = document.createElement('span');
    userAgeEl.classList.add('userAge');
    userAgeEl.textContent = age;
    userInfEl.append(userAgeEl);

    return userInfEl;
};

// const trashIconEl = document.createElement('i');
// trashIconEl.classList.add('fa-solid');
// trashIconEl.classList.add('fa-trash');
// trashIconEl.classList.add('trashIcon');

// function delUserHendler(e) {
//     //userCaedEl.remove();
//     //e.target.parentElement.remove();

//     // на випадок зміни рівня вкладеності, щоб не переписувати код обробника
//     // принцип відкритості/закритості
//     e.target.closest('.userCard').remove();
// };
// trashIconEl.onclick = delUserHendler;

// userCaedEl.append(trashIconEl);

function createTrashIcon() {
    const trashIconEl = document.createElement('i');
    trashIconEl.classList.add('fa-solid');
    trashIconEl.classList.add('fa-trash');
    trashIconEl.classList.add('trashIcon');

    function delUserHendler(e) {
        e.target.closest('.userCard').remove();
    };

    trashIconEl.onclick = delUserHendler;

    return trashIconEl;
};
