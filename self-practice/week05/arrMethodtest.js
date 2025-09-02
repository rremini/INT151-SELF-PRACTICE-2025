console.log(Array.isArray([])) // มองเป็น array
console.log(Array.isArray([1,2,3])) // มองเป็น array
console.log(Array.isArray("[]")) // มองเป็น string

const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];
const merge_arr = arr1.concat(arr2)

console.log(merge_arr);

// --------------------------------------------

const nums = [13,5,7];
nums.reverse()
console.log(nums)

// --------------------------------------------

const array14 = [1, 30, 4, 21 ,10000]
array14.sort((a, b) => (a - b)) // ไม่จำเป็นต้องสร้างตัวแปรใหม่
console.log(array14)

// --------------------------------------------

const stds = [
    { id:1, name:  'Tisanai', email: "tisanai@sit.kmutt.ac.th"},
    { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
    { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
]

// เรียงตาม name
// น้อยไปมาก
// อยากได้ตัวอักษรของชื่อ

stds.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore case
    const nameB = b.name.toLowerCase(); // ignore case
    return nameA === nameB ? 0 : (nameA < nameB ? -1 : 1);
})
console.log(stds)