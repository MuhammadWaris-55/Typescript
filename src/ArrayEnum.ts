//ways of declaring Array
const CarColors: string[] = ["Matt Black" , "Royal Blue"]

const CarPrice: number[] = [340, 400]

//we can also give custom type here
const highRating: Array<boolean> = [true, false]


type Car = {
    name: string;
    price: number;
    color: string;
}

//Making Array of objects with custom Datatypes
const car: Car[] = [
    {name: "BMW" , price: 340 , color: "Black"},
    {name: "Mercedes" , price: 250 , color: "White"},
]

//this is readonly array we can only define it , we cannot modify it
const carBrands: readonly string[] = ["Toyota", "Hyundai"]

//Two dimensional array
const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]

//tuples
let CarTuple: [string, number]
//Here giving values in same order as defined is necessary
CarTuple = ["Black", 440]
CarTuple = ["Blue", 330]