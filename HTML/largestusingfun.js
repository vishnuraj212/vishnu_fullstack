function largest(num1,num2,num3)
{
    if(num1>num2&&num1>num3)
    {
        console.log(num1+"is the largest");
    }
    else if(num2>num1&&num2>num3)
    {
        console.log(num2+"is the largest");
    }
    else
    {
        console.log(num3+"is the largest");
    }
}

var a=1;
var b=5;
var c=2;
largest(a,b,c);