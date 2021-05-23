/**
 * W JavaScript posiadamy 7 typów prostych (stan na ES11 - rok 2020).
 *
 * Przekazywane są one po przez wartości (rozjaśni Ci się jak poznasz typy złożone).
 * Możemy dzięki nim zapisać podstawowe informacje jako string, boolean, number etc.
 */


// Wszystkie typy proste:
console.log('my sample') // string [1]
console.log(true) // boolean [2]
console.log(123) // number [3]
console.log(123n) // bigint [4]
console.log(Symbol()) // Symbol [5]
console.log(null) // null [6]

let myUndefined;
console.log(myUndefined) // undefined [7]

// STRINGS
// ----------------------------------------------------------------------------------------------
// Operacje, które są popularne na stringach:
const myString = 'My Sample Text';
console.log('connect' + ' two ' + 'strings');
console.log(myString + '😎');

let myLetters = 'a...';
myLetters += 'b';
myLetters += 'c';
myLetters += 'd';
myLetters += 'e';
console.log(myLetters);

// Przykładowe, wbudowane metody:
console.log('>> STRINGS:');
console.log(myString.substring(3));
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.charAt(4));
console.log('Hello World'.charAt(6));
console.log('Hello World'.slice(-5));
console.log('Ha'.repeat(10));
console.log(String.fromCharCode(65));
// więcej: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


// NUMBERS
// ----------------------------------------------------------------------------------------------
// Operacje, które są popularne na numerach:
// Number (w JavaScript nie ma rozróżnienia typu wg. Integer, Double, Float etc.!)
// jest jeden typ. może on zawierać za równo liczby zmiennoprzecinkowe jak i całkowite (precyzja jak w double)
const myNumber = 123;
console.log('Dodawanie', 9 + 10 + 20);
console.log('Odejmowanie', 14 - 2 - 1 - 1);
console.log('Mnożenie', 4.3 * 2);
console.log('Dzielenie', 4 / 2);
console.log('Potęgowanie', 4 ** 2);
// do pierwiastkowania musimy użyć wbudowanej w natywny JS: Math.sqrt();
console.log('Reszta z dzielenia', 80 % 3);
console.log('Kolejność działań :) ', 2 + 2 * 2);

// Przykładowe, wbudowane metody:
console.log('>> NUMBERS:');
console.log(myNumber.toFixed(3));
console.log(Number.isInteger(2.3));
console.log(Number.parseInt('00110001111101', 2));
console.log(Number.parseInt('00110001111101', 10));
// więcej: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// Operacje matematyczne związane z natywnym obiektem Math
// Uwaga: Math to nie typ prosty!, ale pomaga nam z operacjami na Number
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
console.log(Math.PI)
console.log(Math.random())
console.log(Math.floor(3.8))
console.log(Math.ceil(3.2))
console.log(Math.round(3.5))
console.log(Math.sqrt(9))
console.log(Math.sqrt(25))

// BOOLEANS (prawda / fałsz)
// ----------------------------------------------------------------------------------------------
// Operacje, które są popularne na boolach:
// Boolean (dwa stany: prawda i fałsz)
let myBoolean = true;

console.log('Porównanie:', true === true)
console.log('OR:', false || true)
console.log('AND:',true && false)
console.log('NOT:',!false)

// Przykładowa, wbudowana metoda:
console.log('>> BOOLEANS:');
console.log(myBoolean.toString());
// więcej: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean


// sprawdzenie jakiego typu jest dana zmienna:
const yourLuckyNumber = 7;
const whatAreYou = `Twój szczęśliwy numerek to: ${yourLuckyNumber} 😃`;
console.log(typeof whatAreYou);

console.log(whatAreYou);
