function FindLargest(no1,no2,no3)
{
    if(no1 > no2 && no1 > no3)
    {
        return no1;
    }
    else if(no2 > no3 && no2 > no1)
    {
        return no2;
    }
    else
    {
        return no3;
    }
}

function main()
{
    let iValue1=88 , iValue2=45 ,iValue3=180;
    let iRet=0;

    iRet=FindLargest(iValue1,iValue2,iValue3);

    console.log("Maximum is",iRet);
}

main();