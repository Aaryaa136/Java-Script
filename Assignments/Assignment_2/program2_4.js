function Display(iNo,iFrequency)
{
    let iCnt=0;

    for(iCnt=1 ; iCnt <= iFrequency ; iCnt++)
    {
        process.stdout.write(iNo+"\t");
    }
    console.log();
}

function main()
{
    let iValue=-2;
    let iCount=5;

    Display(iValue,iCount);
}

main();