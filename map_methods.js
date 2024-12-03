//Map Method

// map function returns the values in a new array.

const nums = [1,2,3,4,5,6];

const squareNumbers = numbers.map(function(number){
    return `the square of ${number} is ${number *number}`
});

console.log(squareNumbers);

//example 

const uusers = [
    {firstname: "Avinash", age:23},
    {firstname: "Avinash kumar", age:24},
    {firstname: "Avinash kumar jha", age:25},
    {firstname: "Avinash jha", age:26},

];

const userNames = uusers.map((uusers)=>{
    return uusers.firstname;
});

console.log(userNames);
