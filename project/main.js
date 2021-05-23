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

// Event listener możesz podpiąć do dowolnego elementu,
// do którego masz referencje:

// h1element.addEventListener('click', function() {
//     alert('Hello!')
// })

/*
    Zadanie 2:
    Upewnij się że selektujesz dodane buttony w HTML:
*/
const btnPaper = document.getElementById('btn-paper');
const btnRock = document.querySelector('#btn-rock');
const btnScissors = document.querySelector('#btn-scissors');

console.log(btnPaper, btnRock, btnScissors)

/*
    Zadanie 3:
    Podepnij eventListener 'click' do buttonów i wyświet na konsoli
    odpowiednie wartości w zależności od wyboru: rock, paper, scissors
*/

btnPaper.addEventListener('click', function() {
    console.log('paper')
});

btnRock.addEventListener('click', function() {
    console.log('rock')
});

btnScissors.addEventListener('click', function() {
    console.log('scissors')
});

