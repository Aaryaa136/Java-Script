function MulipleDisplay(no)
{
    if(no < 0)
    {
        no=-no;
    }
    
    let iCnt=0;

    for(iCnt=1 ; iCnt <=5  ; iCnt++)
    {
        process.stdout.write(iCnt*no+"\t");
    }

    console.log();
}

function main()
{
    let iValue=4;

    MulipleDisplay(iValue);
}

main();