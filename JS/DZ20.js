let a = 0;
let b = 0;
let c = 0;
let i = 0;
let functionNumber = 0;
let result = '';

// Вывод на экран результата
function showResult(str) {
    document.getElementById('result').innerHTML = str;
    document.getElementById('result').style.display = 'block';
}

// Показать список заданий
function showTaskList() {
    document.getElementById('task').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('taskList').style.display = 'block';
    for (i = 1; i < 7; i++) {
        document.querySelector("#task input:nth-of-type(" + i + ")").value = '';
    }
    document.querySelector("#task p:nth-of-type(1)").style.display = 'none';
    document.querySelector("#task p:nth-of-type(2)").style.display = 'none';
}

// Отображение полей ввода данных
function enterParameters(condition, ...texts) {
    document.getElementById('condition').innerText = condition;
    for (i = 0; i < texts.length; i++) {
        document.querySelector("#task h3:nth-of-type(" + (i + 1) + ")").innerHTML = texts[i];
        document.querySelector("#task h3:nth-of-type(" + (i + 1) + ")").style.display = 'block';
        document.querySelector("#task input:nth-of-type(" + (i + 1) + ")").style.display = 'block';
    }
    for (i = texts.length; i < 6; i++) {
        document.querySelector("#task h3:nth-of-type(" + (i + 1) + ")").style.display = 'none';
        document.querySelector("#task input:nth-of-type(" + (i + 1) + ")").style.display = 'none';
    }
    document.getElementById('task').style.display = 'block';
}

// Выбор заголовков для ввода данных
function setParameters(n) {
    functionNumber = n;
    document.getElementById("taskList").style.display = 'none';
    switch (n) {
        case 1: {
            enterParameters("Сравнение чисел", "Число 1:", "Число 2:");
            break;
        }
        case 2: {
            enterParameters("Факториал заданного числа", "Число:");
            break;
        }
        case 3: {
            enterParameters("Объединение цифр в число", "Цифра 1:", "Цифра 2:", "Цифра 3:");
            break;
        }
        case 4: {
            enterParameters("Площадь прямоугольника", "Длина:", "Ширина:");
            break;
        }
        case 5: {
            enterParameters('Проверка числа на "совершенство"', "Число:");
            break;
        }
        case 6: {
            enterParameters("Совершенные числа из диапазона", "Начало диапазона:", "Конец диапазона:");
            break;
        }
        case 7: {
            enterParameters('Время в формате "чч:мм:сс"', "Часы:", "Минуты:", "Секунды:");
            break;
        }
        case 8: {
            enterParameters("Время в секундах", "Часы:", "Минуты:", "Секунды:");
            break;
        }
        case 9: {
            enterParameters('Секунды в формате "чч:мм:сс"', "Секунды:");
            break;
        }
        case 10: {
            enterParameters("Разница во времени", "Часы 1:", "Минуты 1:", "Секунды 1:", "Часы 2:", "Минуты 2:", "Секунды 2:");
            break;
        }
    }
}

// Получение значения указанного параметра
function getParameter(i) {
    return document.querySelector("#task input:nth-of-type(" + (i) + ")").value;
}

// Проверка на пустоту хотя бы одного параметра
function isSomeEmpty(paramsNumber) {
    for (i = 1; i <= paramsNumber; i++)
        if (getParameter(i) === '') return true;
    return false;
}

// Проверка на пустоту всех параметров
function isAllEmpty(paramsNumber) {
    let j = 0;
    for (i = 1; i <= paramsNumber; i++)
        if (getParameter(i) === '') j++;
    if (j === paramsNumber) return true;
    else return false;
}

// Проверка на тип данных для нескольких параметров
function isSomeNaN(...P) {
    for (i = 0; i < P.length; i++) {
        if (isNaN(P[i])) {
            return true;
        }
    }
    return false;
}


// Сравнение чисел
function compareNumbers(num1, num2) {
    if (num1 > num2) return 1;
    else if (num1 < num2) return -1;
    else return 0;
}

