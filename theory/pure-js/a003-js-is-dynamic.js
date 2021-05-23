/**
 * Ponieważ JavaScript nie posiada tzw. twardego typowania
 * pozwala nam robić ze zmiennymi "co tylko nam przyjdzie do głowy"
 *
 * Złym pomysłem (przyzwyczajeniem) będzie tutaj:
 *  "dynamiczna zmiana typu zmiennej"
 *
 *  Słowem kluczowym "typeof" możesz łatwo zobaczyć jakiego zmienna jest typu prostego
 */

// UWAGA[!]
// ZŁY POMYSŁ na KODZIK:

// najpierw string:
let helloWorld = 'Hello World';
console.log(helloWorld, 'is:', typeof helloWorld);

// potem number:
helloWorld = 12333;
console.log(helloWorld, 'is:', typeof helloWorld);

// potem boolean:
helloWorld = true;
console.log(helloWorld, 'is:', typeof helloWorld);


// ---------------------------------------------------------------------
// Prawidłowy zapis tego kodu mógłby wyglądać następująco:
const myText = 'Hello World';
console.log(myText, 'is:', typeof myText);

const someNumber = 12333;
console.log(someNumber, 'is:', typeof someNumber);

const isAnAdmin = true;
console.log(isAnAdmin, 'is:', typeof isAnAdmin);

/*
* Na uwagę zasługują tutaj 2 rzeczy:
*
* 1. Nie oszczędzaliśmy stałych i nie zmienialiśmy dynamicznie ich typu!
* 2. Celowo użyliśmy słowa kluczowego "const" żeby określić stałe stosując zasadę:
*    "favor const over let"
*    - dopóki nie musisz mienić wartości, nie masz takiej potrzeby - stosujesz const,
*    - jeśli się to zmieni - to zmienisz na let -> patrz przykład poniżej
* */


// Robimy aplikację do zliczania osób przechodzących przez bramkę
// Tutaj musimy użyć let do zliczania, ponieważ zmieniamy tę wartość.

let countPeople = 0;

countPeople = countPeople + 1;
console.log('Bramka otwarta przechodzi osoba nr:', countPeople);

countPeople += 1; // zapis skrócony tego co powyżej
console.log('Bramka otwarta przechodzi osoba nr:', countPeople);

countPeople++; // zapis jeszcze bardziej skrócony tego co powyżej
console.log('Bramka otwarta przechodzi osoba nr:', countPeople);
