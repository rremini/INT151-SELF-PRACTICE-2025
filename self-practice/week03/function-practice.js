function getFreqOfWords(sententce) {
    if (typeof sententce !== 'string') {
        return undefined
    } 
    const words = sententce
    .toLowerCase()
    .trim()
    .split(/\s+/);
    return words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
}  

console.log(getFreqOfWords('Today is present and present is your gift'))
console.log(getFreqOfWords('Do you best just do it'))
console.log(getFreqOfWords(null))
console.log(getFreqOfWords(undefined))
