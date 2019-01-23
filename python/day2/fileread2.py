myFile=open("test2.txt")
print(myFile.read())
print("Second read-------------")
print(myFile.read())
myFile.seek(0)
#Sets file pointer to begening of file
print(myFile.read())