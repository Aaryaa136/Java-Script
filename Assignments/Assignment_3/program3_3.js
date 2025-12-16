function DisplayEvenFactors(iNo)
{
    let iCnt=0;

    if(iNo < 0)
    {
        return ;
    }

    for(iCnt=1 ; iCnt <= iNo/2 ; iCnt++)
    {
        if((iNo % iCnt == 0) && (iCnt % 2 == 0))
        {
            process.stdout.write(iCnt +"\t");
        }
    }

    console.log();
}

function main()
{
    let iValue=36;

    DisplayEvenFactors(iValue);
}

main();