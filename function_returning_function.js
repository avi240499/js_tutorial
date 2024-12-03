// function returning function

function functionReturning(){
    function hello(){
        return "hello, this is hello function...";
    }
    return hello;
}
// OR
// function functionReturning(){
//     return function hello(){
//                 return "hello, this is hello function...";
//             };
// }

const aans = functionReturning();
console.log(aans());

