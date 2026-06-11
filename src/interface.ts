// function Car(features: {type: string ; horsepower: number ; sedan: boolean}) {
//     console.log(features);
// }

// function DeliverCar(features: {type: string ; horsepower: number ; sedan: boolean}) {
//     console.log(features);
// }
//Here the Signature Of data is same so we dont have to write it again and again

type CarFeatures = {
    type: string ;
    horsepower: number ;
    sedan: boolean
}
//now we can write same logic as

function Car(features: CarFeatures) {
    console.log(features);
}

function DeliverCar(features: CarFeatures) {
    console.log(features);
}


//this code works here but it will not work in many cases or situations
type TeaRecipe = {
    water: number
    milk: number
}

class Chai implements TeaRecipe{
    water = 100
    milk = 100
}

//like doing this is not allowed we have to make it interface
// type CupSize = "small" | "large"

// class chai implements CupSize{
    
// }

//we can write same thing in interface 
interface CupSize {
    Size: "small" | "large"

} 

class chai implements CupSize{
    Size: "small" | "large" = "large";
}