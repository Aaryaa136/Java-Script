function Number(no)
{
    if(no < 50)
    {
        console.log("Small");
    }
    else if(no > 100)
    {
        console.log("Large");
    }
    else
    {
        console.log("Medium");
    }
}

function main()
{
    let iValue=75;

    Number(iValue);
}

main();