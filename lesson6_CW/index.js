/**********************************************************************************/
/*
    1. Дано список імен.
       let n1 = 'Harry..Potter'
       let n2 = 'Ron---Whisley'
       let n3 = 'Hermione__Granger'
       Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
       let n1 = 'Harry Potter'
       let n2 = 'Ron Whisley'
       let n3 = 'Hermione Granger'


    2. Створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
    3. Cтворити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
       Відсортувати його за допомоги sort
- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
 відфільтрувати  його за допомоги filter, залишивши тільки парні числа
- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums('ascending') // [3,11,21]
sortNums('descending') // [21,11,3]

*/

/*
- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
-- відсортувати його за спаданням за monthDuration
-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
/************************************************************************************/
/*     1. Дано список імен.                */
/*         let n1 = 'Harry..Potter'        */
/*         let n2 = 'Ron---Whisley'        */
/*         let n3 = 'Hermione__Granger'    */
/*  Написати функцію, яка приймає будь яке */
/*  не валідне імя, та нормалізує його в   */
/*   наступнйи вигляд                      */
/*          let n1 = 'Harry Potter'        */
/*          let n2 = 'Ron Whisley'         */
/*          let n3 = 'Hermione Granger'    */
/*******************************************/
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
const chistFoo = (str) => {
    let strProbel = [];
    if (str.includes('.')) {
        strProbel = str.replaceAll('.', ' ');
    } else if (str.includes('-')) {
        strProbel = str.replaceAll('-', ' ');
    } else if (str.includes('_')) {
        strProbel = str.replaceAll('_', ' ');
    }
    return strProbel;
}
document.write(`<h3>${n1}</h3>`);
document.write(`<h3>${chistFoo(n1)}</h3>`);

document.write(`<h3>${n2}</h3>`);
document.write(`<h3>${chistFoo(n2)}</h3>`);

document.write(`<h3>${n3}</h3>`);
document.write(`<h3>${chistFoo(n3)}</h3>`);

/* 2. Створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100. */
const sluchChisla = (razmer) => {
  let i;
  let massSluchChisl=[];
  for(i=0;i<razmer;i++) {
      massSluchChisl[i]=Math.floor(Math.random()*100);
  }
  return massSluchChisl;
}
console.log(sluchChisla(10));
/* 3. Cтворити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. */
/*    Відсортувати його за допомоги sort  */































