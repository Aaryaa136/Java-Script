function CheckNumberType(no)
{
    if(no > 0)
    {
        console.log("Number is positive");
    }
    else if(no == 0)
    {
        console.log("Number is zero");
    }
    else
    {
        console.log("Number is negative");
    }
}

function main()
{
    let iValue=-5;

    CheckNumberType(iValue);
}

main()