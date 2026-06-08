//Forcefull Type Assertion
let response: any = "32";

let numericLength:number = (response as string).length

type Car = {
    name: string
}

let CarString = '{"name":"BMW"}'
let CarObject = JSON.parse(CarString) as Car 

console.log(CarObject)