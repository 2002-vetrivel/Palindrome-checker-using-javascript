const isPalindrome = () =>
{
    const string = document.getElementById("input").value;
    const processedString = string.toLowerCase().replace(/[\W_]/g, '');
    const reverseString = processedString.split('').reverse().join('');

    const result = document.querySelector('#result');
    console.log(processedString, reverseString)

    if(processedString == reverseString)
    {
        result.innerHTML = "Palindrome";
    }
    else 
    {
        result.innerHTML = "Not a Palindrome";
    }
}