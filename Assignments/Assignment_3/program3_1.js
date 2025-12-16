function PrintEven(iNo)
{
    let iCnt=0;

    if(iNo < 0)
    {
        return ;
    }

    for(iCnt=1 ; iCnt <= iNo ; iCnt++)
    {
        process.stdout.write(iCnt*2 +"\t");
    }

    console.log();
}

function main()
{
    let iValue=7;

    PrintEven(iValue);
}

main();