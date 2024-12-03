console.log("hello avinash");


var firstname= 'avinash';
console.log(firstname);

//function in js

function greet(name){
    return 'Hello ' + name + '!, How are you?'
}

let print = greet('avinash');
console.log(print)



function area (r){
    const pi = 3.14;

    return pi*r*r;
}

let result = area(3);
console.log("Area is = ", result)


let name1= "      my name is Avinash";

console.log(name1[3]);
console.log(name1.length);
console.log(name1[name1.length-2]);

console.log(name1.trim());
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.slice(9, 15));
console.log(typeof name1);
// convert number to string
name1 =name1 + "";


let age = "34";
age = Number(age);
console.log(typeof age);

console.log(typeof name1);

let string1 = "My name is Avinash ";
let string2 = "and age is __"

let full = string1 + "," +string2;
console.log(full);


// template variables

let age2= 22;
let nam = "avinash";

let aboutme= `my name is ${nam} and my age is ${age2}`;

console.log(aboutme)


// comparision 

// == vs ===

let num1 = "15";
let num2 = 15;

console.log( num1 == num2) // it will return true because it only checks the value
console.log( num1 === num2) //it checks both data types as well as values

//!= vs !== 

console.log( num1 != num2) // it will return true because it only checks the value
console.log( num1 !== num2) //it checks both data types as well as values


if(age2>18){
    console.log("you are an adult now... ")
}
else{
    console.log("you are not an adult right now")
}


// ternary operator

let aayu = 4;
let drink;


if(aayu>=5){
    drink="coffee";
}else{
    drink="milk";
}
console.log(drink);
//by using ternary operator

let aayuu=3;
let drinkk= age >= 5 ? "coffee" : "milk";
console.log(drinkk);


// logical operators &&

if(nam[0]=="a" && age2>18){
    console.log("name starts with a and age is greater than 18")
}else{
    console.log("either the name not starts with a or age is less than 18");
}


// || OR
if(nam[0] === "a" || age2>18){
    console.log("name starts with a and age is greater than 18")
}else{
    console.log("either the name not starts with a or age is less than 18");
}

//nested if else 

let winningNumber = 19;
let userGuess = +prompt("Guess a number"); //type is string
console.log(userGuess)


// let userGuesss = prompt("Guess a number"); //type is number
// console.log(userGuess)

