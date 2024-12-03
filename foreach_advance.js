
// Important array Methods

// foreach

const numbers = [2,3,4,5,6];

// function indexnumberWithValues (number, index) {
//     console.log(`index is ${index} and the number is ${number*2}`); 
// };

// for (let i = 0; i < numbers.length; i++) {
//     indexnumberWithValues(numbers[i],i);    
// };

// OR

// numbers.forEach(indexnumberWithValues);

// OR 
// the for each passes each parameters value which is required for the function
numbers.forEach(function indexnumberWithValues(number, index){
    console.log(`the index is ${index} and the number is ${number*2}`); 

});
