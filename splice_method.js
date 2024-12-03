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
