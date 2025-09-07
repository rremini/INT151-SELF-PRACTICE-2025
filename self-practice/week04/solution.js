// Write a function getDoubledEvenNumbers(arr) 
// that takes an array of numbers and returns a 
// new array containing only the even numbers, each multiplied by 2.
// Hint: Combine methods for filtering and transforming.

function getDoubledEvenNumbers(arr) {
  return arr
  .filter(num => num % 2 === 0)
  .map(num => num * 2)
}

// --------------------------------------------------------------------------------

// Write a function getTopScorer(users) that accepts an array of user objects 
// (each with a name and an array of scores) and returns the name of the user with the highest total score.
// Hint: You need to calculate totals, then find the maximum.

function getTopScorer(users) {
// Write your code here!
    return users.reduce((top, user) => {
    const total = user.scores.reduce((a, b) => a + b, 0);
    const topTotal = top.scores.reduce((a, b) => a + b, 0);
    return total > topTotal ? user : top;
  }).name;
}
// --------------------------------------------------------------------------------

// Write a function createTodoSummary(todos) that accepts an array of todo objects ({task, completed}), 
// and returns a string like "3 tasks total: 2 done, 1 remaining"
// Hint: Count, group, and format values into a string.

function createTodoSummary(todos) {
// Write your code here!
    let done = 0
    let remain = 0
    const taskLength = Object.keys(todos).length;
    todos.filter(task => task.completed ? done = done + 1 : remain = remain + 1)
    return (`${taskLength} tasks total: ${done} done, ${remain} remaining`)
    // .map((task, done, remain) => {console.log(`${task} tasks total: ${done} done, ${remain} remaining`)})
}

// --------------------------------------------------------------------------------

// Write a function reverseAlphabeticalNames(users) that returns a new array of names 
// from the given user list (each with name property), sorted in reverse alphabetical order.
// Hint: Extract names, sort, and reverse.

function reverseAlphabeticalNames(users) {
// Write your code here!
    return users
    .map(user => user.name)
    .sort()
    .reverse()
}

// --------------------------------------------------------------------------------

// Write a function searchBooks(books, keyword) that returns an array of book titles 
// that contain the given keyword (case-insensitive) and are sorted by title length in ascending order.
// Hint: Normalize strings, match by condition, sort by length.

function searchBooks(books, keyword) {
// Write your code here!
    const lower = keyword.toLowerCase();
    return books
        .filter(title => title.toLowerCase()
        .includes(lower))
        .sort((a,b) => a.length - b.length)
}

// --------------------------------------------------------------------------------

// Write a function getCommonTags(posts) that takes an array of posts (each with an array of tags) 
// and returns an array of tags that appear in every post (i.e., intersection).
// Hint: Start from first, and compare against the rest using a reducer.

function getCommonTags(posts) {
// Write your code here!
    return posts
    .reduce((acc, post) => acc.filter
    (tag => post.tags.includes(tag)), posts[0]?.tags || []);
}

// --------------------------------------------------------------------------------

// Write a function groupByCategory(items) that takes an array of items {name, category} 
// and returns an object grouped by category, where each key is the category and its value is an array of item names.
// Hint: Use grouping logic via accumulation.

function groupByCategory(items) {
// Write your code here!
    return items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item.name);
    return acc;
    }, {});
}

// --------------------------------------------------------------------------------

// Write a function calculateGradeDistribution(students) that accepts an array of students 
// {name, grades: [A,B,C...]} and returns an object like:

// {
//   A: 3,
//   B: 2,
//   C: 5
// }

// Hint: Flatten arrays first, then aggregate by grade.

function calculateGradeDistribution(students) {
// Write your code here!
    return students
    .flatMap(s => s.grades)
    .reduce((acc, grade) => {
    acc[grade] = (acc[grade] || 0) + 1;
    return acc;
    }, {});
}

// --------------------------------------------------------------------------------

// Write a function transformInventory(data) that takes an array of {product, quantity, location} 
// and returns a new array where:
// - Products with the same name are combined across locations.
// - The final output is sorted by total quantity descending.
// Hint: Combine + sort = think reducer.

function transformInventory(data) {
// Write your code here!
    const grouped = data.reduce((acc, item) => {
    acc[item.product] = (acc[item.product] || 0) + item.quantity;
    return acc;
    }, {});


    return Object.entries(grouped)
    .map(([product, quantity]) => ({ product, quantity }))
    .sort((a, b) => b.quantity - a.quantity);
}

// --------------------------------------------------------------------------------

// Write a function generateUserReport(users) that processes a list of users with the structure:

// {
//   name: "Alice",
//   purchases: [
//     {product: "Pen", price: 10},
//     {product: "Notebook", price: 50}
//   ]
// }

// Return a summary array like:

// [
//   {name: "Alice", totalSpent: 60},
//   ...
// ]

// Only include users who spent more than 50, sorted descending by totalSpent.
// Hint: Filter, aggregate, transform, sort.

function generateUserReport(users) {
// Write your code here!
    return users
    .map(user => ({
    name: user.name,
    totalSpent: user.purchases.reduce((sum, p) => sum + p.price, 0)
    }))
    .filter(u => u.totalSpent > 50)
    .sort((a, b) => b.totalSpent - a.totalSpent);
}

// --------------------------------------------------------------------------------

// Testcases

module.exports = {
  getDoubledEvenNumbers,
  getTopScorer,
  createTodoSummary,
  reverseAlphabeticalNames,
  searchBooks,
  getCommonTags,
  groupByCategory,
  calculateGradeDistribution,
  transformInventory,
  generateUserReport
}