
function app(){
    const myFunction = () =>{
        console.log("hello from myFunc")
    }
    const addTwo =(num1, num2) =>{
        return num1 + num2;
    }

    const mul =(num1, num2) => num1 * num2;
    console.log("inside app"); 
    myFunction();
    console.log(addTwo(5,6));
    console.log(mul(2,3));
}
app();

