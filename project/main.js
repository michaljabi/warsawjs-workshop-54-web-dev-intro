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
