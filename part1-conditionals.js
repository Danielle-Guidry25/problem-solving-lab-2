let score = 82;

// Validate and print A, B, C, D, or F based on score
if (typeof score === "number" && score >= 0) {
    if (score >= 90) {
        console.log("A");
    } else if (score >= 80) {
        console.log("B");
    } else if (score >= 70) {
        console.log("C");
    } else if (score >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
} else {
    console.log("Invalid score. Please enter a valid number.");
}

let quantity = 12;
// Print warning if quantity > 10
if (typeof quantity === "number" && quantity > 0) {
    console.log("Quantity score is: " + quantity);
    if (quantity > 10) {
        console.log("Warning: Quantity exceeds 10!");
    }
} else {
    console.log("Invalid quantity. Please enter a positive number.");
}

let password = "letmein"; // Replace with user input if needed
// Check password and print access message
if (password === "letmein") {
    console.log("Access granted");
} else {
    console.log("Access denied");
}