function SumNonFact(no)
{
    let iCnt=0;
    let iSum=0;

    for(iCnt=1 ; iCnt <= no ; iCnt++)
    {
        if(no % iCnt != 0)
        {
            iSum=iSum+iCnt;
        }
    }
    
    return iSum;
}

function main()
{
    let iValue=12;
    let iRet=0;

    iRet=SumNonFact(iValue);

    console.log("Summation of non factors is:",iRet);
}

main();