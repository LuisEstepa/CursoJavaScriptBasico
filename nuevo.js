var car = { color: 'gray', brand: 'Chevsssrolet', licensePlate: '' };
BuscaFuncionarioVer2(car); 

function BuscaFuncionarioVer2(car) {
    this.color = car.color;
    this.brand = car.brand;
    this.licensePlate = car.licensePlate;
    if (car.licensePlate === null || car.licensePlate === undefined) {
    car.drivingLicense = "false";
    return car;

  } 
else {
    car.drivingLicense = "true";
    return car;
        
    }
}