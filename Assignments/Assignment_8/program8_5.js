function TableRev(no)
{
    if(no < 0)
    {
        no=-no;
    }

    let iCnt=0;

    for(iCnt=10 ; iCnt >= 1 ; iCnt--)
    {
        process.stdout.write(iCnt*no+"\t");
    }
}

function main()
{
    let iValue=2;

    TableRev(iValue);
}

main();