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

const data = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ]

  const user = `Hi! I'm ${data[0].name} and my email is ${data[0].email}`;

  console.log(user)

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