function makeTask1(p1, p2) {
    a = +p1;
    b = +p2;
    if (isSomeEmpty(2) || isSomeNaN(a, b)) {
        alert("Ошибка в исходных данных!");
        return '';
    } else return compareNumbers(a, b);
}

// Факториал заданного числа
function getFactorial(num) {
    if (num === 1) return 1;
    else {
        return num * getFactorial(num - 1);
    }
}

function makeTask2(p1) {
    a = +p1;
    if (p1 === '' || isNaN(a)) {
        alert("Ошибка в исходных данных!");
        return '';
    } else if ((a % 1 !== 0) || (a < 1)) {
        alert("Факториал заданного числа не существует!");
        return '';
    } else return getFactorial(a);
}

// Объединение цифр в число
function mergeDigits(d1, d2, d3) {
    return +(`${d1}${d2}${d3}`);
}

function makeTask3(p1, p2, p3) {
    a = +p1;
    b = +p2;
    c = +p3;
    if (isSomeEmpty(3) || isSomeNaN(a, b, c) || (p1.length !== 1) || (p2.length !== 1) || (p3.length !== 1)) {
        alert("Ошибка в исходных данных!");
        return '';
    } else return mergeDigits(p1, p2, p3);
}

// Площадь прямоугольника
function getRectSquare(length, width) {
    return length * width;
}

function makeTask4(p1, p2) {
    a = +p1;
    b = +p2;
    if (isAllEmpty(2) || isSomeNaN(a, b) || (a < 0) || (b < 0)) {
        alert("Ошибка в исходных данных!");
        return '';
    } else if (p2 === '') return getRectSquare(a, a);
    else if (p1 === '') return getRectSquare(b, b);
    else return getRectSquare(a, b);
}

// Совершенное число
function isPerfectNumber(num) {
    if ((num < 2) || (num % 1 !== 0)) return false;
    else {
        let sum = 1;
        for (i = 2; i < num; i++) {
            if (num % i === 0) sum += i;
        }
        if (num === sum) return true;
        else return false;
    }
}

function makeTask5(p1) {
    a = +p1;
    if ((p1 === "") || isNaN(a)) {
        alert("Ошибка в исходных данных!");
        return '';
    } else if (isPerfectNumber(a)) return (`${a} - совершенное число`);
    else return (`${a} - несовершенное число`);
}

// Совершенные числа из диапазона
function showPerfectNumbersInArea(begin, end) {
    let res = '';
    for (i = begin; i <= end; i++) {
        if (isPerfectNumber(i)) res += (`${i} `);
    }
    if (res === '') return ("В диапазоне нет совершенных чисел");
    else return (`Совершенные числа из диапазона [${begin}, ${end}]:<br>${res}`);
}

function makeTask6(p1, p2) {
    a = +p1;
    b = +p2;
    if (isSomeEmpty(2) || isSomeNaN(a, b) || a > b) {
        alert("Ошибка в исходных данных!");
        return '';
    } else return showPerfectNumbersInArea(Math.ceil(a), Math.floor(b));
}

// Время в формате "чч:мм:сс"
function showTime(hours, minutes, seconds) {

    // Вариант с пересчётом ( часы <-> минуты <-> секунды ) для значений больше 23/59/59
    //    let h = Math.trunc((hours + Math.trunc((minutes + Math.trunc(seconds / 60)) / 60) ) % 24);
    //    let m = Math.trunc((minutes + Math.trunc(seconds / 60)) % 60);
    //    let s = Math.trunc(seconds % 60);

    if (hours < 10) hours = (`0${hours}`);
    if (minutes < 10) minutes = (`0${minutes}`);
    if (seconds < 10) seconds = (`0${seconds}`);

    return (`${hours}:${minutes}:${seconds}`);
}

function makeTask7(p1, p2, p3) {
    a = +p1;
    b = +p2;
    c = +p3;
    if (isSomeNaN(a, b, c) || a < 0 || b < 0 || i < 0 || a > 23 || b > 59 || c > 59
        || a % 1 !== 0 || b % 1 !== 0 || i % 1 !== 0) {
        alert("Ошибка в исходных данных!");
        return '';
    } else return showTime(a, b, c);
}

