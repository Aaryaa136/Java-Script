function FactDiff(no)
{
    let iCnt=0;
    let iSumFact=0 , iSumNonFact=0;

    for(iCnt=1 ; iCnt <= no ; iCnt++)
    {
        if(no % iCnt != 0)
        {
            iSumNonFact=iSumNonFact+iCnt;
        }
        else
        {
            iSumFact=iSumFact+iCnt;
        }
    }
    
    return (iSumFact-iSumNonFact);
}

function main()
{
    let iValue=12;
    let iRet=0;

    iRet=FactDiff(iValue);

    console.log("Difference of summation of factors and non factors is:",iRet);
}

main();