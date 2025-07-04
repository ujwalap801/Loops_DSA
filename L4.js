
// Write a fuction that return the Smallest number in an array
let arr = [-1, -5, -80, -100];

let arr1 = [4, 8, 7, 100, 2400];
function maxElement(arr) {
    let max = Infinity;

//    Infinity represents a number larger than any other number.
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < max) {
            max = arr[i];
        }

    }

    return max;
}


console.log(maxElement(arr));//-100
console.log(maxElement(arr1));//4


// SECOND WAY TO FIND IT MY LOGIC
function maxElement1(arr) {
    let max = arr[0];

    // -Infinity represents a number smaller (more negative) than any other number.
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < max) {
            max = arr[i];
        }

    }

    return max;
}


console.log(maxElement1(arr));//-100
console.log(maxElement1(arr1));//4