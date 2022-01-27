// //6) Калькулятор
// function takeElem () {
//   let num1 = (Number(document.getElementById('num1').value))
//   let num2 = (Number(document.getElementById('num2').value))
//   let operator = (document.getElementById('operator').value)
//   if (operator === '+') {
//     document.getElementById('result').innerHTML=num1+num2;
//   } else if (operator === '-') {
//     document.getElementById('result').innerHTML=num1-num2;
//   } else if (operator === '*') {
//     document.getElementById('result').innerHTML=num1*num2;
//   } else if(operator === "/"){
//     document.getElementById('result').innerHTML=num1/num2;
//   }
// }

// //7) Сдвинуть число
// let num = prompt("Введите число")
// let shift = +prompt("Введите на сколько цифр сдвинуть число")
// let length = num.split("").length
// let shift2 = length - shift
// let amountOfNulls = (10) ** (shift2)
// let newNum = Math.round(num / amountOfNulls)
// let partOfNum = num % amountOfNulls
// let finalNum = partOfNum.toString() + newNum.toString()
// console.log(finalNum)
// if (length < shift){
//   console.log("Значение сдвига должно быть меньше числа")
// }

// //8) День недели
// let weeks = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
// document.getElementById('week').innerHTML = weeks[0]
// let dayCount = 0
//
// function takeWeek(){
//   document.getElementById('week').innerHTML = weeks[dayCount++]
//   if (dayCount === 7){
//     dayCount = 0
//   }
// }

// //9) Таблица умножения
// for (let i = 2; i <= 9; i++){
//   let res =
//     [i,
//       i*2,
//       i*3,
//       i*4,
//       i*5,
//       i*6,
//       i*7,
//       i*8,
//       i*9,
//       i*10]
//   console.log(res)
//   // for (let j = 1; j <= 10; j++){
//   //   let res = i * j
//   //   console.log(res)
//   // }
// }

//10) Игра

function start() {
  let letsPlay = confirm('Такс, поиграем в игрушку? Загадай число от 0 до 100 и жми "OK"!')

  if (letsPlay) gameStarting();
}

function gameStarting() {
  let min = 0,
    max = 100,
    middle = parseInt(min + ((max - min) / 2)),
    final = 0,
    numberFound = false;

  while(!numberFound) {
    if (max - min === 1) {
      let isThisYours = confirm('Дай-ка угадаю, твое ведь число ' + min + '?)')

      console.log('MIN: ' + min, 'MAX: ' + max, 'AVG: ' + middle);

      if (isThisYours) {
        numberFound = true;

        gameOver();
      } else {
        isThisYours = confirm('Тяжелый случай.. Но теперь я точно угадаю, твое число - ' + max + '!')

        if (isThisYours) {
          numberFound = true;

          gameOver();
        }
      }
    } else {
      let biggerThanYours = confirm('Is your number more than ' + middle + '?');

      if (biggerThanYours) {
        min = middle + 1;
      } else {
        max = middle - 1;
      }

      middle = parseInt(min + ((max - min) / 2))

      console.log('MIN: ' + min, 'MAX: ' + max, 'AVG: ' + middle);
    }
  }
}

function gameOver() {
  alert('Это было слишком легко для меня :) Если думаешь что сможешь меня победить в другой раз, просто еще раз нажмешь на кнопку "играть"!');
}