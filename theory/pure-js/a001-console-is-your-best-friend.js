/**
 * Podstawową metodą sprawdzania "co się dzieje ?!"
 * jest w JavaScript obiekt dostępny w przestrzeni globalnej: console
 *
 * obiekt ten posiada metodę .log()
 * Której możemy podać N argumentów, zostaną one pokazane na "konsoli".
 * Czyli będą dla nas widoczne.
 *
 * Jeśli podasz więcej niż 1 argument, to zobaczysz te elementy rozdzielone spacją
 */

let welcomeMessage = 'Hello World';
const goodbyeMessage = 'Hello World';

console.log(welcomeMessage);
console.log(goodbyeMessage);

console.log('to', 'jest', 'przekazanie', 'wielu', 'argumentów', 'typu', 'string');

console.log(
	'dla',
						'wywołania',
	'metody',



		'białe znaki w kodzie nie mają znaczenia'
)


/*
Podstawowe zasady nazywania zmiennych:
		- staraj się stosować angielskie nazwy
		- używaj notacji camelCase do rozdzielania słów w wielowyrazowych nazwach
		- używaj notacji SNAKE_CASE do nazywania "specjalistycznych" stałych
		- używaj notacji PascalCase do nazywania klas (funkcji z konstruktorem).

		zmienne -> najczęściej rzeczowniki (user), czasem przymiotniki (isLoggedIn)
		funkcje i metody -> najczęściej czasowniki (logOut)

Są to jedynie konwencje - jednak, jeśli zaczniesz je stosować od początku,
pomoże Ci się to odnaleźć za równo w kodzie innych - jak i z czasem podziękujesz sobie,
po powrocie do własnego kodu - za jego zwiększoną czytelność.
*/

const youCanUseNumberButNotInFront3 = 'test';

const youCanUseTwoSpecialChars_and$WhenNameThings = 'test2';

const youCannotUseSpacesOtherSpecialCharsOrNumbersInFront = 'nie wierz mi na słowo - zepsuj kod 😋!';



