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