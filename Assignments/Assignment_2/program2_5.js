function Chkeven(iNo)
{
    if(iNo % 2 == 0)
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
    let iValue=49;
    let bRet=false;

    bRet=Chkeven(iValue);

    if(bRet == true)
    {
        console.log("Number is even");
    }
    else
    {
        console.log("Number is odd");
    }
}

main();