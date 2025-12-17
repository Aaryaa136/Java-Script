function ChkGreater(no)
{
    if(no > 100)
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
    let iValue=109;
    let bRet=false;

    bRet=ChkGreater(iValue);

    if(bRet == true)
    {
        console.log("Number gerater than 100");
    }
    else
    {
        console.log("Number smaller than 100");
    }
}

main();