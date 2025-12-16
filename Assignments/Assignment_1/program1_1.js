function Divide(no1,no2)
{
    if(no2 == 0)
    {
        return -1;
    }

    let iAns=0;
    iAns=no1/no2;
    return iAns;
}

function main()
{
    let iValue1=15 , iValue2=5;
    let iRet=0;

    iRet=Divide(iValue1,iValue2);

    console.log("Divison is:",iRet);
}

main();