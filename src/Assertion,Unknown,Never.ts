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


//Way of Wrting Try Catch in Typescript
try {
    
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message)
    }
    console.log("Error" , error)
}


//Type Never

type Role = "admin" | "user"

function redirectBsedOnRole(role:Role){
    if (role === "admin") {
      console.log("Redirecting to Admin Dashboard")
      return
    }
    if (role === "user") {
      console.log("Redirecting to User Dashboard")
      return
    }
    role; //Here the type of role is never because we handelled all the expected outcomes , and if any expected outcome not handelled then this will show if we hover it
}