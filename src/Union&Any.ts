//Union
let CarModel: number | string = 2022; //its value can either be a number or a string

let apiRequestStatus: "pending" | "success" | "error" = "pending"; // this means we cannot give anyother value rather than these , we can only give from these
apiRequestStatus = "success";

//Any
let orders = ["33", "32", "123", "142"];

// let currentorder; //if we didn't assign data type then it will automatically be "any" which means it does not care what type of data you will give , it will acccept all

let currentorder: string | undefined;

for (let order of orders) {
  if (order === "32") {
    currentorder = order;
    break;
  }
}

console.log(currentorder);
