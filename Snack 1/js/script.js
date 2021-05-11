// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

var biciclette = [
    {
        nome: "Bici Superveloce", 
        peso: 15
    }, 
    {
        nome: "Bici Veloce", 
        peso: 20
    }, 
    {
        nome: "Bici Media", 
        peso: 25
    }, 
    {
        nome: "Bici Lenta", 
        peso: 30
    }, 
    {
        nome: "Bici Lentissima", 
        peso: 35
    }
]; 

console.log(biciclette);

var biciLeggera = biciclette[0]; 

for (var i = 0; i < biciclette.length; i++) {

    if (biciclette[i].peso < biciLeggera.peso) {

        biciLeggera = biciclette[i]; 
    }
 
}

console.log("La bici più leggera è: " , biciLeggera);


