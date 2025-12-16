function DisplayConvert(ch)
{
    let code=ch.charCodeAt(0);

    if(ch >= 97 && ch <= 122)
    {
        code=code-32;
        console.log(String.fromCharCode(code));
    }
    else if(ch >= 65 && ch <= 90)
    {
        code=code+32;
        console.log(String.fromCharCode(code));
    }
    else
    {
        console.log("Not an alphabet character");
    }
}

function main()
{
    let cValue="t";

    DisplayConvert(cValue);
}

main();