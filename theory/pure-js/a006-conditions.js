/**
 *  Jeśli chodzi o instrukcje warunkowe, rozróżniamy:
 *
 *  if() {}
 *  else if() {}
 *  else {}
 *
 *  switch {
 *    case:
 *    break;
 *  }
 *
 *  ternary operator
 *  const variable = condition ? valueIfTrue : valueIfFalse
 *
 *  możemy również wykorzystać operatory logiczne
 *
 * Uwaga:
 * W JavaScript musimy uważać na porównania.
 * Trzeba używać === znaku porównania, aby upewnić się, że zmienne nie tylko tej samej wartości
 * ale również - tego samego typu!
 *
 * zobacz
 * https://dorey.github.io/JavaScript-Equality-Table/
 * */


const myNumber = 1;

console.log(myNumber === 0);
console.log(myNumber === 1);
console.log(myNumber === 2);

if(myNumber === 1) {
	console.log('Warunek zwraca - true')
} else {
	console.log('Kod do wykonania jeśli nieprawda...')
}

// Tutaj moglibyśmy zapisać kilka różnych warunków,
// Załóżmy przykład:
// Gra ma kilka różnych faz - w zależności od początku istnienia każdej z faz,
// chcemy wyświetlić odpowiedni komunikat.
// Jednak faz jest 3, jedna to sart, potem mamy "rozgrywkę w trakcie" i koniec.
// Instrukcja if / else nie wystarczy potrzebujemy jeszcze jednego bloku "else if"
// których w naszej całej instrukcji warunkowej może być N.

let gameStage = 'start';

if(gameStage === 'start') {
	console.log('Zaczynamy rozgrywkę!');
} else if (gameStage === 'end') {
	console.log('Koniec gry!');
} else {
	console.log('w trakcie pojedynku...');
}


// Docelowo jeśli Twój if - else if - else - puchnie,
// czasem warto rozważyć instrukcje warunkową switch:
// wtedy "przełączamy" sie w zależności od wartości podanej do switch()
// odpowiednie "case" zamykane są wtedy przez "break"

let hello = 'witaj';

switch(hello) {
	case 'witaj':
		console.log('logika do witaj...');
		break;
	case 'żegnaj':
		console.log('logika do witaj...');
		break;
	default:
		console.log('Inna... nieznana wartość')
}

// Jeśli masz następującą sytuację:
let sayCommand;
if(hello === 'witaj') {
	sayCommand = 'WELCOME';
} else {
	sayCommand = 'GOODBYE';
}
console.log(sayCommand);


// Możesz zapisać to w skrócie - korzystając z ternary operatora:
const result = hello === 'witaj' ? 'WELCOME' : 'GOODBYE';
console.log(result);
