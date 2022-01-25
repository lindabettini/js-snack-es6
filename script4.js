/* SNACK 4
Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
ES (marco de iulio => Marco de iulio);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
BONUS  nei nomi sulle targhe l'iniziale di ogni parola deve essere maiuscola
ES.: (marco de iulio  => Marco De Iulio) */

let students = [
    { name: 'Luisa', id: '457', grades: '78'},
    { name: 'Linda', id: '457', grades: '78'},
    { name: 'Lorenzo', id: '457', grades: '78'},
    { name: 'Luigi', id: '457', grades: '78'},
    { name: 'Ludovica', id: '457', grades: '78'},
    { name: 'Lucrezia', id: '457', grades: '78'},
];

const targheStudenti = students.map((student) => {
    return student.name; 
});

const highGradesStudent = students.filter((student) => student.grades > 70);

const highIdAndGradesStudent = students.filter((student) => student.grades > 70 && student.id > 120);

console.log(targheStudenti);