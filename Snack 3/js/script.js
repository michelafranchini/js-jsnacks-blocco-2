// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

function myFunction (array, num1, num2) {

    var nuovoArray = []; 

    for (var i = num1; i < num2; i++) {
        nuovoArray.push(array[i]); 
    }

    return nuovoArray; 
}

var array1 = [1,2,3,4,5,6,7,8,9]; 

console.log(array1);
console.log(myFunction(array1, 3, 8));
