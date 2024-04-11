"use strict";
// Question121: Implement a for loop that count from 1 to 10 butskip number 5 using the continue statement.
for (let a = 1; a <= 10; a++) {
    if (a === 5) {
        continue; // Skip number 5
    }
    console.log(a);
}
