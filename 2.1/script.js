const number = parseInt(prompt("Enter a number to check Prime or Not: ")); let isPrime = true;
// check if number is equal to1 
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
// check if number is greater than 1 
else if (number > 1) {
    // looping through 2 to number1 
    for (let i = 2; i < number; i++)
    {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime === true) {
    alert(number + " is a Prime number");
} else {
    alert(number + " is not Prime number");
}