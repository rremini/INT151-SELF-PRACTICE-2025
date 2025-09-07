// solution.test.js

const {
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
} = require('./solution');

// 1. getDoubledEvenNumbers
test('getDoubledEvenNumbers filters even numbers and doubles them', () => {
  expect(getDoubledEvenNumbers([1, 2, 3, 4, 5])).toEqual([4, 8]);
  expect(getDoubledEvenNumbers([10, 11, 12])).toEqual([20, 24]);
  expect(getDoubledEvenNumbers([])).toEqual([]);
});

// 2. getTopScorer
test('getTopScorer returns user with highest total score', () => {
  expect(getTopScorer([
    { name: "Alice", scores: [10, 20] },
    { name: "Bob", scores: [30, 5] },
    { name: "Charlie", scores: [25] }
  ])).toBe("Bob");
});

// 3. createTodoSummary
test('createTodoSummary returns proper summary string', () => {
  expect(createTodoSummary([
    { task: "Eat", completed: true },
    { task: "Sleep", completed: false },
    { task: "Code", completed: true }
  ])).toBe("3 tasks total: 2 done, 1 remaining");
  expect(createTodoSummary([])).toBe("0 tasks total: 0 done, 0 remaining");
});

// 4. reverseAlphabeticalNames
test('reverseAlphabeticalNames returns sorted names descending', () => {
  expect(reverseAlphabeticalNames([
    { name: "Zara" },
    { name: "Mike" },
    { name: "Anna" }
  ])).toEqual(["Zara", "Mike", "Anna"]);
  expect(reverseAlphabeticalNames([])).toEqual([]);
});

// 5. searchBooks
test('searchBooks returns filtered and sorted book titles', () => {
  expect(searchBooks(["Data Science Handbook", "Deep Work", "The Art of War"], "work"))
    .toEqual(["Deep Work"]);
  expect(searchBooks(["Learn JavaScript", "Java Essentials", "C++ in Depth"], "java"))
    .toEqual(["Java Essentials", "Learn JavaScript"]);
});

// 6. getCommonTags
test('getCommonTags returns tags shared by all posts', () => {
  expect(getCommonTags([
    { tags: ["js", "web", "frontend"] },
    { tags: ["js", "api", "frontend"] },
    { tags: ["frontend", "js"] }
  ])).toEqual(["js", "frontend"]);
  expect(getCommonTags([
    { tags: ["a", "b"] },
    { tags: ["b", "c"] },
    { tags: ["b"] }
  ])).toEqual(["b"]);
});

// 7. groupByCategory
test('groupByCategory groups item names by category', () => {
  expect(groupByCategory([
    { name: "Milk", category: "Grocery" },
    { name: "Shirt", category: "Clothes" },
    { name: "Bread", category: "Grocery" }
  ])).toEqual({
    Grocery: ["Milk", "Bread"],
    Clothes: ["Shirt"]
  });
});

// 8. calculateGradeDistribution
test('calculateGradeDistribution counts all grades correctly', () => {
  expect(calculateGradeDistribution([
    { name: "A", grades: ["A", "B", "C"] },
    { name: "B", grades: ["B", "A"] },
    { name: "C", grades: ["C", "C"] }
  ])).toEqual({ A: 2, B: 2, C: 3 });
  expect(calculateGradeDistribution([])).toEqual({});
});

// 9. transformInventory
test('transformInventory groups and sorts product quantities', () => {
  expect(transformInventory([
    { product: "Pen", quantity: 10, location: "A" },
    { product: "Pen", quantity: 5, location: "B" },
    { product: "Book", quantity: 20, location: "A" }
  ])).toEqual([
    { product: "Book", quantity: 20 },
    { product: "Pen", quantity: 15 }
  ]);
});

// 10. generateUserReport
test('generateUserReport filters and sorts users by spending', () => {
  expect(generateUserReport([
    {
      name: "Alice",
      purchases: [
        { product: "Pen", price: 10 },
        { product: "Notebook", price: 50 }
      ]
    },
    {
      name: "Bob",
      purchases: [
        { product: "Monitor", price: 150 }
      ]
    },
    {
      name: "Charlie",
      purchases: [
        { product: "Candy", price: 5 }
      ]
    }
  ])).toEqual([
    { name: "Bob", totalSpent: 150 },
    { name: "Alice", totalSpent: 60 }
  ]);
});
