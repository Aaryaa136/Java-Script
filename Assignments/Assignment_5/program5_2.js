function FindMax(no1,no2)
{
    if(no1 > no2)
    {
        return no1;
    }
    else
    {
        return no2;
    }
}

function main()
{
    let iValue1=88;
    let iValue2=45;
    let iRet=0;

    iRet=FindMax(iValue1,iValue2);

    console.log("Maximum is",iRet);
}

main();