//chiedere all'utente i km che vuole percorrere e l'età del passeggero
let userKilometers = parseInt ( prompt ("Digita quanti km devi percorrere") );
console.log(userKilometers);

let userAge = parseInt ( prompt ("Digita l'età del passggero") );
console.log(userAge);



//il prezzo del biglietto standard è uguale a 0.21 € al km
const priceStandardTicket = parseInt (userKilometers * "0.21" + "€");


//applicare sconto 20% se under18 oppure sconto del 40% se over65
let userTicket = priceStandardTicket;
console.log(userTicket);

if (userAge < 18) {
    userTicket = priceStandardTicket * "0.2";
} else if (userAge > 65) {
    userTicket = priceStandardTicket * "0.4";
}

//stampare risultato con prezzo biglietto