/* SNACK 4
Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
ES (marco de iulio => Marco de iulio);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
BONUS  nei nomi sulle targhe l'iniziale di ogni parola deve essere maiuscola
ES.: (marco de iulio  => Marco De Iulio) */

// // Functions
const capitalize = word => {
    const firstLetter = word.charAt(0).toUpperCase(); 
    const remainingLetters = word.substring(1).toLowerCase();
    return firstLetter + remainingLetters;
};

const capitalizeAll = word => {
    const words = word.split(' ');
    const capitalizedWords = words.map((item) => capitalize(item));
    const result = capitalizedWords.join(' ');
    return result;
};

capitalizeAll('lucia de IULIO');

let students = [
    { name: 'luisa de IULIO', id: '457', grades: '78'},
    { name: 'linda', id: '457', grades: '78'},
    { name: 'lorenzo', id: '457', grades: '78'},
    { name: 'luigi', id: '457', grades: '78'},
    { name: 'ludovica', id: '457', grades: '78'},
    { name: 'lucrezia', id: '457', grades: '78'},
];

const targheStudenti = students.map((student) => {
    const capitalizedName = capitalizeAll(student.name); 
    return capitalizedName;
});

const highGradesStudent = students.filter((student) => student.grades > 70);

const highIdAndGradesStudent = students.filter((student) => student.grades > 70 && student.id > 120);

console.log(targheStudenti);