
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
