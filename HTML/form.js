function Readme()
{
    var name=document.getElementById('name').value;
    var rollno=document.getElementById("rollno").value;
    var myoption=document.getElementById("opvalue").value;
    console.log(name);
    console.log(rollno);
    console.log(myoption);

document.getElementById("display").innerHTML=name;
}