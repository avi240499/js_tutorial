// lexical scope
// when we call any variable in a function and it is not defined in the same function then it will search for the value (variable in all the function inside that )
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


