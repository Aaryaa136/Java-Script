function Display(no)
{
    let iCnt=0;

    if(no < 0)
    {
        return ;
    }
    
    for(iCnt=1 ; iCnt <= no ; iCnt++)
    {
        process.stdout.write("*\t");  //for new tab space
    }
       
    console.log();
}

function main()
{
    let iValue=6;

    Display(iValue);
}

main();