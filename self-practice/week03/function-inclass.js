// Basic Function Practice
function Basicfunction (input) {
    if (input > 20) {
        return true 
    } else
    return false
}

// =========================================================

console.log(Basicfunction(25))
// function declaration
function multiply(a,b) { // a =3 , b = 5
    return a * b // 3 * 5
}

function doSomething(x) { // x = multiply1
    return x(3,5) // multiply1(3,5)
}

console.log(multiply(2, 3))

// funciton expression (using arrow function syntax)
const multiply02 = (a, b) => a * b // (a,b) => a * b
// มีค่าเท่ากันกับ function declaration
console.log(multiply02(4,2))

// function expreesiong (using function declaration)
const multiply03 = function (a,b) {return a*b}
console.log(multiply03(5,2))

// เรียกดูว่าฟังก์ชั่นเป็นอะไร

console.log(typeof multiply)
const x=multiply
console.log(typeof x)

let a = 1
console.log(typeof a)

// ========================================================

if(x === multiply)
    console.log("x equals to multiply1")
else
    console.log('x not equals to multiply1')

