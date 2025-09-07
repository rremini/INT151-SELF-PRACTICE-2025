const arr=[1, true, 'hello world']
console.log(arr)
console.log(arr.length)

// growing
arr[arr.length]='Somchai'
arr[arr.length+2]='JS'
console.log(arr)

// shrinking
delete arr[arr.length]
console.log(arr)

// -------------------------------
let ar = ['a',1,true,3];
 
console.log(ar);
console.log(ar.length);
console.log("item1 = "+(ar[0]));
console.log("item4 = "+(ar[3]));
 
for(let i = 0; i < ar.length; i++){
    console.log(i);
}
 
let Arr = [1 ,2 ,3 ,4 , "chayanon", "mak ", null, Infinity, 0]
 
console.log(Arr);
console.log(`length = ${Arr.length}`)
console.log(`First = ${Arr[0]}`)
console.log(`Last = ${Arr[Arr.length-1]}`)
for (let i = 0; i < Arr.length; i++) {
    console.log(`Loop =${Arr[i]}`);
}

// -------------------------------

const groups=[['Malee', 'Jane'], ['John', 'Jay', 'Pete'], ['Alice', 'Bob', 'Charlie']];
for (let i = 0; i < groups.length; i++) {
  const lastMember = groups[i][groups[i].length - 1];
  console.log(`Group ${i + 1}: ${lastMember}`);
}
 