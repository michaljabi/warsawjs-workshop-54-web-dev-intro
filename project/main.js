/*
* Zadanie na start:
*
* ~ Ustalamy tytuł naszej gry.
*
*
* W element h1 znajdujący się w header.hero,
* wpisz z poziomu JavaScript tekst: "Papier Kamień czy Nożyce ?!"
*
* */

const gameTitle = 'Papier Kamień czy Nożyce ?!';

const h1element = document.querySelector('h1#game-title');
h1element.textContent = gameTitle;

/*
    Zadanie 2:
    Upewnij się że selektujesz dodane buttony w HTML:
*/
const btnPaper = document.getElementById('btn-paper');

const btnRock = document.querySelector('#btn-rock');
const btnScissors = document.querySelector('#btn-scissors');

console.log(btnPaper, btnRock, btnScissors)


