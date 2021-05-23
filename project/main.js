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



btnPaper.addEventListener('click', function() {
    playGameRound('paper') // przesyłam argument (wartość: 'paper')
});

btnRock.addEventListener('click', function() {
    playGameRound('rock')
});

btnScissors.addEventListener('click', function() {
    playGameRound('scissors')
});

/*
    Zadanie 4:
    Zefiniuj funkcję - która będzie przyjmować co wybrał użytkownik.
    Pod nazwanym parametrem będziemy mieć 'rock' / 'paper' lub 'scissors'
    -> Pokaż "przesłaną" wartość na console.log()
*/

const pcChose = 'paper';

/*
    Zadanie 5:
    Zdefiniuj logikę zwracania wygranej i przegranej
    w oparciu o wybór usera i komputera
    
*/

function playGameRound(playerChoise) {
    // console.log(playerChoise) // odebrałem wartość pod parametrem: playerChoise
    // #1 MAKE IT WORK ! - niech to działa
    // #2 Make it right - zrób to dobrze [code Refactoring]
    if(pcChose === playerChoise) {
        console.log('REMIS!')
    } else if(playerChoise === 'paper' && pcChose === 'rock') {
        console.log('Wygrana!')  
    } else if(playerChoise === 'rock' && pcChose === 'scissors') {
        console.log('Wygrana!')  
    } else if(playerChoise === 'scissors' && pcChose === 'paper') {
        console.log('Wygrana!')
    } else {
        console.log('Przegrałeś !!')
    }
    /*
    else if() {
        console.log('Wygrana!')
    } else {
        console.log('Przegrałeś !!')
    }
    */
    // Warunki wygranej
    // user: paper => rock
    // user: rock => scissor
    // user: scissors => paper
    // Wszysko pozoatałe:
    // to przegrana!
}

