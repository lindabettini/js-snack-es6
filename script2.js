/* Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
BONUS
Stampare in pagina oltre che in console! */

const teams = [
    {
        nome: 'Milan',
        punti: 0,
        falliSubuti: 0,
    },
    {
        nome: 'Juventus',
        punti: 0,
        falliSubuti: 0,
    },
    {
        nome: 'Inter',
        punti: 0,
        falliSubuti: 0,
    },
]

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min +1)) + min;

for (let i = 0; i < teams.length; i++) {
    const team = teams [i];

    team.punti = getRandomNumber(1, 100);
    team.falliSubuti = getRandomNumber(1, 50);
}

const newArray = [];

for (let i = 0; i < teams.length; i++) {
    const team = teams [i];
    const {nome, falliSubuti} = team;
    const newObject = { nome, falliSubuti};
    newArray.push(newObject);
}

console.log(newArray);