if(userGuess === winningNumber){
    console.log("your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}

let tempInDegree = 50;

if(tempInDegree < 0){
    console.log("extremely cold outside");
}else if(tempInDegree < 16){
    console.log("it is cold outside");
}else if(tempInDegree < 25){
    console.log("wheather is okay okay");
}else if(tempInDegree < 35){
    console.log("let go for swim");
}else if(tempInDegree < 45){
    console.log("turn on AC");
}else if(tempInDegree == 50){
    console.log("it's 50 degree ");
}else{
    console.log("too hot today")
}


//switch case

let day = 7;

switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day")
}


//loops


let i=0;

while(i<=9){
    console.log(i);
    i++;
}

for(let j=0; j<=10; j++){
    if(j===4){
        break;
    }
    console.log(j);
}

for(let j=0; j<=10; j++){
    if(j===4){
        continue;
    }
    console.log(j);
}


let k =10;

do{
    console.log(k);
    k++;
}while(k<=9);

console.log("value of k is ", k);


// Array starts 

let fruit = ["apple", "Mango","banana"];
let mixed = [1,2,3,4,"apple",null,"",undefined ];
// array indexing

console.log(fruit[0]);
mixed[2] = "banana";
console.log(mixed);
console.log(Array.isArray(fruit));

// array push pop

fruit.push("grapes");
console.log(fruit);
fruit.pop("grapes");
console.log(fruit);

// array shift unshift 
// unshift add the element in start
// shift removes the first element

fruit.unshift("orange","berry");
console.log(fruit);
fruit.shift();
console.log(fruit);

// Primitive vs reference data types
// Primitive 

let num_1 = 6;
let num_2 = num_1;

console.log("value of num_1 is ", num_1);
console.log("value of num_2 is ", num_2);
num_1++;
console.log("after incrementing num_1")
console.log("value of num_1 is ", num_1);
console.log("value of num_2 is ", num_2);

//reference types
//array
let array1 = ["item1", 'item2'];
let array2 = array1;

console.log("array1", array1);
console.log("array2 ", array2);

array1.push("item3");

console.log("after pushing new element in array1");
console.log("array1", array1);
console.log("array2", array2);


// Cloning an array

let array_1 = ["item1", "item2", "item3"];

let array__2 = array_1.slice(0);
let array___2 = [].concat(array1);

//New Way by using spread operator

let array_2 = [...array1]; //spread operator just spread the values in this array

array_1.push("item4");


console.log(array_1 === array_2);
console.log(array_1 === array__2);
console.log(array_1 === array___2);
console.log(array_1);
console.log(array_2);
console.log(array__2);
console.log(array___2);

let array_3 = array_1.slice(0).concat(["item5", "item6"]);
console.log(array_3);


let array_4 =[].concat(array_1, ["item7","item8"]);
console.log(array_4);

let oneMoreArray = ["title1", "title2", "title3"];
let array_5 =[...array1, ...oneMoreArray, "Aviii"];
console.log(array_5);

//for loop in array

let fruits = ["apple", "mango", "grapes", "banana"];

for(let l=0; l<fruits.length; l++){
    console.log(fruits[l].toUpperCase());

}

console.log(fruits);

let fruits2 = [];

for(let m=0; m < fruits.length; m++){

    fruits2.push(fruits[m].toUpperCase());
}

console.log(fruits2);

// using const in arrays 

// we can not cane the array but we can use the array methods

const fruitss = ["apple", "mango"];
// fruitss=["grapes","pineapple"];  // this is wrong and it will throw an error

fruitss.push("banana");
console.log(fruitss)

const fruits__2 = [];
let n=0;
while(n < fruitss.length){
    fruits__2.push(fruitss[n].toUpperCase());
    n++;
}

console.log(fruits__2);

// for of loop in array 

const new_fruits =["fruit1", "fruit2", "fruit3"];
const new_fruits2 = [];

for (let new_fruit of new_fruits){
    new_fruits2.push(new_fruit.toUpperCase());
}
console.log(new_fruits2);


// for in loop in array 
//this loop returns the index no. of the array
const new_fruits_1 =["fruit1", "fruit2", "fruit3"];
const new_fruits_2 = [];

for (let index in new_fruits_1){
    console.log(index)
    new_fruits_2.push(new_fruits_1[index].toUpperCase());
}
console.log(new_fruits_2);

// array destructuring

const myArray =["item1", "item2", "item3"];

let myvar1 = myArray[0];
let myvar2 =myArray[1];

console.log("value of myvar1 is ", myvar1)
console.log("value of myvar2 is ", myvar2)
// or we can also use it as 

let [myvar_1, myvar_2] = myArray;

myvar_1 = "value changed";
console.log("value of myvar_1 is ", myvar_1);
console.log("value of myvar_2 is ", myvar_2);

//OBJECTS IN JAVASCRIPT

//objects store in key value pair
const person ={ 
    name:"Avinash",
    age:22,
    hobbies: ["code", "cricket", "books"]

};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

// how to add key: value pairs

person.gender = "male";
const key = "email";


console.log(person);

person[key] = "avinashkumarjha1999@gmail.com";

console.log(person);

// difference between dot and bracket notation

//we use these two for in , object.keys to iterate object

for(let key in person){
    console.log(`${key} : ${person[key]}`);
}

console.log(Object.keys(person));  // it will return the keys
const val= Array.isArray((Object.keys(person)));
console.log(val)

//using for of array

for(let key of Object.keys(person)){
    console.log(person[key]);
}


// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obje = {
    [key1] : value1,
    [key2] : value2
}

console.log(obje);

//OR

const obj ={};

obj[key1] = value1;
obj[key2] = value2;

console.log(obj);

// spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2",
};
const obj2 = {
    key1 : "value1",
    key3 : "value3",
    key4 : "value4",
};
const newObject = {...obj1, ...obj2, key69: "value69"};
console.log(newObject)

// example
const newObject1 = {..."asdfghjklqwertyuiozxcvbnm"}
console.log(newObject1)

// Destructuring in objects

const band ={
    bandName : "led zapplin",
    famousSong : "stairway to heaven",
    year : 1968,
};

let {bandName, famousSong, ...restProps } = band;

console.log(bandName);
console.log(restProps);

// Nested destructuring

const users = [
    {userId: 1, firstName: "avi", gender: "male"},
    {userId: 2, firstName: "aviii", gender: "male"},
    {userId: 3, firstName: "avinash", gender: "male"},
];

