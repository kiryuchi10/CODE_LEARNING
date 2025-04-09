# Function Declarations and Expressions

This document is part of the **Functions & Scope** section in the JavaScript Study guide. It covers all the common ways of declaring functions in JavaScript, explains the underlying principles, and includes examples for each form.

---

## Overview

Functions are one of the core building blocks in JavaScript. They allow you to encapsulate code, promote reusability, and form the foundation of abstraction in the language. In JavaScript, functions are **first-class citizens**, meaning they can be treated as values—passed as arguments, returned from other functions, and assigned to variables.

This guide covers the following forms of function declarations:

1. [Function Declarations](#function-declarations)
2. [Function Expressions](#function-expressions)
   - Anonymous Function Expressions
   - Named Function Expressions
3. [Arrow Functions](#arrow-functions)
4. [Immediately Invoked Function Expressions (IIFE)](#immediately-invoked-function-expressions-iife)
5. [Generator Functions](#generator-functions)
6. [Async Functions](#async-functions)
7. [Async Generator Functions](#async-generator-functions)

Each form has its own use cases and nuances such as hoisting behavior, lexical scoping, and differences in handling the `this` keyword.

---

## Function Declarations

### Syntax

```js
function functionName(parameters) {
  // Function body
}
```
### Example

```js
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```

### Principles
   - **[Hoisting]**  Function declarations are hoisted completely, so they can be invoked before their definition in the code.
   - **[Readability]**
     They clearly indicate the intent to create a reusable block of code.

## Function Expressions

### Anonymous Function Expression

```js
const functionName = function(parameters) {
  // Function body
};
```

### Example
```js
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(3, 4)); // 12
```

## Named Function Expression

```js
const functionName = function actualName(parameters) {
  // Function body
};
```

### Example
```js
const divide = function div(a, b) {
  return a / b;
};
console.log(divide(10, 2)); // 5
```

### Principles
   - **[First-Class Function]**  Functions are treated as values, enabling passing them as arguments and storing them in variables.
   - **[Scope and Hoisting]**
     Function expressions are not hoisted like function declarations—they are created at runtime.