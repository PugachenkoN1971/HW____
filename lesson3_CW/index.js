/************************************************************************************************/

/*  зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
       1. перебрати його циклом while
       2. перебрати його циклом for
       3. перебрати циклом while та вивести  числа тільки з непарним індексом
       4. перебрати циклом for та вивести  числа тільки з непарним індексом
       5. перебрати циклом while та вивести  числа тільки парні  значення
       6. перебрати циклом for та вивести  числа тільки парні  значення
       7. замінити кожне число кратне 3 на слово "okten"
       8. вивести масив в зворотньому порядку.
       9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
/*************************************************************************************************/
document.write(`<h1>ClassWork_JS #3</h1>`)
/* 1. перебрати його циклом while */
let massiv1=[2,17,13,6,22,31,45,66,100,-18];

console.log('___1___while__________________');
let i=0;
while(i<massiv1.length) {
    console.log('Massiv1 [',i,']=', massiv1[i]);
    i++;
}
/* 2. перебрати його циклом for */
console.log('___2___for__________________');
for(i=0; i<massiv1.length; i++) {
    console.log('Massiv1 [',i,']=', massiv1[i]);
}
/* 3. перебрати циклом while та вивести  числа тільки з непарним індексом  */
console.log('___3___while____непарные индексы__________________');
i=1;
while(i<massiv1.length) {
    console.log('Massiv1 [',i,']=', massiv1[i]);
    i+=2;
}
/*  4. перебрати циклом for та вивести  числа тільки з непарним індексом  */
console.log('___4___for____непарные индексы______________');
for(i=1; i<massiv1.length; i+=2) {
    console.log('Massiv1 [',i,']=', massiv1[i]);
}
/* 5. перебрати циклом while та вивести  числа тільки парні  значення */
console.log('___5___while____парные индексы__________________');
i=2;
while(i<massiv1.length) {
    console.log('Massiv1 [',i,']=', massiv1[i]);
    i+=2;
}
/* 6. перебрати циклом for та вивести  числа тільки парні  значення  */
console.log('___6___for____парные индексы______________');
for(i=2; i<massiv1.length; i+=2) {
    console.log('Massiv1 [',i,']=', massiv1[i]);
}
/* 7. замінити кожне число кратне 3 на слово "okten" */
console.log('___7___Замінити кожне число кратне 3 на слово "okten"______________');
let ost;
for(i=0; i<massiv1.length; i++) {
    ost=massiv1[i]%3;
    if(ost===0) {
        massiv1[i]="okten";
    }
    console.log('Massiv1 [',i,']=', massiv1[i]);
}
/* 8. вивести масив в зворотньому порядку */
console.log('____вивести масив в зворотньому порядку____');
for(i=massiv1.length-1; i>=0; i--) {
    console.log('Massiv1 [',i,']=', massiv1[i]);
}
/* 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)  */
/* 91 */
massiv1=[2,17,13,6,22,31,45,66,100,-18];
console.log('____9-1___while___вивести масив в зворотньому порядку_____');
i=massiv1.length-1;
while(i>=0) {
    console.log('Massiv1 [',i,']=', massiv1[i]);
    i--;
}
/* 92 */
console.log('____9-2___for___вивести масив в зворотньому порядку_____');
for(i=massiv1.length-1; i>=0; i--) {
    console.log('Massiv1 [',i,']=', massiv1[i]);
}
/* 93 */
console.log('____9-3___while____непарные индексы___вивести масив в зворотньому порядку_______________');
i=massiv1.length-1;
while(i>=0) {
    console.log('Massiv1 [',i,']=', massiv1[i]);
    i-=2;
}
/*  94  */
console.log('____9-4___for____непарные индексы___вивести масив в зворотньому порядку___________');
for(i=massiv1.length-1; i>=1; i-=2) {
    console.log('Massiv1 [',i,']=', massiv1[i]);
}
/* 95 */
console.log('___9-5___while____парные индексы___вивести масив в зворотньому порядку_______________');
i=massiv1.length-2;
while(i>=2) {
    console.log('Massiv1 [',i,']=', massiv1[i]);
    i-=2;
}
/* 96 */
console.log('___9-6___for____парные индексы____вивести масив в зворотньому порядку________________');
for(i=massiv1.length-2; i>=2; i-=2) {
    console.log('Massiv1 [',i,']=', massiv1[i]);
}
/* 7. замінити кожне число кратне 3 на слово "okten" */

console.log('___9-7_____Замінити кожне число кратне 3 на слово "okten"______________');
 ost;
for(i=massiv1.length-1; i>=0; i--) {
    ost=massiv1[i]%3;
    if(ost===0) {
        massiv1[i]="okten";
    }
    console.log('Massiv1 [',i,']=', massiv1[i]);
}
/*****/