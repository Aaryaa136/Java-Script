function OddDisplay(no)
{
    let iCnt=0;

    for(iCnt=1 ; iCnt <= no ; iCnt++)
    {
        if(iCnt % 2 != 0)
        {
            process.stdout.write(iCnt+"\t");
        }
    }
    console.log();
}

function main()
{
    let iValue=18;

    OddDisplay(iValue);
}

main();