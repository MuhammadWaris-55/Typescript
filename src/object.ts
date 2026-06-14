//That's how we define objects in ts
let Car: {
    name: string;
    isMadeIn: number;
    superCar: boolean;
}

Car = {
    name: "Ferrari SF90",
    isMadeIn: 2022,
    superCar: true,    
}

type car = {
    name: string;
    zeroToHundred: number;
    features: string[]
}

const BMW: car = {
    name: "M5CS",
    zeroToHundred: 2.7,
    features: ["Fastest" , "Rare" , "FamilyCar"]
}