// Some method 

// if any condition is true it will return true
const someMethod = [2,4,7,6,8,10];

const ressult = someMethod.some((number)=>number%2===0);
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

// some method 

const myresultt = usserCart.some((item)=>item.price <= 100000);
console.log(myresultt);

