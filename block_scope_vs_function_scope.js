
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
