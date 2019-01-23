class Car:
    model="Sedan"
    def __init__(self,model,color):
        self.model=model
        self.color=color
mycar1=Car("Swift","white")
mycar2=Car("Indica","black")
mycar3=Car("Waganar","Ash")
print(mycar1.model,mycar1.color)