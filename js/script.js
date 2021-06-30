// variabili

var firstName = document.getElementById("name");
var lastName = document.getElementById("surname");
var color = document.getElementById("color");
var password = document.getElementById("pass");
var numberRandom = "21";

console.log(firstName, lastName, color, password);

// nome utente

var userName = prompt("Inserisci il tuo nome");
console.log("userName: " + userName);
firstName.innerText = "Nome: " + userName; 

// cognome utente

var userSurname = prompt("Inserisci il tuo cognome");
console.log("userSurname: " + userSurname);
lastName.innerText = "Cognome: " + userSurname;

// colore preferito

var favoriteColor = prompt("Inserisci il tuo colore preferito");
console.log("favoriteColor: " + favoriteColor);
color.innerText = "Colore: " + favoriteColor;

// genera password

password.innerHTML = "<em>" + userName + userSurname + favoriteColor + numberRandom + "</em>";
