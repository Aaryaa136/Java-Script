function Display(no)
{
    let iCnt=0;

    for(iCnt=-no ; iCnt <= no ; iCnt++)
    {
        process.stdout.write(iCnt+"\t");
    }

    console.log();
}

function main()
{
    let iValue=4;

    Display(iValue);
}

main();