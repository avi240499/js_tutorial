
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
