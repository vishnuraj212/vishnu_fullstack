import pandas as pd

class Parent:
  df=pd.read_csv("testcsv.csv")
  print(df)
    
class Child(Parent):
    type="Coach"
    mileage=8
myChild=Child()
x=myChild.df.ZIP+1
print(x) 
