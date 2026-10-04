const { add, subtract, multiply, divide } = require("../src/app");

if (add(2, 3) !== 5) {
    throw new Error("Addition test failed");
}

if (subtract(5, 2) !== 3) {
    throw new Error("Subtraction test failed");
}

if (multiply(2, 3) !== 6) {
    throw new Error("Multiplication test failed");
}

if (divide(10, 2) !== 5) {
    throw new Error("Division test failed");
}

console.log("All tests passed successfully!");