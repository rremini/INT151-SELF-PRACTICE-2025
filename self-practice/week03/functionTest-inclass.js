// function declaration
function multiply1(a,b) { // a =3 , b = 5
    return a * b // 3 * 5
}

function doSomething01(x) { // x = multiply1
    return x // return multiply1
}

const y = doSomething01(multiply1)// [Function: mutiply1]
console.log(y(2,4)) // 9

// Higher-Order Functions
function sayGoodbye() {
    return 'Good Byeeeee!!!'
}

function doSomething02() {
    return sayGoodbye
}

let doIt=doSomething02()
console.log(doIt())
console.log(doSomething02()())
// doSomething01() [()] => sayGoodbye()[ second ()]

function myFunc(theObject) {
    theObject.model = "A9999"
}

const product = {model: "A1001", price: 199}
console.log(product.model) // "A1001"

myFunc(product);
console.log(product.model) // "A9999"

function sum(x ,y, ...z) {
    // return arguments[0] + arguments[1]
    for(argu of arguments) {
        console.log(argu)
    }
    console.log(`length: ${arguments.length}`)
    console.log()
}

sum(1,2,3,4,5,6,7,8)

console.log(sum())


// ให้ฟังก์ชั่นหา sum โดยที่รับ Parameter ทุกรูปแบบ ต้องบวกเป็นค่าผลรวมให้ได้
function allSum(...input) {
    let count = 0
    for(i of arguments) {
        count += i
    } return count
}

// Testing
console.log(allSum(12,3,4,5))

function greeting(greet="Hello", who="Guest", quote = "How are you?") {
    return `${greet} ${who} ${quote}`
} 

console.log(greeting("hi")) // Hello Guest How are you?
console.log(greeting("Good Moring", "Guy", "Great")) // Good Morning Guy Great!
console.log(greeting(undefined, null, "Fine")) // Hello null Fine
console.log(greeting()) // Hello Guest How are you?

// Spread Parameters
function sum (num1, num2 ,num3) {
    console.log(num1)
    console.log(num2)
    console.log(num3)

    return num1 + num2 + num3
}

let nums = [5, 10 ,15]
console.log(sum(10)) // 40