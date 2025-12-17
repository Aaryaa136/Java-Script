function Pattern(no)
{
    let iCnt=0;

    for(iCnt=1 ; iCnt <= no ; iCnt++)
    {
        process.stdout.write("$\t*\t");
    }

    console.log();
}

function main()
{
    let iValue=5;

    Pattern(iValue);
}

main();