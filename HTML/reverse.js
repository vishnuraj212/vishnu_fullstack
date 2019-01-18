var temp1=0;
var temp2=0;
var i=97;
while(i>0)
{

temp1=i%10;
temp2=temp2*10+temp1;
i=parseInt(i/10);

}
console.log(temp2);