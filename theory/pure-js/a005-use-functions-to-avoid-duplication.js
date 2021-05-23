/**

 Dlaczego funkcje są tak ważnym elementem ?

 Po 1 pozwalają one na "zamknięcie" części naszego kodu i wywołanie go w dowolnym momencie.
 Po 2 powodują iż nie musimy się powtarzać z kodem
 Po 3 możemy zdefiniować ich parametry wejściowe i na ich podstawie zwracać wynik działania

 */

// Spójrzmy na przykład z loop jeszcze szerzej:
// Mamy teraz za zadanie zrobić te same boxy, ale każdy z nich ma mieć inny tekst,
// loop to trochę zbyt statyczny koncept... jednak jakby zamknąć logikę w funkcji !!!?!

// oto definicja funkcji printBox:
function printBox(slogan) {
	// slogan jest tzw. parametrem wejściowym - możemy ich zdefiniować N, rozdzielając przecinkiem
	console.log('---------');
	console.log('|', slogan, '|');
	console.log('---------');
}

// W tym momencie mamy przygotowaną logikę, które pozwala nam wywołać Box z różnymi napisami:

// Oto wywołania funkcji printBox, każde z innym argumentem:
printBox('Hello');
printBox('Motor');
printBox(' How ');
printBox(' are ');
printBox(' you ');

// No i tak... wiadomo, akurat dobrałem takie słowa żeby idealnie mieściły się w boxie,
// Jednak nie ma to większego znaczenia - można dokonać tzw. REFACTORINGU - poprawy działania naszej funkcji
// pozostawiam zapis powyżej a niżej - rozwiązanie tego problemu:

function printAccurateBox(slogan) {
	const noOfLetters = slogan.length; // pobierz aktualną ilość liter
	const dashesLength = noOfLetters + 4; // ustal długość na ilość liter słowa + 4 znaki -;
	const dashedLine = '-'.repeat(dashesLength); // powtórz znak '-' ustaloną ilość razy
	// I teraz rysujmy pudełko:
	console.log(dashedLine);
	console.log('|', slogan, '|');
	console.log(dashedLine);
}

printAccurateBox('some test');
printAccurateBox('Is it working?');


// Funkcja z 2 parametrami:
function greetings(name, luckyNumber) {
	console.log('Hello', name)
	console.log('Your lucky number is', luckyNumber)
}
// Podaje 2 argumenty:
greetings('Mike', 80);

// zobacz co się stanie jeśli nie podasz żadnego argumentu:
// greetings()


// Funkcja może zwracać wartość:
function giveMeSomeValue() {
	return 'Hello Value';
}

// Po wywołaniu możemy ją odebrać:
const theValue = giveMeSomeValue();
console.log(theValue);

// Można też od razu wrzucić wynik wywołania funkcji do kolejnej metody - jako jej argument:
console.log(giveMeSomeValue());

// A co zwraca funkcja która nic nie zwraca ?!:
function iReturnNothing() {}
console.log(iReturnNothing());

// Zacznij przyzwyczajać się do tego że undefined będzie oznaczało w JavaScript brak wartości,
// Pamiętaj, że taka sama zasada dotyczy parametrów (powyżej)
// Przypomnij sobie zapis z let bez ustalenia wartości, występuje tu ten sam efekt

let iAmUndefined;
console.log(iAmUndefined);

// Zauważ, że taki zapis nie jest możliwy z const [!]
// Stała zawsze musi posiadać przypisanie - nie tylko definicje
// Odkomentowanie linii poniżej spowoduje błąd:
// const constTest;

// Wracając do funkcji...
// Mogą one być zapisane nie tylko jako definicje ale również jako "wyrażenie funkcji" (function expression)
// Wygląda to bardzo podobnie do przypisania zmiennej / stałej
// W tym układzie funkcja nie potrzebuje mieć swojej nazwy - skorzystamy z niej po nazwie zmiennej,
// do której została przypisana

// Wyrażenie funkcji:
const sumMyNumbers = function(a, b) {
	return a + b;
}

console.log(sumMyNumbers(10, 20));
console.log(sumMyNumbers(102, 23));

// Po 2015r. do JavaScript wchodzi również zapis tzw. arrow function
// Mogą one być zapisywane TYLKO jako wyrażenia funkcji, ich zadaniem jest uproszczenie zapisu
// Porównaj z funkcją powyżej:
const sumMyOtherNumbers = (a, b) => a + b;

console.log(sumMyOtherNumbers(20, 10))
console.log(sumMyOtherNumbers(23, 102))

// Efekt działania jest ten sam. Jednak zapis skrócony.
// Jeśli coś oblicza nam się do wartości to możemy w funkcji arrow => pominąć słowo kluczowe "return"
// Zwrócony zostanie wynik dodawania a + b !


// Inne przykłady działania:

const greeting = ( name ) => 'Hello ' + name;
const greetingWhenOneParam = name => 'Hello ' + name;
const greetingWhenMultiLinesNeeded = ( name ) => {
	// Funkcja arrow również może być multiline, wtedy użyjemy już "return".
	return  'Hello ' + name;
};

console.log(greeting('Kris'))
console.log(greetingWhenOneParam('Bianka'))
console.log(greetingWhenMultiLinesNeeded('John'))


