"use strict"

/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x, возведённое в n-ную степень.
 */
function pow(x, n) {
    if (n < 0)
        return ;
    let y = x;
    for (let i = 1; i < n; i++) {
        y *= x;
    }
    return y;
}

alert(pow(10, 150));



// let name = prompt('Какое "официальное" название у JavaScript?', '');
// if (name == "ECMAScript") {
//     alert('Верно!');
// } else {
//     alert('Не знаете? ECMAScript!');
// }

// let name = "undefined";
// while (true) {
//     name = prompt("Как тебя зовут?", name);
//     if (confirm(`Тебя зовут ${name}?`) == true)
//         break;
// }
// alert(`${name}, приятно познакомиться!`);

