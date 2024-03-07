const studenti = [
    {ime: "Bojan", prosek: 7.5, grad: "Skopje"},
    {ime: "Pero", prosek: 8.3, grad: "Bitola"},
    {ime: "Janko", prosek: 6.9, grad: "Bitola"},
    {ime: "Vesna", prosek: 9.2, grad: "Skopje"},
    {ime: "Elena", prosek: 9.9, grad: "Kumanovo"},
    {ime: "Vancho", prosek: 10, grad: "Tetovo"},
    {ime: "Elena", prosek: 9.9, grad: "Ohrid"},
    {ime: "Ivana", prosek: 6.9, grad: "Kumanovo"},
    {ime: "Natasha", prosek: 8.1, grad: "Skopje"},
    {ime: "Stanko", prosek: 7.2, grad: "Strumica"},
];

//Zadaca 1

const studentsFromSkopje = studenti.filter(studenti => studenti.grad === "Skopje" && studenti.ime.endsWith('a') && studenti.prosek > 7)
.sort((a,b) => a.ime.localeCompare(b.ime));
console.log("1. Сите студенти од Скопје чие име завршува на буквата а и имаат просек над 7, подредени по име (растечки):");
console.log(studentsFromSkopje);

//Zadaca 2

const studentsAboveNineNotFromSkopje = studenti.filter(studenti =>  studenti.prosek > 9 && studenti.grad !== "Skopje")
.sort((a,b) => b.prosek - a.prosek);
console.log("2. Сите студенти кои имаат просек над 9, не се од Скопје, подредени под просек, но опаѓачки:");
console.log(studentsAboveNineNotFromSkopje);

//Zadaca 3

const firstThreeStudentsWithFiveCharacters = studenti.filter(studenti => studenti.ime.length === 5)
.sort((a,b) => a.prosek - b.prosek).slice (0,3);
console.log("3. Првите 3 студенти кои имаат имиња со 5 карактери (букви), подредени под просек:");
console.log(firstThreeStudentsWithFiveCharacters);

//Zadaca 4

const citiesByAverageGrade = {};
studenti.forEach(studenti => {
    if(!citiesByAverageGrade[studenti.grad]){
        citiesByAverageGrade[studenti.grad] = {
            totalProsek: studenti.prosek,
            count: 1
        };
    } else {
        citiesByAverageGrade[studenti.grad].totalProsek += studenti.prosek;
        citiesByAverageGrade[studenti.grad].count++;
    }
});

for(let city in citiesByAverageGrade){
    citiesByAverageGrade[city].average = citiesByAverageGrade[city].totalProsek / citiesByAverageGrade[city].count;
}

const sortedCitiesByAverageGrade = Object.entries(citiesByAverageGrade)
.sort((a,b) => b[1].average - a[1].average)
.map(city => ({grad: city[0], prosek: city[1].average}));
console.log("4. Градови подредени според групната висина на просек на студентите од нив:");
console.log(sortedCitiesByAverageGrade);

//Zadaca 5

const averageGradeEndingWithA = studenti.filter(studenti => studenti.ime.endsWith('a'))
.reduce((total, studenti) => total + studenti.prosek, 0) / studenti.filter(studenti => studenti.ime.endsWith('a')).length;
const averageGradeNotEndingWithA = studenti.filter(studenti => !studenti.ime.endsWith('a'))
.reduce((total, studenti) => total + studenti.prosek, 0) / studenti.filter(studenti => !studenti.ime.endsWith('a')).length;
console.log(`5. Вкупен просек на студенти чиешто име завршува на буквата а: ${averageGradeEndingWithA.toFixed(2)}`);
console.log(`5.1. Вкупен просек на студенти чии имиња не завршуваат на букбата а: ${averageGradeNotEndingWithA.toFixed(2)}`);


    




