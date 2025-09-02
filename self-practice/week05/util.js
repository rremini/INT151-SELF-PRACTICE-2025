// util.js
const displayMessage = (anyMsg) => {
    console.log(anyMsg)
}

function echo(value) {
    return value
}

const getLength = (str) => str.length
const MAXSTUDENT = 60

// module.exports = displayMessage
module.exports = { displayMessage, getLength ,echo , MAXSTUDENT }
