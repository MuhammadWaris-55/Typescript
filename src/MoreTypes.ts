//Forcefull Type Assertion
let response: any = "32";

let numericLength: number = (response as string).length;

type Car = {
  name: string;
};

let CarString = '{"name":"BMW"}';
let CarObject = JSON.parse(CarString) as Car;

console.log(CarObject);

const InputElement = document.getElementById("username") as HTMLInputElement;

//Use of Unknown

//This will not give an error because it uses any
let value:any;
value = "Car"
value = [1,2,3]
value = 3.2
value.toUpperCase()

//Now this will give an error
// let NewValue:unknown;
// NewValue = "Car"
// NewValue = [1,2,3]
// NewValue = 3.2
// NewValue.toUpperCase()

let NewValue: unknown;
NewValue = "Car";
NewValue = [1, 2, 3];
NewValue = 3.2;
if (typeof NewValue === "string") {
  NewValue.toUpperCase();
}
