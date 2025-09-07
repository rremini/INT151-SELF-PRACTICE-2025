const arr1=new Array()
console.log(arr1)//[]
console.log(arr1.length)//0
 
const arr2=new Array(10)
console.log(arr2)//[10 empty items
console.log(arr2.length) //10
 
const arr3=new Array(1,5,7, 'hello')
console.log(arr3)//[ 1, 5, 7, 'hello' ]
console.log(arr3.length)//4
 
const arr4=Array.of(5)
console.log(arr4)//[5]
console.log(arr4.length)//1
 
const str='Hello'
const arr5=Array.from(str)
console.log(arr5)//[ 'H', 'e', 'l', 'l', 'o' ]
console.log(arr5.length)//5
 
const arr6=Array.from(arr4)
console.log(arr6)//[5]
console.log(arr6.length)//1
// --------------------------------------------
