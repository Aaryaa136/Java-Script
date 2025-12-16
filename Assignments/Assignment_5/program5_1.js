function CheckEvenOdd(no)
{
    if(no % 2 == 0)
    {
        console.log("Number is even");
    }
    else
    {
        console.log("Number is odd");
    }
}

function main()
{
    let iValue=88;

    CheckEvenOdd(iValue);
}

main();