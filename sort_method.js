
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
