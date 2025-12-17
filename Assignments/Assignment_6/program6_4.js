function Multiply(no1,no2,no3)
{
    if(no1 == 0 && no2 == 0 && no3==0)
    {
        return 0;
    }

    let iProd = (no1 !== 0 ? no1 : 1) * (no2 !== 0 ? no2 : 1) * (no3 !== 0 ? no3 : 1);
    return iProd;
}

function main()
{
    let iValue1=5, iValue2=0 , iValue3=7; 
    let iRet=0;

    iRet=Multiply(iValue1 , iValue2 , iValue3);

    console.log("Multiplication is:",iRet);
}

main();