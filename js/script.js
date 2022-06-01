// 1 - DATA COLLECT
let userKilometers = parseInt ( prompt ("Digita quanti km devi percorrere") );
let userAge = parseInt ( prompt ("Digita l'età del passeggero") );

// 2 - LOGIC PROCESS OF THE DIFFERENT PRICES
//standard ticket
const priceStandardTicket = parseInt (userKilometers * 0.21) ;

//tickets with discount - 20% discount if under18 & 40% discount if over65
let userTicket =  parseInt (priceStandardTicket) + "€";

if (userAge < 18) {
    userTicket = parseInt (priceStandardTicket - (priceStandardTicket * 0.2)) + "€";
} else if (userAge > 65) {
    userTicket = parseInt (priceStandardTicket - (priceStandardTicket * 0.4)) + "€";
}

// 3 - OUTPUT RESULT
userMessage = `Il prezzo del tuo biglietto è ${userTicket}`;
document.getElementById ("ticket-price") .innerHTML = userMessage;
