class Vehicle:
    type="sedan"
    YoM=2016
    mileage=17
class Bus(Vehicle):
    type="Coach"
    mileage=8
myBus=Bus()
print(myBus.type,myBus.YoM,myBus.mileage)

class Car(Bus):
    type="Hashback"
    mileage=12
myCar=Car()
print(myCar.type,myCar.type,myCar.mileage)