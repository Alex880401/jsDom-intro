// при наитисканні на кнопку:

// отримати заголовок першого рівня
// встановити для нього інший колір тла
// виставити формат шрифта для заголовків 2 рівня

// встановити атрибути і стилі для зображень
// 1 отримати доступ до кнопки
// 2 прописати функцію обробник
// 3 прописати функціонал обробника
// 3.1. отримати посилання на заголовок
// 3.2. встановити колір тла

const button = document.querySelector('button');

function clickHendler(event) {
  const h1 = document.querySelector('h1');
  h1.setAttribute('style', 'background-color: orange;');
  //h1.style.backgroundColor = 'yellow';

  const img = document.querySelector('.mainImg');
  img.src = "https://media.istockphoto.com/id/1443562748/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%B8%D0%BB%D0%B0%D1%8F-%D1%80%D1%8B%D0%B6%D0%B0%D1%8F-%D0%BA%D0%BE%D1%88%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=k8RwP4usK_LCpQ1bPn3fNDLk3vtfptH7CEcEMZw_K1A=";
  img.alt = 'cat';
  img.style.width = '300px';
  img.style.height = '100px';
  img.style.objectFit = 'cover';

  const h2s = document.querySelectorAll('h2');
  h2s.forEach(h2 => {
    h2.style.fontSize = '20px';
    h2.style.color = 'green';
    //h2.setAttribute('style', 'font-size: 20px; color: blue');
  });

};

  button.addEventListener('click', clickHendler);