// Example usage:
const studentScores = [
    {name : 'Alice', score: 85},
    {name : 'Bob', score: 92},
    {name : 'Charlie', score: 68},
    {name : 'David', score: 55},
    {name : 'Eve', score: 78},
];

// Declarative programming
// .filter.map -> declrative programming (functional programming)
function getPassingNames(studentScores) {
    return studentScores.filter(student => student.score >= 70).map(fname => fname.name.toUpperCase())
}

// Imprerative programming
function getPassingNames(studentScores) {
    let result = [];
    for (let i = 0; i < studentScores.length; i++) {
        let student = studentScores[i];
        if (student.score >= 70) {
            result.push(student.name.toUpperCase());
        }
    }
    return result;
}

const passingNames =
getPassingNames(studentScores);
console.log(passingNames);
// Output should be: ["ALICE", "BOB", "EVE"]
