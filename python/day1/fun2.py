def printme(a,b):
    c=a*b
    c1=a+b
    c2=a-b
    return(c,c1,c2)
x=int(input("Enter the fisrt element"))
y=int(input("Enter the second element"))
z=printme(x,y)
print("...",z)
print(type(z))