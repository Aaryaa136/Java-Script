function Factorial(no)
{
    if(no < 0)
    {
        no=-no;
    }

    let iCnt=0;
    let iFact=1;

    for(iCnt=1 ; iCnt <= no ; iCnt++)
    {
        iFact=iFact*iCnt;
    }

    return iFact;
}

function main()
{
    let iValue=-5;
    let iRet=0;

    iRet=Factorial(iValue);

    console.log(`Factorial of ${iValue} is:`,iRet);
}

main();