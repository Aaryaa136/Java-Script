function ChkVowel(ch)
{
    if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
    {
        return true;
    }
    else
    {
        return false;
    }
}

function main()
{
    let cValue="t";
    let bRet=false;

    bRet=ChkVowel(cValue);

    if(bRet == true)
    {
        console.log(`${cValue} is vowel`);
    }
    else
    {
        console.log(`${cValue} is not vowel`);   
    }
}

main();