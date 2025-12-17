function Display(no)
{
    let iCnt=0;

    for(iCnt=no ; iCnt >= 1 ; iCnt--)
    {
        process.stdout.write(iCnt+"\t");
    }

    console.log();
}

function main()
{
    let iValue=8;

    Display(iValue);
}

main();