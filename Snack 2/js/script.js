// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

var squadre = [
    {
        nome: "AS Roma", 
        punti: 0,
        falli: 0 
    }, 
    {
        nome: "AC Milan", 
        punti: 0,
        falli: 0 
    }, 
    {
        nome: "FC Inter", 
        punti: 0,
        falli: 0 
    }, 
    {
        nome: "SS Lazio", 
        punti: 0,
        falli: 0 
    }, 
    {
        nome: "Juventus", 
        punti: 0,
        falli: 0 
    }, 
]; 

console.log(squadre);

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var squadreFalli = []; 

for (var i = 0; i < squadre.length; i++) {

    squadre[i].punti = getRandomNumber(1, 30);
    squadre[i].falli = getRandomNumber(1, 20);

    squadreFalli.push(squadre[i].falli, squadre[i]); 
}

// console.log(squadre);
console.log(squadreFalli);