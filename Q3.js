let nVal = parseInt(prompt("Enter N:"));
let kVal = parseInt(prompt("Enter K:"));
let resultX = -1;

for (let x = 0; x <= 10000; x++) {
    let sum = nVal + x;
    
    
    let str = sum.toString();
    let reversed = str.split('').reverse().join('');
    
    if (str === reversed && sum % kVal === 0) {
        resultX = x;
        break;
    }
}
alert(resultX);