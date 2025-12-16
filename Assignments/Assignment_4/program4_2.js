function FactRev(no)
{
    let iCnt=0;

    for(iCnt=no/2 ; iCnt >= 1 ; iCnt--)
    {
        if(no % iCnt == 0)
        {
            process.stdout.write(iCnt+"\t");
        }
    }
    console.log();
}

function main()
{
    let iValue=12;

    FactRev(iValue);
}

main();