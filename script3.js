/*SNACK 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe.*/

const myArray = ['Luisa', 'Fabio', 'Caterina', 'Giovanni', 'Chiara', 'Valentina'];

/*
// // SOLUZIONE FOREACH
const arraySlice = (arr, start, end) => {
    const newArray = []; 
    arr.forEach((item, index) => {
        if (index >= start && index <= end)
        newArray.push(item);
    })
    return newArray; 
}
console.log(arraySlice(myArray, 2, 5));
*/

// // SOLUZIONE FILTER 
const arraySliceFilter = (arr, start, end) => {
    const newArray = arr.filter((item, index) => {
        if (index >= start && index <= end) {
            return true; 
        } else {
            return false;
        }
    });
    return newArray;
}

console.log(arraySliceFilter(myArray, 2, 5));