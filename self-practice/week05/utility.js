function echo(value) {
    return value
}

function getLength(str) {
    return str.length
}

const TAX = 0.07
const x = 1
class Book {
    constructor(isbn, title) {
        this.isbn = isbn
        this.title = title
    }
}
// export list
export{echo, getLength as default, TAX as VAT, Book}
