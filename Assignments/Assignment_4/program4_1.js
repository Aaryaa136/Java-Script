function MultiFact(no)
{
    let iCnt=0;
    let iProd=1;

    for(iCnt=1 ; iCnt <= no/2 ; iCnt++)
    {
        if(no % iCnt == 0)
        {
            iProd=iProd*iCnt;
        }
    }

    return iProd;
}

function main()
{
    let iValue=12;
    let iRet=0;

    iRet=MultiFact(iValue);

    console.log("Muliplication of facto is:",iRet);
}

main();