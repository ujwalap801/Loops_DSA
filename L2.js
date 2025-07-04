// Write a function that returns the nuumber of negative numbers in a array
let arr = [2, -2, 7, -9, 5, -4,17,-29 ,-80,-50];

function checkNegative(arr)
{
    let count = 0;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] < 0)
        {
            count++;
        }
    }
    return count;
}


console.log(checkNegative(arr));