const [{firstName: user1fistName, userId}, ,{gender: user3gender }] = users;
console.log(user1fistName);
console.log(userId);
console.log(user3gender);

// functions in javascript

function greet(){
    return console.log("happy birthday.....");
}
greet();

function add(number1, number2){
    return number1 + number2;
}

const sum = add(5,7);
console.log(sum);

function findTarget(array, target){
    for(let i=0; i<array.length; i++){
        if(array[i] == target){
            return i;
        }
    }
    return -1;
}

const veg =["potato", "tomato", "cabbage"];

const ans = findTarget(veg, "potato");
console.log(ans);

// function expression

const singHappyBirthday = function(){
    console.log("Happy birthday to you....")
}

const sumThreeNumbers = function(number1, number2, number3){
    return number1+number2+number3;
}

const answer = sumThreeNumbers(2,3,4);
console.log(answer);

// Arrow Function

const isEven = (number) => {
    return number % 2 ===0;
}

console.log(isEven(4));

// Hoisting 






// Functions inside functions

function app(){
    const myFunction = () =>{
        console.log("hello from myFunc")
    }
    const addTwo =(num1, num2) =>{
        return num1 + num2;
    }

    const mul =(num1, num2) => num1 * num2;
    console.log("inside app"); 
    myFunction();
    console.log(addTwo(5,6));
    console.log(mul(2,3));
}
app();

// lexical scope

const myVar = "value"; 

function myApp(){
    // const myVar = "value1";
    function myFunc(){

        const myFunc2 = () => {

        console.log("inside myFunc", myVar);
        
        };
        myFunc2();
    };
    
    console.log(myVar);
    myFunc();
}

myApp();

//Block scope vs function scope

// let and const are block scope
// var is function scope


// block scope

{
    let firstName = "Avinash";
    console.log(firstName);
}

{
    let firstName = "Aviii";
    console.log(firstName);
}

// function scope 
//the variables which are declared with var are the variable which are accessible from anywhere

{
    var fName = "Avinash";
}
console.log(fName);

// rest parameters

function myFun(a,b, ...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
myFun(3,4,5,6,7,8,9);

// param destructuring

// object 
const peerson = {
    firstname: "Avinash",
    gender: "male",
    age: 50,
}

function printDetails(obj){
    console.log(obj.firstname);
    console.log(obj.gender);
    console.log(obj.age);
//  console.log(obj.address);
    
}
printDetails(peerson);

// parm destructuring

function printtDetail({firstName, gender}){
    console.log(firstname);
    console.log(gender);
    console.log(age);
}

printtDetail(peerson);

// callback functions
// in this we make two functin atleast and then pass one function a parameter of another function
// the function in which funtion1 is assignd is named callback (its the good practice to keep name as callback)
function function2(name1){
    console.log(" i am inside function2");
    console.log(`my name is ${name1}`);
    
}
function function1(callback){
    console.log("hello there i am function1");
    callback("Avinash");

}
function1(function2);

// function returning function

function functionReturning(){
    function hello(){
        return "hello, this is hello function...";
    }
    return hello;
}
// OR
// function functionReturning(){
//     return function hello(){
//                 return "hello, this is hello function...";
//             };
// }

const aans = functionReturning();
console.log(aans());

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

numbers.forEach(function indexnumberWithValues(number, index){
    console.log(`the index is ${index} and the number is ${number*2}`); 

});

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

// filter methods

// it only stores the true values 

const numbber = [1,2,3,4,5,6];

const isthisEven = (number)=>{
    return number%2 == 0
};

const number_even = numbber.filter(isthisEven);
console.log(number_even);

// reduce methods in js
const numbber1 = [1,2,3,4,5,6];
const summ = numbber1.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 100); // in this we can set initial value of accumulator as neend here 100 is the initial value of accumulator 

console.log(summ);

// example 2 

const userCart =[
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 42000},
    {productId: 3, productName: "tablet", price: 15000},
    {productId: 4, productName: "TV", price: 20000},
    {productId: 5, productName: "watch", price: 2000},
];

const totalAmount = userCart.reduce((totalPrice, currentproduct)=>{
    return totalPrice + currentproduct.price;
}, 0);

console.log(totalAmount);

// Sort Method in Js 

// sort method change the original array
// it first treat the numbers of array as string

