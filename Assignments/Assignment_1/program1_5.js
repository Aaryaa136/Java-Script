function Display()
{
    let iCnt=0;

    for(iCnt=1 ; iCnt <= 5 ; iCnt++)
    {
        process.stdout.write("*\t");  //for new tab space
    }
       
    console.log();
}

function main()
{
    Display();
}

main();