let num = [1,2,3,4];
let sum = 0;
for( let n of num){
    sum += n;
}
console.log(sum);
num.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});