const nummber = [5,4,3,8,9,10];

nummber.sort((a,b)=>{
    return a-b; //first if a-b = positive ---> a,b will become  b,a example a= 5 , b= 4 then a-b =1 so a will be replaced by b and in the array it will become 4,5 instead of 5,4
});
// return a-b for ascending order and b-a for decending order

console.log(nummber);

//Example 

const products = [
    {productId: 1, productName: "p1",price: 300},
    {productId: 2, productName: "p1",price: 3000},
    {productId: 3, productName: "p1",price: 2300},
    {productId: 4, productName: "p1",price: 30},
    {productId: 5, productName: "p1",price: 500},
    {productId: 6, productName: "p1",price: 50},
    {productId: 7, productName: "p1",price: 12000},
];
// Low to High 
const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price
});


const highToLow = products.slice(0).sort((a,b)=>{
    return b.price - a.price;
});

console.log(products);
console.log(lowToHigh);
console.log(highToLow);

// Find Method 

const animals = ["Hello","cow","goat","cat"];

const resultt = animals.find((string)=>string.length===3);
console.log(resultt);

//example 

const ussers = [
    {userId: 1, userName: "Aviii"},
    {userId: 2, userName: "Avinash"},
    {userId: 3, userName: "Avinash kumar"},
    {userId: 4, userName: "Aviii jha"},
    {userId: 5, userName: "Avinash kumar"},
    {userId: 6, userName: "Avinash kumar jha"},
];

const myuser = ussers.find((ussers)=>ussers.userId===3);
console.log(myuser);

// Every method 

const everyMethod = [2,4,6,8,10];

const ressult = everyMethod.every((number)=>number%2===0);
console.log(ressult);

//example

const usserCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "TV", price: 52000},
    {productId: 3, productName: "SmartWatch", price: 2000},
    {productId: 4, productName: "Remote", price: 1200},
    {productId: 5, productName: "Laptop", price: 4200000},
    {productId: 6, productName: "Speaker", price: 1800},
];

console.log(usserCart);

const myresult = usserCart.every((item)=>item.price <= 100000);

console.log(myresult);

// some method 

const myresultt = usserCart.some((item)=>item.price <= 100000);
console.log(myresultt);

// fill method 
// value, start, end 

const myyArray = new Array(10).fill(0);
console.log(myyArray);


const fillMethod = [1,2,3,4,5,6,7];

console.log(fillMethod);

fillMethod.fill(0,2,4);
console.log(fillMethod);

// splice method
// start, no. of items to delete, insert

const spliceMethod = [1,2,3,4,5,6,7];
console.log(spliceMethod);

spliceMethod.splice(2,1,10);
console.log(spliceMethod);

// to get the deleted items 

const deletedItem = spliceMethod.splice(1,2,"inserted item 1", "inserted item 2");
console.log(deletedItem);
console.log(spliceMethod);

// Iterables ----> on which we can implement for of loop and iterate it like string, array 
// ----> array like objects
// ----> having length property
// ----> we can access with index
// example: string
// examples :

const friendName = "Avinash";
for(let char of friendName){
    console.log(char);
    
};

// sets (it is iterable)
//store data 
// sets also have its own methods 
// No index-Based access
// order is not guaranteed
// unique items only (no duplicate allowed)

const items = ["item1","item2", "item3"];
const setTest = new Set();
setTest.add(1);
setTest.add(2);
setTest.add(3);
setTest.add(4);
setTest.add(5);
setTest.add(6);
setTest.add(items);
setTest.add(10);

console.log(setTest);

if(setTest.has(2)){
    console.log("2 is present");
}else{
    console.log("2 is not present");   
}

// examples

const anArray = [1,2,3,4,5,7,5,5,9];
const uniqueElements = new Set(anArray);
let length = 0;
for(let element of uniqueElements){
    length++;
}

console.log(length);


// Maps object in js

//map is iterable
// store data in ordered fashion
// store key value pair (like object)
//duplicate keys are not allowed like objects 

// difference between maps and objects are :

//objects can only have strings or symbol
// as key

//in Maps you can use anything as key
//like array, number, string

const mapObject = {
    firstName: "avinash",
    age: 25,
    gender: "Male",
    1: "Avinash"
};
const map_object= new Map(mapObject)

console.log(mapObject.firstName);
console.log(mapObject["firstName"]);