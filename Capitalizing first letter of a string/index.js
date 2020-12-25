var str = prompt("Enter a string");
var arr = str.split(" ");
var Upperchar = (str) =>
{
    
    for (var i=0;i<arr.length;i++)
    {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }
    return arr.join(" ");
}
var show = Upperchar(str);
document.write(show); 