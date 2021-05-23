/*
* Zbiór różnych ciekawych "trików" dla Object i Array
* */

// >> ARRAY << //
const fruits = ['apple', 'banana', 'mango', 'cherry'];

// zliczenie wszystkich elementów
console.log(fruits.length);

// odczytanie ostatniego elementu:
console.log(fruits[fruits.length - 1]);

// przechodzenie po elementach + indeksy
fruits.forEach((fruit, idx) => {
	console.log(idx, fruit);
})

// sprawdzenie czy dany element występuje w tablicy:
console.log(fruits.includes('banana'));
console.log(fruits.includes('Banana'));
console.log(fruits.includes('lychee'));

// posortowanie elementów w tablicy
console.log(fruits.sort())

// sortowanie wpływa na aktualną tablicę - ten układ już zostaje:
console.log(fruits)

// tzw. Destrukturyzacja tablicy (przypisanie 2 elementów z tablicy do stałych):
const [app, ban] = fruits;
console.log(app)
console.log(ban)
// To powyżej dawniej dało się zrobić głównie tak:
const fist = fruits[0];
const second = fruits[1];
console.log(fist)
console.log(second)


// >> OBJECT << //

const car = {
	manufacturer: 'Mercedes',
	model: 'E220',
	year: 2009
}

// Przejście po kluczach obiektu -> ZWRÓĆ UWAGĘ pętla to for - in (a nie for-of !!)
// for...of jest do kolekcji iterowalnych: string, tablica, Map, Set etc.
for(const key in car) {
	console.log(key);
}

// Utworzenie listy kluczy (properties) obiektu w postaci tablicy:
const keyArray = Object.keys(car);
console.log(keyArray);

// Utworzenie listy wartości (values) obiektu w postaci tablicy:
const valueArray = Object.values(car);
console.log(valueArray);

// tzw. Destrukturyzacja obiektu:
const {model, year} = car;
console.log(model)
console.log(year)
// To powyżej dawniej dało się zrobić głównie tak (celowe nazwy model2 i year2 żeby uniknąć kolizji nazw):
const model2 = car.model;
const year2 = car.year;
console.log(model2)
console.log(year2)
