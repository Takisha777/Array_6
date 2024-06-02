const numbers = [10, 4, 100, -5, 54, 2];
let sumOfCubs = 0;
// method for
for (let i=0; i<numbers.length; i++){
    sumOfCubs += numbers[i]**3;
}
console.log(sumOfCubs);

//method for ... of
sumOfCubs = 0;
for (let number of numbers){
    sumOfCubs += number ** 3;
}
console.log(sumOfCubs);

//method forEach()
sumOfCubs = 0;
numbers.forEach((item) => {
    return sumOfCubs += item**3;
});
console.log(sumOfCubs);

// method reduce()

sumOfCubs = numbers.reduce(( acc,item)=> {
    return acc + item**3},0);
console.log(sumOfCubs);


