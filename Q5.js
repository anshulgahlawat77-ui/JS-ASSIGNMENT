let targetN = parseInt(prompt("Enter N:"));
let s = parseInt(prompt("Enter seed:"));
let m = 0;
let currentSum = 0;
let divisor = s + 2;

while (currentSum < targetN) {
    m++;
    if (m % divisor !== 0) {
        currentSum += m;
    }
}
alert("m=" + m + ", sum=" + currentSum);