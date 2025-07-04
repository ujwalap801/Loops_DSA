// Write a function to search an element in array, if it is found it should return index, if not return -1

let arr = [1, 4, 0, 10, 9, 8];
let target = 21;

function arrayCheck(arr, target)
{
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] === target)
        {

            return i;
        }
    }

    return -1;
}

console.log(arrayCheck(arr, target));