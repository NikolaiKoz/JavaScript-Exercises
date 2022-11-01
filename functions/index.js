// 1) Crear una función que tome dos parámetros y devuelva un console.log() con el
// resultado de la suma dentro del bloque de ejecución de la función. Invocar
// la función al menos tres veces

console.log('Ej. 1)');


const sum = (a, b) => { console.log(a + b)};

sum(5, 3);
sum(4, 2);
sum(10, 10);

// 2) Crear una función que tome dos parámetros y devuelva un console.log() con el
// resultado de la resta dentro del bloque de ejecución de la función. Invocar
// la función al menos tres veces
console.log('\n\nEj. 2)');

const sub = (a, b) => console.log(a - b);

sub(5, 3);
sub(4, 2);
sub(10, 10);

// 3) Crear una función que tome dos parámetros y devuelva un console.log() con el
// resultado de la multiplicación dentro del bloque de ejecución de la función.
// Invocar la función al menos tres veces
console.log('\n\nEj. 3)');

const mult = (a, b) => console.log(a * b);

mult(5, 3);
mult(4, 2);
mult(10, 10);

// 4) Crear una función que tome dos parámetros y devuelva un console.log() con el
// resultado de la división dentro del bloque de ejecución de la función.
// Invocar la función al menos tres veces

console.log('\n\nEj. 4)');

const div = (a, b) => console.log(a / b);

div(5, 3);
div(4, 2);
div(10, 10);

// 5) Crear un array con al menos cinco frutas y crear una función que recorra el
// array al ser invocada, devolviendo los nombres de las frutas por consola,
// dentro del bloque de ejecución.
console.log('\n\nEj. 5)');

const myArr = ['Apple', 'Orange', 'Tomato', 'Banana', 'Grapes'];

const readMyArr = myArr.map( a => console.log(a));


// 6) Crear una función que recorra un array de diez animales y devuelva los
// nombres por consola dentro del bloque de ejecución
console.log('\n\nEj. 6)');

const myArrAnimals = ['Dog', 'Cat', 'Bird', 'Snake', 'Loros', 'Rabbit', 'Spider', 'Cow', 'Dragon', 'Bear'];

const readMyArrAnimals = myArrAnimals.map( a => console.log(a));

// 7) Crear una función que permite reducir los puntos 1 al 4 en una sola función,
// por lo cual deberá tomar tres parámetros: Los valores a procesar y la
// operación aritmética a resolver.
console.log('\n\nEj. 7)');


const calculator = (option, a, b) => {
    if(option === 1){
        sum(a, b);
    } else if( option === 2){
        sub(a, b);
    } else if( option === 3){
        mult(a, b);
    } else if( option === 4){
        div(a, b);
    }
}

calculator(1, 5, 10);
calculator(2, 5, 10);
calculator(3, 5, 10);
calculator(4, 5, 10);

// 8) Crear una función que tome el primer elemento del array obtenido en
// https:jsonplaceholder.typicode.com/users y que retorne el nombre del
// usuario con su correo. La función debe mostrar el resultado por consola al
// momento de ser invocada.
console.log('\n\nEj. 8)');

// 9) Pedirle cinco números al usuario, almacenarlos para luego crear una función
// que los ordene de menor a mayor y otra función que los ordene de mayor a
// menor
// console.log('\n\nEj. 9)');

// const arrayAnswer = [];
// let i = 0;
// do {
//     // let answer = prompt('Enter a number');
//     arrayAnswer.push(answer);
//     i++;
// } while (i < 5);

// console.log(arrayAnswer);

// const order = (a) => a.sort();

// const orderArray = order(arrayAnswer)

// console.log(orderArray);

// 10) ¿Qué son los eventos en JS? Buscar información y debatir en el grupo
// sobre el funcionamiento de:
// a) onclick
// b) onchange
// c) onkeydown
// d) onmouseover
// e) onsubmit
// f) onscroll

// 11) Crear una función que cambie una cadena de texto a minúsculas (sin
//     importar el formato de ingreso)
console.log('\n\nEj. 11)');

const originalString = 'This Is an ORIGInal Sting with methodts TO TRANSFORM in lowercase.'

const transform = originalString.toLocaleLowerCase();

console.log(transform);

// 12) Crear una función a gusto y que resuelva un problema que gusten.
console.log('\n\nEj. 12)');
const hi = (name) => console.log(`Hi! ${name} your are welcome! or not?`);

hi('Jose');


