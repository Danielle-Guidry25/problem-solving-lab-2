// Create an array with 5 of your favorite foods
const favoriteFoods = ['Pizza', 'Sushi', 'Tacos', 'Pasta', 'Ice Cream'];

// Log the first and last food in the array
console.log('First food:', favoriteFoods[0]);
// Log the first food and the second the third fourth and last food in the array
console.log('Second food:', favoriteFoods[1]);
console.log('Third food:', favoriteFoods[2]);
console.log('Fourth food:', favoriteFoods[3]);
console.log('Last food:', favoriteFoods[favoriteFoods.length - 1]);

// Add one more food using .push()
favoriteFoods.push('Burgers');
favoriteFoods.push('crawfish');
favoriteFoods.push('gumbo');
favoriteFoods.push('pizzas');
favoriteFoods.push('tacos');

console.log('First food:', favoriteFoods[0]);
console.log('Second food:', favoriteFoods[1]);
console.log('Third food:', favoriteFoods[2]);
console.log('Fourth food:', favoriteFoods[3]);
console.log('Last food:', favoriteFoods[favoriteFoods.length - 1]);

// Log the new array
console.log('Updated array:', favoriteFoods);

// Create an array with a list of guests
const guests = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];

// Remove the first guest using .shift()
const removedGuest = guests.shift();
console.log('Removed first guest:', removedGuest);

// Add a new guest at the end using .push()
guests.push('Frank');
console.log('Added new guest at the end:', guests);

// Log how many guests are coming
console.log('Number of guests coming:', guests.length);

// Log the updated guest list
console.log('Updated guest list:', guests.length - 6);




// Create an array with a list
let tasks = ['1.laundry', '2.groceries', '3.coding', '4.naps',"5.cooking"];

// Function to print tasks with numbering
function printTasks() {
    console.log('Tasks:');
    tasks.forEach((task, index) => {
        console.log(`${task}`);
    });
}

// Call the function to print tasks
printTasks();