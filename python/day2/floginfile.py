uname=input("ENter your Username:")
passw=input("Entter your Password:")
fileObj=open("test4.txt","r")
username=fileObj.readline()
password=fileObj.readline()
print(uname,passw,username,password)
username=username.rstrip("\n")
if(uname==username and passw==password):
    print("Successfull login")
else:
    print("Unsuccessfull login")