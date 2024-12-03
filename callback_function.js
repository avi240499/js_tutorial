
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