// Время в секундах
function getTimeInSeconds(hours, minutes, seconds) {
    return (hours * 3600 + minutes * 60 + seconds);
}

function makeTask8(p1, p2, p3) {
    a = +p1;
    b = +p2;
    c = +p3;
    if (isSomeNaN(a, b, c) || a < 0 || b < 0 || c < 0 || a > 23 || b > 59 || c > 59
        || a % 1 !== 0 || b % 1 !== 0 || c % 1 !== 0) {
        alert("Ошибка в исходных данных!");
        return '';
    } else return getTimeInSeconds(a, b, c);
}

//Секунды в формате "чч:мм:сс"
function convertSecondsToTime(seconds) {
    a = Math.trunc(seconds / 3600);
    b = Math.trunc((seconds % 3600) / 60);
    c = Math.trunc((seconds % 3600) % 60);
    if (a < 10) a = (`0${a}`);
    if (b < 10) b = (`0${b}`);
    if (c < 10) c = (`0${c}`);

    return (`${a}:${b}:${c}`);
}

function makeTask9(p1) {
    a = +p1;
    if (isNaN(a) || a < 0 || a % 1 !== 0) {
        alert("Ошибка в исходных данных!");
        return '';
    } else if (a > 86399) {
        alert("Больше суток");
        return '';
    } else return convertSecondsToTime(a);
}

// Разница во времени
function getTimeDifference(h1, m1, s1, h2, m2, s2) {
    a = getTimeInSeconds(h1, m1, s1);
    b = getTimeInSeconds(h2, m2, s2);
    if (a > b) return convertSecondsToTime(a - b);
    else return convertSecondsToTime(b - a);
}

function makeTask10(p1, p2, p3, p4, p5, p6) {
    a = +p1;
    b = +p2;
    c = +p3;
    let a2 = +p4;
    let b2 = +p5;
    let c2 = +p6;
    if (isSomeNaN(a, b, c, a2, b2, c2) || a < 0 || b < 0 || c < 0 || a2 < 0 || b2 < 0 || c2 < 0
        || a > 23 || b > 59 || c > 59 || a2 > 23 || b2 > 59 || c2 > 59
        || a % 1 !== 0 || b % 1 !== 0 || c % 1 !== 0 || a2 % 1 !== 0 || b2 % 1 !== 0 || c2 % 1 !== 0) {
        alert("Ошибка в исходных данных!");
        return '';
    } else return (`Разница: ${getTimeDifference(a, b, c, a2, b2, c2)}`);
}


// Выполнение выбранного задания
function doChosen() {
    switch (functionNumber) {
        case 1: {
            result = makeTask1(getParameter(1), getParameter(2));
            showResult(result);
            break;
        }
        case 2: {
            result = makeTask2(getParameter(1));
            showResult(result);
            break;
        }
        case 3: {
            result = makeTask3(getParameter(1), getParameter(2), getParameter(3));
            showResult(result);
            break;
        }
        case 4: {
            result = makeTask4(getParameter(1), getParameter(2));
            showResult(result);
            break;
        }
        case 5: {
            result = makeTask5(getParameter(1));
            showResult(result);
            break;
        }
        case 6: {
            result = makeTask6(getParameter(1), getParameter(2));
            showResult(result);
            break;
        }
        case 7: {
            result = makeTask7(getParameter(1), getParameter(2), getParameter(3));
            showResult(result);
            break;
        }
        case 8: {
            result = makeTask8(getParameter(1), getParameter(2), getParameter(3));
            showResult(result);
            break;
        }
        case 9: {
            result = makeTask9(getParameter(1));
            showResult(result);
            break;
        }
        case 10: {
            result = makeTask10(getParameter(1), getParameter(2), getParameter(3), getParameter(4), getParameter(5), getParameter(6));
            showResult(result);
            break;
        }
    }
}