//Type Narrowing
function carModel(model: string | number) {
  if (typeof model === "string") {
    return `Model of this BMW is ${model}`; //the advantage of doing this is when we write "." in front of model we get all the methods of Strings
  }
  return `Model Year ${model}`; //And if we put "." here we get all methods of number
}
