let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));
let count = 0;

for (let x = L; x < R; x++) {
    
    if (x % K === 0) {
        let temp = x;
        let sum = 0;
        let hasZero = false;
        
        
        let digits = x.toString();
        for (let i = 0; i < digits.length; i++) {
            let digit = parseInt(digits[i]);
            if (digit === 0) {
                hasZero = true;
                break;
            }
            sum += digit;
        }

        if (!hasZero) {
            
            let isPrime = true;
            if (sum < 2) isPrime = false;
            for (let i = 2; i <= Math.sqrt(sum); i++) {
                if (sum % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            
            if (isPrime) {
                count++;
            }
        }
    }
}
alert(count);