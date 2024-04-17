// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

function task1() {
  const year = prompt('Вкажіть Ваш вік - і я скажу, хто Ви)')
  let res;
  if (year < 12) {
    res = 'Ви дитина.';
  } else if (year >= 12 && year < 18) {
    res = 'Ви підліток.';
  } else if (year >= 18 && year < 60) {
    res = 'Ви дорослий.';
  } else if (year >= 60 && year < 110) {
    res = 'Ви пенсіонер.';
  } else {
    res = 'Ви ввели некоректні дані.'

  }
  alert(`${res}`)
}

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

function task2() {
  const numberSymbol = prompt(`Напишіть число від 0 до 9, а я покажу Вам спецсимвол, який розташований на цій клавіші.`);
  let res;
  switch (numberSymbol) {
    case "1":
      res = '!';
      break;
    case "2":
      res = '@';
      break;
    case "3":
      res = '#';
      break;
    case "4":
      res = '$';
      break;
    case "5":
      res = '%';
      break;
    case "6":
      res = '^';
      break;
    case "7":
      res = '&';
      break;
    case "8":
      res = '*';
      break;
    case "9":
      res ='(';
      break;
    case "0":
      res = ')';
      break;
    default:
      res = 'Ви ввели некоректні дані.';
  }
  alert(`${res}`)
}


// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
function task3() {
  const n1 = parseInt(prompt(`Напишіть перше число.`));
  const n2 = parseInt(prompt(`Напишіть друге число.`));
  if (isNaN(n1) || isNaN(n2)) {
    alert(`Ви ввели некоректні дані.`)
    return
  }

  let s = 0;
  let from = n1;
  let to = n2;
  if (n1 > n2) {
    from = n2, to = n1;
  }
  for (let i = from; i <= to; i++) {
    s += i;
  }
  alert(`Cумa всіх чисел в заданому діапазоні ${s}`);
}

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.
function task4() {
  const number1 = parseInt(prompt(`Напишіть перше число.`));
  const number2 = parseInt(prompt(`Напишіть друге число.`));
  if (isNaN(number1) || isNaN(number2) || number1 == 0 || number2 == 0) {
    alert(`Ви ввели некоректні дані.`);
    return
  }
  const min = number1 < number2 ? number1 : number2;
  let d = 0;

  for (let i = 1; i <= min; i++) {
    if (number1 % i == 0 && number2 % i == 0) {
      d = i
    }
  }
  alert(`Найбільший спільний дільник ${d}`);
}


//Запитай у користувача число і виведи всі дільники цього числа.
function task5() {
  const userNumber = parseInt(prompt(`Напишіть число.`));

  if (isNaN(userNumber) || userNumber == 0) {
    alert(`Ви ввели некоректні дані.`);
    return
  }

  let result = '';

  for (let i = 1; i <= userNumber; i++) {
    if (userNumber % i == 0) {
      result += ' ' + i
    }

  }
  alert(`Дільники цього числа: ${result}`)
}



//Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
function task6() {
  const numberSize5 = parseInt(prompt(`Напишіть п’ятирозрядне число.`));
  if (isNaN(numberSize5) || numberSize5 <= 9999 || numberSize5 >= 100000) {
    alert(`Ви ввели некоректні дані або не п’ятирозрядне число.`);
    return
  }
  const number_1 = parseInt(numberSize5 / 10000);
  const number_2 = parseInt(numberSize5 / 1000) % 10;
  const number_4 = parseInt(numberSize5 / 10) % 10;
  const number_5 = parseInt(numberSize5 % 10);
  if (number_1 == number_5 || number_2 == number_4) {
    alert(`Ваше число паліндром.`);

  } else {
    alert(`Ваше число не паліндром.`);
  }
}



// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

