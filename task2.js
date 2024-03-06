// Задано сторінку з 3 кнопками . Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при наведенні колір фону міняється на коричневий
//
// Запустіть виконане завдання за допомогою Live Server
// Перевірте виконання за допомогою команди node tests/task2.test.js

const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");

function makeBackBlue() {
  document.body.style.backgroundColor = "blue";
}

function makeBackPink() {
    document.body.style.backgroundColor = "pink";
}

function makeBackBrown() {
    document.body.style.backgroundColor = "brown";
}

btn1.addEventListener("click", () => {
  makeBackBlue();
});

btn2.addEventListener("dblclick", () => {
    makeBackPink();
  });

btn3.addEventListener("mouseover", () => {
    makeBackBrown();
  });
