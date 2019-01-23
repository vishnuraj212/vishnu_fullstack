def grade(sum):
  avg=(sum/5)
  return avg


name=input("Enter your name  ")

print(name)
z1=0
for i in range(5):
    z=int(input("Enter yur marks " ))
    z1=z1+z

avg=grade(z1)
if(avg>=90):
    print("Grade: A+")
elif(avg>=80 and avg<90):
    print("Grade: B+")
elif(avg>=70 and avg<80):
    print("Grade: C+")
elif(avg>=60 and avg<70):
    print("Grade: D")
else:
    print("Grade: F")