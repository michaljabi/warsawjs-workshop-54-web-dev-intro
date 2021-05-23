/**
 * JavaScript posiada tzw. literały obiektowe.
 * Pozwalają one utworzyć dany obiekt - bez potrzeby definiowania jego struktury
 * Tak jak dzieje się to w językach zorientowanych obiektowo - które używają klas.
 *
 * Na początek prosty przykład....
 */

const emptyObject = {};

console.log(emptyObject);

const user = {
	name: 'Janek'
}
console.log(user);

// Pole obiektu można odczytać:
console.log(user.name);

// Pole do obiektu + wartość można dodać dynamicznie:
user.lastName = 'Kowalsky';

console.log(user);
console.log(user.name);
console.log(user.lastName);

// Pole można dynamicznie zmienić:

user.lastName = 'Nowak';

console.log(user);
console.log(user.lastName);

// Lub usunąć:
delete user.name

console.log(user);


// Obiekty mogą posiadać metody - są to po prostu funkcje - z tym, że na obiektach :)

const superUser = {
	name: 'Kate',
	age: 30,
	walk() {
		console.log('Walking...')
	},
	sayHello(to) {
		console.log('Hello', to)
	}
}

superUser.walk();
superUser.walk();
superUser.sayHello('Jen');


// Do pól obiektu można odnieść się w sposób dynamiczny.
// Na przypomnij sobie:
console.log(superUser.age)
// można to "wyciągnąć" również tak:
console.log(superUser['age'])
// co daje Ci możliwość zapisania tak:
const myKey = 'age'
console.log(superUser[myKey]);


