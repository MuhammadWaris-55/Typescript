//Type Narrowing
function carModel(model: string | number) {
  if (typeof model === "string") {
    return `Model of this BMW is ${model}`; //the advantage of doing this is when we write "." in front of model we get all the methods of Strings
  }
  return `Model Year ${model}`; //And if we put "." here we get all methods of number
}

//truthful checking
function carDelivered(msg?: string) {
  //putting ? menas we dont know we will get the msg or not
  if (msg) {
    return `Car is ${msg}`;
  }
  return `Car is not Delivered`; // we dont have to use msg variable here becase we r sure we get this output when our msg has not came
}

//EXhaustive Checking
function carName(name: "BMW" | "Mercedes" | "Aston Martin" | number) {
  if (name === "BMW") {
    return `BMW M5 CS`;
  }
  if (name === "Mercedes") {
    return `Mercedes-AMG GT`;
  }
  if (name === "Aston Martin") {
    return `Aston Martin Valkyrie`;
  }
  return `Model Number of car is ${name}`;
}
