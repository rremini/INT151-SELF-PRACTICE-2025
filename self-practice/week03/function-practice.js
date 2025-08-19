/*
Write a fucntion
*/

function getFreqOfWords(sententce) {
    if (typeof sententce !== 'string') {
        return undefined
    } 
    const words = sententce.toLowerCase().trim().split(/\s+/);
    for (i = 0; i < words; i++) {
        console.log({sententce : i})
    } return sententce
}  

console.log(getFreqOfWords('Today is present and present is your gift'))
console.log(getFreqOfWords('Do you best just do it'))
console.log(getFreqOfWords(null))
console.log(getFreqOfWords(undefined))
