/**
 * W zasadzie mamy w JavaScript do dyspozycji 3 rodzaje pętli:
 *
 * 1. while
 * 2. do - while
 * 3. for
 *
 * dodatkowo pętla for ma kilka wariantów (for - of) (for - in)
 * powiemy sobie o nich przy omawianiu Array i Objects
 * */

// pętla while - obraca się dopóty, dopóki warunek logiczny, który sprawdza - będzie obliczał się do wartości: true
let flag = true;
while ( flag ) {
	console.log('Hello once')

	// ręcznie zmieniamy flagę na false, więc pętla się już nie obróci:
	flag = false;
}

// pętla do-while działa bardzo podobnie, jednak mamy pewność, że zawarta w jej bloku logika - wykona się przynajmniej raz
// innymi słowy warunek "while" sprawdzany jest dopiero na końcu obrotu pętli
do {
	console.log('Hello once again')
} while ( flag )

/*
	Pętla for, działa na bardzo podobnych zasadach jak w innych językach programowania
	Jest najbardziej elastyczna pod względem zastosowania
	posiada 3 części oddzielone znakiem średnika ;

	for([ustalenie wartości początkowych]; [warunek]; [wyrażenie wykonywane na koniec każdego obrotu pętli])
*/

// najczęstsze wykorzystanie:
for(let x = 10; x <= 15; x++) {
	console.log('count up...', x);
}

// Inny prosty przykład zastosowania:
/*
* Masz tekst na ekranie, który zawsze ma być przedstawiony jako:
* ---------
* | Hello |
* ---------
* ---------
* | Hello |
* ---------
* ---------
* | Hello |
* ---------
* */

// I teraz możemy to zapisać tak:
console.log('---------')
console.log('| Hello |')
console.log('---------')

console.log('---------')
console.log('| Hello |')
console.log('---------')

console.log('---------')
console.log('| Hello |')
console.log('---------')


// Ale to powtórzenie 3x tego samego kodu.
// Dzięki pętli która obróci się dokładnie 3 razy - możemy osiągnąć ten sam efekt, pisząc 3x mniej kodu:
// x = 3

// x = x - 1;
// x -= 1;
// x--;
for(let x = 3; x > 0; x--) {
	console.log('---------')
	console.log('| Hello |')
	console.log('---------')
}
// console.log(x);
// JavaScript REPL pokazuje ten kod jakby boxy były obok siebie - jest to uproszczenie,
// Tak na prawdę są one jedno pod drugim zobacz używając Node.js (z terminala):
// node a004-use-loops-for-repetitions.js



// Jako bonus:
// pętla która nigdy się nie wykona, ponieważ "zahardkodowaliśmy" wartość false:
for(;false;) {
	console.log('FOR NEVER !')
}
