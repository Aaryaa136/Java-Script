function Percentage(total_marks,Obtained_marks)
{
    let iPer=0;

    iPer=(Obtained_marks/total_marks)*100;
    return iPer;
}

function main()
{
    let iValue1=1000, iValue2=745 ; 
    let iRet=0;

    iRet=Percentage(iValue1 , iValue2);

    console.log("Percentage is:",iRet);
}

main();