

// PANLINDROME NUMBER LEETCODE
var isPalindrome = function(x) {
     if( x<0)
    {
        return false;
    }
    let xcopy =x;

    let rev=0;
    while(x>0)
    {
        let rem =x%10;
         rev = (10*rev)+rem;
        x=Math.floor(x /10);
    }
    return  rev === xcopy;

};


let P1 = isPalindrome(121)
console.log(P1);



let P2 = isPalindrome(-121)
console.log(P2);
