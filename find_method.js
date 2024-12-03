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
