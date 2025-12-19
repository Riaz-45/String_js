const numbers = [1,2,3,4,5];
const reverse = [] ;
 
// normal for loop use kore
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
    // reverse.push(numbers[i]);
    reverse.unshift(numbers[i]);
}


// reverse for loop use kore
for(let i=numbers.length-1; i>=0; i--){
    reverse.push(numbers[i]);
}


// for of use kore
for(const num of numbers){
    reverse.unshift(num);
}


// built-in method use kore
numbers.reverse();
console.log(numbers);


console.log(numbers);
