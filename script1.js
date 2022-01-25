/* 
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare ain console la bici con peso minore utilizzando destructuring e template literal
*/

const bikes = [
    {
        name: 'Pinarello',
        weight: 10,
    },
    {
        name: 'Bianchi',
        weight: 8,
    },
    {
        name: 'Scott',
        weight: 11,
    }
];

// ° Preparo una variabile che conterra' l'oggetto più leggero 
let lightestBike = bikes[0];
console.log(lightestBike);

// ° Le peso tutte per vedere quale pesa meno 
for (let i = 0; i < bikes.length; i++) {
    const bike = bikes[i]; 
    const { weight } = bike; 
    if (weight < lightestBike.weight) lightestBike = bike;
}

console.log(lightestBike);

