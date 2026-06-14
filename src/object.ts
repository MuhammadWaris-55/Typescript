//That's how we define objects in ts
let Car: {
  name: string;
  isMadeIn: number;
  superCar: boolean;
};

Car = {
  name: "Ferrari SF90",
  isMadeIn: 2022,
  superCar: true,
};

type car = {
  name: string;
  zeroToHundred: number;
  features: string[];
};

const BMW: car = {
  name: "M5CS",
  zeroToHundred: 2.7,
  features: ["Fastest", "Rare", "FamilyCar"],
};

//Duck Typing
type vehicle = { variant: string };
let M5CS: vehicle = { variant: "sedan" };

//there is no issue writing this because we satisfied the bare minimum properties that is variant
let G63 = { variant: "SUV", color: "Black" };

M5CS = G63;


type user = {
    username: string;
    password: string;
}

//if we don't give any one field that is defined it will have an error
const u: user = {
    username: "WarisCodes",
    password: "123456"
}