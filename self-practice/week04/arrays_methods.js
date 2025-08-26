
const words = ["apple", "mango", "oranges", "mangosteen"];
// const shortword = words.filter(word => word.length <= 6); // Callback Fcuntion
const shortword = words.filter(function (word) {
    word.filter <= 6
})

// 3. Reuse callback Fcuntion (named function)
function wordLength(word) {
    return word.length <= 6
}

// const shortword = words.filter(wordLength)
// const shortword = words.filter(wordLength("apple")) // wordLength(True)

console.log(words);
console.log(shortword);

//sort function change original arrays 
const sortedWords = words.sort()
console.log(words)
console.log(sortedWords)

const sentence01 = ["mango", "apple", "mangosteen", "orange"]
const uppercase = words.map((word) => word.toUpperCase())
console.log(uppercase)

// ---------------------------------------------------------------------------------

// Get Students ID by using map()
const students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
]

const getOddID = students.map(student => student.id).filter(id => id % 2 == 0)
console.log(getOddID)

// ---------------------------------------------------------------------------------

// return all words that include 'mango' (ignore case)
// result ['mango', 'mangosteen', 'mangoes']
const fruits = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]

const getMango = fruits.filter((fruit) => fruit.toLowerCase().includes("mango"))
console.log(getMango)

//includes()->array
console.log(fruits.includes("Apple")) //true
console.log(fruits.includes("apple")) //false
console.log(fruits.includes("app")) //false

// //includes() ->string
const sentence = "The quick brown fox jumps over the lazy dog."
const word = "Ox"
console.log(sentence.includes(word))
 
// check array that has word "apple" or not if has display 'has apple', otherwise,
// display 'does not have apple'
const getApple = fruits.find((fruit) => fruit.toLowerCase() === "apple") ? "Has Apple" : "Does not have Apple"
console.log(getApple)

// ---------------------------------------------------------------------------------

// reduce() Methods
const product = [1, 'RED', 102]
const productDetail = product.reduce((detail, prop) => {
    return prop === 'RED' ? detail.concat('R') : detail.concat(prop)
}, '') // '' = initial value ค่าตั้งต้นหากไม่ได้ใส่ค่าอะไรเข้าไป

console.log(productDetail)

const cart = [
  { productId: 1001, price: 500, quantity: 2 },
  { productId: 1002, price: 10, quantity: 3 },
  { productId: 1003, price: 5, quantity: 10 },
]

// find cart total and return object that show the total {total: 1000}
// const findTotal = cart.reduce(acc , current) {

// } 

// ---------------------------------------------------------------------------------

// Stack and Quece

//unshift
// cart[cart.length] = { productId: 5555, price: 1, quantity: 4 }
cart.push({ productId: 5555, price: 1, quantity: 4 })
console.log(cart)
console.log(cart.pop()) //{ productId: 5555, price: 1, quantity: 4 }
console.log(cart.length) //3
 
const words1 = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]
words1.splice(2, 1, "banana") // replace "mangoteen" with "banana"
console.log(words1)

words1.splice(words1.length -2, 2) // remove the last two words
console.log(words1)

words1.splice(2, 0, "Melon", "Cherry") // Add 'melon' and 'cherry' after "applew"
console.log(words1)

// slice() method

// slice items at index 2 to last
fruits.slice(2)
// slice the first to third items
fruits.slice(0, 3)
// fill null to all items
fruits.fill(null)