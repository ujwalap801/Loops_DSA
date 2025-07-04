// FIND SECOND LARGEST Element in an array

function secondLargest(arr)
{

        if (arr.length < 2)
        {
            return null; //if arr= [1] then no other element to compare 
        }

    let firtLargest = -Infinity;
    let secLargest = -Infinity;
    for (let i = 0; i < arr.length; i++)
    {

        if (arr[i] > firtLargest)
        {
            secLargest = firtLargest;
            firtLargest = arr[i]

        }
        else if (arr[i] > secLargest && arr[i] != firtLargest)
        {
            secLargest = arr[i];
        }

      
    }

    return secLargest === -Infinity ? null : secLargest;
 
}

let arr1 = [1];
let arr2 = [5, 5, 4, 4, 3];
let arr3 = [10, 10, 10];
let arr4 = [4, 9, 0, 2, 8, 7, 1];

console.log(secondLargest(arr1)); // → null
console.log(secondLargest(arr2)); // → 4
console.log(secondLargest(arr3)); // → null
console.log(secondLargest(arr4)); // → 8