let n =5;
for(let i=0;i<n;i++)
{
    let row = "";
    for(let j=0;j<=i;j++)
    {
        row = row + " "+(i+1);
    }

    console.log(row);
}

//  1
//  2 2
//  3 3 3
//  4 4 4 4
//  5 5 5 5 5