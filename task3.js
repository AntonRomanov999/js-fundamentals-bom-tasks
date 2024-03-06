// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку.
// Можуть видалятися всі елементи в будь-якому порядку.
// Список з елементами знаходиться у файлі index.html
// Для запуску використовувати Live Server
// Для перевірки виконання виконати команду node tests/task3.test.js

const dropdownItems = document.getElementById("dropdown");

function deleteItem() {
  dropdownItems.options[dropdownItems.selectedIndex].remove();
}

const dltBtn = document.getElementById("deleteButton");

dltBtn.addEventListener("click", () => {
  deleteItem();
});
