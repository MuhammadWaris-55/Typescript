function makeCar(type: string, fueltank: number){
    console.log(`Making a ${type} Car which has a ${fueltank} litre of fuelTank`);
}

makeCar("Sedan", 50) //if we don't give the no of arguments it needed here then it will give an error , that's the main purpose of using typescript

function getCarPrize(): number {
    return 10000000
}