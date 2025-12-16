function DisplayFactors(iNo)
{
    let iCnt=0;

    if(iNo < 0)
    {
        return ;
    }

    for(iCnt=1 ; iCnt <= iNo/2 ; iCnt++)
    {
        if(iNo % iCnt == 0)
        {
            process.stdout.write(iCnt +"\t");
        }
    }

    console.log();
}

function main()
{
    let iValue=24;

    DisplayFactors(iValue);
}

main();