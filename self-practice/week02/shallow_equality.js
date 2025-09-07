// Shallow Equality
// ==============================

let book1 = {
    isbn: 123456789,
    title: "JavaScript"
}

let book2 = {
    isbn: 123456789,
    title: "JavaScript"
}

function shallowEquality(object1, object2) {
    const keys1=Object.keys (object1)
    const keys2=Object.keys (object1)

    if (keys1.length !== keys2.length) {
        return false
    }

    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false
        }
    }
    return true
}

console.log("shallow equality: " + shallowEquality(book1, book2))
