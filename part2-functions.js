// Convert dog years to human years
function dogToHumanYears(dogAge) {
    if (dogAge <= 0) {
        return "Age must be a positive number.";
    }
    if (dogAge === 1) {
        return 15; // First year of a dog's life equals 15 human years
    }
    if (dogAge === 2) {
        return 15 + 9; // Second year adds 9 human years
    }
    return 15 + 9 + (dogAge - 2) * 5; // Each additional year adds 5 human years
}

// Calculate tip based on total and percentage
function calculateTip(total, percentage) {
    return total * (percentage / 100);
}

// Check if a number is even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}