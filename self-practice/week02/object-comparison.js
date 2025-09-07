/*
======================================================
โจทย์ทั้งหมดนี้ถูกสร้างขึ้นมาโดย ChatGPT โดยผมตั้งเงื่อนไขที่ว่า
ไม่อนุญาตให้มันเฉลย แต่ให้มันสร้างโจทย์แนวที่คล้ายอาจารย์ขึ้นมา
เพื่อที่จะได้นำกลับมาทบทวนแบบเต็มประสิทธิภาพ
======================================================
*/

/*
1.Deep Equality
เขียนฟังก์ชัน deepEquality(obj1, obj2) 
ที่สามารถเปรียบเทียบวัตถุซ้อนกันได้ (nested object) เช่น
*/

let user1 = { name: "Alice", address: { city: "Bangkok" } }
let user2 = { name: "Alice", address: { city: "Bangkok" } }

// Write your code here!

function deepEquality () {
    if (obj1 === obj2) {
        return true
    }
    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
        return false
    }

    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if (keys1.length !== keys2) {
        return false
    }

    for (let key of keys1) {
        if (!keys2.include(key) || !deepEquality(obj1[key], obj2[key])) {
            return false
        }
        return true
    }
}   

console.log(deepEquality(user1, user2)) // Expected Output : true

/*
2.Unique Objects
เขียนฟังก์ชัน uniqueObjects(array) 
ที่รับ array ของ object และคืนค่า array 
ที่ไม่มี object ซ้ำ (เปรียบเทียบแบบ shallow)
*/

let books = [
    {isbn: 123, title: "JS"},
    {isbn: 123, title: "JS"},
    {isbn: 456, title: "Python"}
]

// Write your code here!

function shallowEquality(obj1, obj2) {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    // เหมือนกันกับที่อาจารย์ได้ให้มา หาก key ไม่เท่ากัน = ไม่เหมือนกัน
    if (keys1.length !== keys2.length) {
        return false
    }

    // สร้าง for let ไว้เช็คค่าแต่ละคีย์ หากไม่ตรงกันจะ return false
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
        // แต่ถ้าทุกคีย์ตรงกันจะ return true
        return true
    }
}

function uniqueObjects(array) {
    let result = []
    for (let obj of array) {
        // ใช้ Method .some() เพื่อทำการทดสอบข้อมูลทุกตัว โดยที่เรากำหนดเงื่อนไขเอาไว้แค่บางค่า 
        // เพื่อทำการเช็คใน result ที่เราสร้างก่อนหน้าว่า มี object ที่เหมือนกับ obj หรือยัง ถ้าไม่ให้เพิ่มใน result
        // แต่ถ้ามี ไม่ต้องสนใจ
        if (!result.some(item => shallowEquality(item, obj))) {
            // ใช้ Method .push() เพื่อเพิ่มค่าใหม่เข้า array โดยทำการ + กับ array ตัวเก่า เป็นการเพิ่มใน result
            result.push(obj)
        }
    }
    return result
}

console.log(uniqueObjects(books))
// Expected Output : [{isbn:123, title:"JS"}, {isbn:456, title:"Python"}]
