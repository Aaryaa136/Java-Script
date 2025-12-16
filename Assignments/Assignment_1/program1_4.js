function Check(no)
{
    if(no % 5 == 0)
    {
        return true;
    }    
    else
    {
        return false;
    }
}

function main()
{
    let iValue=80;
    let bRet=false;

    bRet=Check(iValue);

    if(bRet == true)
    {
        console.log("Number is divisible by 5");
    }
    else
    {
        console.log("Number not divisble by 5");
    }
}

main();