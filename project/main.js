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
//const gameTitle = 'Papier <span style="color: red">Kamień</span> czy Nożyce ?!';

const h1element = document.querySelector('h1#game-title');
h1element.textContent = gameTitle;
// h1element.innerHTML = 'Wtedy rozumie <em>HTML</em>'

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

// console.log(btnPaper, btnRock, btnScissors)

/*
    Zadanie 3:
    Podepnij eventListener 'click' do buttonów i wyświet na konsoli
    odpowiednie wartości w zależności od wyboru: rock, paper, scissors
*/

const pcChose = 'paper';

btnPaper.addEventListener('click', function() {
    console.log('paper')
    if(pcChose === 'paper') {
        console.log('REMIS!')
    } else if(pcChose === 'scissors') {
        console.log('PRZEGRANA !')
    } else {
        console.log('WYGRANA !')
    }
});

btnRock.addEventListener('click', function() {
    console.log('rock')
    if(pcChose === 'rock') {
        console.log('REMIS!')
    } else if(pcChose === 'scissors') {
        console.log('PRZEGRANA !')
    } else {
        console.log('WYGRANA !')
    }
});

btnScissors.addEventListener('click', function() {
    console.log('scissors')
    if(pcChose === 'scissors') {
        console.log('REMIS!')
    } else if(pcChose === 'rock') {
        console.log('PRZEGRANA !')
    } else {
        console.log('WYGRANA !')
    }
});

/*
    Zadanie 4:
    Zefiniuj funkcję - która będzie przyjmować co wybrał użytkownik.
    Pod nazwanym parametrem będziemy mieć 'rock' / 'paper' lub 'scissors'
    -> Pokaż "przesłaną" wartość na console.log()
*/

