function ChkEqual(no1,no2)
{
    if(no1 == no2)
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
    let iValue1=10 , iValue2=12;
    let bRet=false;

    bRet=ChkEqual(iValue1 , iValue2);

    if(bRet == true)
    {
        console.log("Numbers are equal");
    }
    else
    {
        console.log("Numbers not equal");
    }
}

main();