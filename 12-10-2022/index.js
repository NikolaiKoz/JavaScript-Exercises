var name = "Jose Luis Vallejos";
console.log(name);

var age = (2022 - 1995);
console.log(age);

var married = false;
console.log(married);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

var friends = ["Juan", "Ivan", "Cesar", "Leonardo", "Fabian"];
console.log(friends);

var object = {

    nameObject: "Jose Luis Vallejos",
    ageObject: (2022 - 1995),
    marriedObject: false,
    numbersObject: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    friendsObject: ["Juan", "Ivan", "Cesar", "Leonardo", "Fabian"],

};
console.log(object);

var User = {
    favoriteNumbers: [1, 2, 3, 4, 5],
    typemascotas: "Dog",
    mascotas : {

        pet1 : {
            name: "Marmota",
            age: 10 + " years old",
            race: "Labrador",
        },

        pet2 : {
            name : "Perla",
            age: 5 + "years old",
            rece: "Unknown",
        },
    },
    favoriteBand : "Linkin Park"
}

console.log(User);


//Como funciona las expresiones ternarias????

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  return strokes === 1
    ? names[0]
    : strokes <= par - 2
    ? names[1]
    : strokes === par - 1
    ? names[2]
    : strokes === par
    ? names[3]
    : strokes === par + 1
    ? names[4]
    : strokes === par + 2
    ? names[5]
    : names[6];
}

//POR QUE FUNCIONA CON EL RETURN FUERA DEL FOR Y VER EL prop IN de la linea 104 que hace????

// Configuración
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];

  function lookUpProfile(name, prop) {
    // Cambia solo el código debajo de esta línea
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (prop in contacts[i]) {
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
      return "No such contact";
    }
    // Cambia solo el código encima de esta línea
  }

  lookUpProfile("Akira", "likes");


  //VER LA RECURSIVIDAD
  // Cambia solo el código debajo de esta línea
function countdown(n){
  if (n === 1){
    return [];
  }
  const countArray = countdown( n - 1 );
  countArray.push(n);
  return countArray;
}
// Cambia solo el código encima de esta línea