let N = parseInt(prompt("Enter N:"));
let seed = parseInt(prompt("Enter seed:"));
let current = N;

for (let i = 0; i < 3; i++) {
    if (current % 2 === 0) {
        current = current / 2 + seed;
    } else {
        current = current * 3 - seed;
    }
}

let isBetween = (current >= 100 && current <= 999);
let midDigit = parseInt(current.toString()[1]);

if (isBetween && midDigit === seed) {
    alert("YES, " + current);
} else {
    alert("NO, " + current);
}