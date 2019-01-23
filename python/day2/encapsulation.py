class Employee:
    name="Vishnu Raj"
    age="34"
    basicpay=20000
    HRA=8000
    DA=60/100*basicpay
    def CalculateSalary(self):
        return self.basicpay+self.HRA+self.DA
myEmployee=Employee()
print("monthly Salary of",myEmployee.name,"is",myEmployee.CalculateSalary())