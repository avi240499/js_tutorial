// filter methods

// it only stores the true values 

const numbber = [1,2,3,4,5,6];

const isthisEven = (number)=>{
    return number%2 == 0
};

const number_even = numbber.filter(isthisEven);
console.log(number_even);
