# Arrays in Customer Queue Management

## 1. `names` Array
```javascript
const names = [
    "Oliver Thompson",
    "Amelia Bennett",
    "Ethan Parker",
    // ... more names
];
```

### Purpose
The `names` array stores a list of customer names for a queue management system.

### Key Array Methods Used:
- `push()`: Adds a new customer name to the end of the array
- `some()`: Checks if a specific name exists in the array
- `findIndex()`: Finds the index of a specific name
- `splice()`: Removes a customer name from a specific index
- `shift()`: Removes the first (top) customer from the array

### Examples of Array Operations

#### Adding a Customer
```javascript
names.push("New Customer Name");
// Adds a new name to the end of the array
```

#### Searching for a Customer
```javascript
const isFound = names.some((name) => name.toLowerCase() === "amelia bennett".toLowerCase());
// Returns true if the customer exists in the array
```

#### Finding a Customer's Position
```javascript
const index = names.findIndex((name) => name.toLowerCase() === "ethan parker".toLowerCase());
// Returns the index of "Ethan Parker" (0-based indexing)
```

#### Removing a Specific Customer
```javascript
const customerIndex = names.findIndex((name) => name.toLowerCase() === "lucas rivera".toLowerCase());
names.splice(customerIndex, 1);
// Removes "Lucas Rivera" from the array
```

#### Removing the Top Customer
```javascript
names.shift();
// Removes the first customer from the array
```

## Array Method Details

### 1. `push()`
- Adds one or more elements to the end of an array
- Modifies the original array
- Returns the new length of the array

### 2. `some()`
- Tests whether at least one element in the array passes the test implemented by the provided function
- Returns `true` or `false`
- Stops iterating once a matching element is found

### 3. `findIndex()`
- Returns the index of the first element that satisfies the provided testing function
- Returns -1 if no element is found
- Useful for locating a specific item in the array

### 4. `splice()`
- Changes the contents of an array by removing or replacing existing elements and/or adding new elements
- Can remove elements from a specific index
- Modifies the original array

### 5. `shift()`
- Removes the first element from an array
- Returns the removed element
- Modifies the original array by reducing its length

## Best Practices
- Use `toLowerCase()` for case-insensitive comparisons
- Handle potential errors when working with array methods
- Clear the list display (`ulElement.innerHTML = ''`) before re-rendering to avoid duplicate entries