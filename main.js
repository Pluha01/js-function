function info() {
    let imya = prompt('Введите своё имя');
    let years = +prompt('Введите ваш год рождения');
    let age = +prompt('Введите нынешний год')
    let result = (imya + ' ваш возраст ' + (age - years))
    return result
} alert(info());

function rand(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

var a = +prompt('Введите количество примеров');
function rand(max){
    return Math.floor(Math.random() * max + 1);
}
let max = 10;
 
for (i = 0; i < a; i++) {
    let b = rand(max);
    let c = rand(max);
    let e = Math.floor(Math.random() * 4 + 1)
 
    if (e == 1) {
        var plusMinus = b + c;
        var primer = prompt("Дайте правильный ответ:" + b + "+" + c + "=");
    } else if (e == 2) {
        var plusMinus = b - c;
        var primer = prompt("Дайте правильный ответ:" + b + "-" + c + "=");
    } else if (e == 3) {
        var plusMinus = b * c;
        var primer = prompt("Дайте правильный ответ:" + b + "*" + c + "=");
    } else if (e == 4) {
        var plusMinus = b / c;
        var primer = prompt("Дайте правильный ответ:" + b + "/" + c + "=");
    }
 
    if (plusMinus == primer){
        console.log("Ваш ответ верный - " + plusMinus);
    } else {
        console.log("Ваш ответ не верный - " + primer + "!" + " Верный ответ - " + plusMinus + "!");
    }
}