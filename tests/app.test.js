const { add, subtract } = require("../src/app");

if (add(2, 3) !== 5) {
    throw new Error("Addition test failed");
}

if (subtract(5, 2) !== 3) {
    throw new Error("Subtraction test failed");
}

console.log("All tests passed successfully!");