function task7() {
  const shopSumm = parseFloat(prompt(`Напишіть суму покупки.`));
  let a = 0;
  if (isNaN(shopSumm) || shopSumm < 0) {
    alert(`Ви ввели некоректні дані.`);
    return
  }

  if (shopSumm < 200) {
    res = `Нажаль, у Вас нема знижки. Мінімальна сума заказу для отримання знижки - 200 грн.`
  } else if (shopSumm >= 200 && shopSumm < 300) {
    a = shopSumm * 0.97;
    res = `Cумa до оплати зі знижкою: ${a} грн.`
  } else if (shopSumm >= 300 && shopSumm < 500) {
    a = shopSumm * 0.95;
    res = `Cумa до оплати зі знижкою: ${a} грн.`
  } else if (shopSumm >= 500) {
    a = shopSumm * 0.93;
    res = `Cумa до оплати зі знижкою: ${a} грн.`
  }
  alert(`${res}`)
}

// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

function task8() {
  let positiv = 0;
  let negativ = 0;
  let zero = 0;
  let par = 0;
  let notPar = 0;
  let i = 1;
  do {
    let number = parseInt(prompt(`Напишіть ${i} числo`));
    if (isNaN(number)) {
      alert(`Ви ввели не числo.`);
      continue
    }

    if (number === 0) {
      zero++
    } else if (number > 0) {
      positiv++
    } else {
      negativ++
    }
    if (number !== 0) {
      if (number % 2 === 0) {
        par++
      } else {
        notPar++
      }
    }

    i++
  } while (i <= 10)
  alert(`Додатніх - ${positiv}, від’ємних - ${negativ}, нулів - ${zero}, парних - ${par}, непарних - ${notPar}.`)

}


// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
function task9() {
  const a = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Cyбота', 'Неділя'];
  let days = -1;
  let weekDays
  do {
    days += 1;
    weekDays = days % 7

  } while (confirm(`День тижня ${a[weekDays]}. Хочеш побачити наступний день?`))
}


// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
function task10() {

  let min = 0;
  let max = 100;
  let midle = 0;
  let answer = 0;

  do {
    midle = parseInt((min + max) / 2);
    if (confirm(`Ваше число больше ${midle}?`)) {
      min = midle
      answer = midle + 1
    } else {
      max = midle
      answer = midle
    }
  } while (max - min > 1);
  alert(`Ви загадали ${answer}`)

}




// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
let multy = '';
for (let i = 2; i <= 9; i++) {
  multy += '<ul>'
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i*j}`)
    multy += `<li>${i} * ${j} = ${i*j} </li>`;
  }
  multy += '</ul>'
}
document.getElementById('multy_table').innerHTML = multy


// Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
function task12() {
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);

  if (isNaN(day) || isNaN(month) || isNaN(year) || day<1  || day>31 || month<1 || month>12 || year< 1970) {
    alert(`Ви ввели некоректні дані.`);
    return
  }


  const nDate = nextDay(day, month, year);
document.getElementById('date_result').innerHTML = `Next date is: ${nDate}`
}


function leapYear(y) {
  return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0
}

const addZero = n => n< 10?'0'+n: ''+n

function nextDay (dayIn=1, monthIn=1, yearIn=1970){
  let dayOut = dayIn + 1,
    monthOut = monthIn,
    yearOut = yearIn;


  switch (monthIn) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (dayIn === 31) {
        dayOut = 1;
        monthOut = monthIn + 1;
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (dayIn === 30) {
        dayOut = 1;
        monthOut = monthIn + 1;
      }
      break;
    case 2:
      if (leapYear(yearIn)) {
        if (dayIn === 29) {
          dayOut = 1;
          monthOut = monthIn + 1;
        }
      } else {
        if (dayIn === 28) {
          dayOut = 1;
          monthOut = monthIn + 1;
        }
      }
      break;
  }
if(monthOut === 13){
  monthOut = 1;
  yearOut =yearIn + 1;
}
return `${addZero(dayOut)} / ${addZero(monthOut)} / ${yearOut}`

}

