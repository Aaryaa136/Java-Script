function Display(no)
{
    let iCnt=0;

    if(no < 0)
    {
        return ;
    }
    
    iCnt=1 
    while(iCnt <= no)
    {
        process.stdout.write("*\t");  //for new tab space
        iCnt++;
    }
       
    console.log();
}

function main()
{
    let iValue=6;

    Display(iValue);
}

main();