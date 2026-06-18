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

const car: Car[] = [
    {name: "BMW" , price: 340 , color: "Black"},
    {name: "Mercedes" , price: 250 , color: "White"},
]