let base = parseFloat(prompt("Enter base:"));
let dist = parseFloat(prompt("Enter distance:"));
let mins = parseInt(prompt("Enter minutesLate:"));
let seedVal = parseInt(prompt("Enter seed:"));

let fare = base + (7 * dist);

if (mins > 15) {
    fare += 20;
}

if (dist > 10) {
    fare += (0.10 * fare);
}

if (seedVal % 2 !== 0) {
    fare -= seedVal;
} else {
    fare += seedVal;
}


let finalFare = Math.ceil(fare / 5) * 5;
alert(finalFare);