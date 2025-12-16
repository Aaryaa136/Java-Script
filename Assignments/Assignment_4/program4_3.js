function NonFact(no)
{
    let iCnt=0;

    for(iCnt=1 ; iCnt <= no ; iCnt++)
    {
        if(no % iCnt != 0)
        {
            process.stdout.write(iCnt+"\t");
        }
    }
    console.log();
}

function main()
{
    let iValue=12;

    NonFact(iValue);
}

main();