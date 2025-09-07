const obj = {
    name: "Hun",
    age: 15,
    age:20, // value แทนตัวแรก
    fruit: ["banana", "apple", "grape"],
    emp: [
        {name: "jame", role:"dev"},
        {name: "ham", role:"maketing"}
    ]
}

obj.newkey = "if js, it's possible"
console.log(obj)

//1.object literal
// const book={isbn:12345678, title:'Introduction to JS', getISBN:function(){return this.isbn}}

//2. constructor function
// function Book(isbn, title){
//     this.isbn=isbn
//     this.title=title
// }
// const b1=new Book(123, 'JS')
// const b2=new Book(888, 'CSS')
// console.log(b1)
// console.log(b2)
//3.class
class Book{
    constructor(isbn, title){
        this.isbn=isbn
        this.title=title
    }
    getISBN(){
        return this.isbn
    }
    setTitle(title){
        this.title=title
    }
    getBookInfo(){
        return `isbn: ${this.isbn}, title: ${this.title}`
    }
}
const myBook=new Book(12345678, 'JS Beginner')
// console.log(myBook.getBookInfo())
// console.log(myBook.getISBN())
// console.log(myBook.setTitle('JS for Beginner'))
// console.log(myBook.getBookInfo())

//4. using Object.create(existingObj)
const journal=Object.create(myBook)
journal.ISSN=587904
console.log(journal)
console.log(journal.isbn)
console.log(journal.title)

const b1={isbn:123, title:"JS"}
const b2={isbn:123, title:"JS"}

function compareBook(x, y){
    //boolean condition?true expression:false expression
    // return x.isbn===y.isbn?true:false
    if(x.isbn===y.isbn)
        return true
    else
        return false

}
console.log(compareBook(b1, b2))

const keys=Object.keys(b1) //array of keys //[ 'isbn', 'title' ]
const values=Object.values(b1) //array of values//[ 123, 'JS' ]
console.log(keys)
console.log(values)

//destructuring on array
const colors=['red', 'green', 'blue']
const [, item2]=colors //const items=colors[1]
console.log(item2)
//destructuring on object
const b3={isbn: 1234, title: 'JS', authors:{firstname: 'Jon',lastname:'Smith'}}

const {isbn,title}=b3
console.log(isbn)//1234
console.log(title)//JS
const {authors:{firstname}}=b3
console.log(firstname)