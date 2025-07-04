// Find the function to count the digits in a number
function countDigit(n) {

    if(n ===0)
    {
        return 1;
    }

    // Converting negative number to postive numbers
    n = Math.abs(n);
    
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10); // rounds down the value
        count++;
    }
    return count;
}

let n = 0;
let countNumber = countDigit(n);
console.log(countNumber); 

// CORNER CASE
// 1)If n=0
// 2)If n=negative
