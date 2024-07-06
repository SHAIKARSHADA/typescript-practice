// interface User {
//   firstName: string,
//   lastName: string,
//   age: number,
//   email?: string,
// };

// function isLegal(user: User): boolean {
//   if(user.age > 18) {
//     return true;
//   } else { 
//     return  false;
//   } 
// }

// function greet(user: User): void{
//   console.log("hello user" + user.firstName);
// }

// isLegal({
//   firstName: "shaik",
//   lastName: "hiask",
//   age: 19
// })

// greet({
//   firstName: "shaik",
//   lastName: "hello",
//   age: 19,
//   email: "shaikkkk",
// });



// types has an difference that it makes it unique | types is uses the  equal to '=' and interfaces doesnt uses that 
type User = {
  firstName: string;
  lastName: string;
  age: string;
}


// creating an function to print an id number which can be an id number or string


type stringOrNumber = string | number;

function idPrinter (id: stringOrNumber) {
  console.log(`id: ${id}`);
}


idPrinter("101");
idPrinter(101);