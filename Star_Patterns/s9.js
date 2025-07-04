let n =5;
for(let i=0;i<n;i++)
{
    let row = "";
    let change =1;
    
    for(let j=0;j<=i;j++)
    {
        row = row +" "+change;
        if(change ===1)
        {
            change=0;
        }
        else{
            change =1;
        }

    }

    console.log(row);
}


//  1
//  1 0
//  1 0 1
//  1 0 1 0
//  1 0 1 0 1