type student = {
  name: string;
  startDate: number
}

interface Manager  {
  department: string;
}

type TeamLead = student & Manager;

const teamLead: TeamLead =  {
  name: "shaik",
  department: "shaiahgaigi",
  startDate: 2004 ,
} 


// this is how you create an intersection in the typescript and unions are 

// / types has an difference that it makes it unique | types is uses the  equal to '=' and interfaces doesnt uses that 
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


// using types in a  an array  , you just add an  : number"[]"  just adding the [] after an number or string you can 


const arr: number[] = [1,23,5]


//Given an array of positive integers as input, return the maximum value in the array

function maxValue(arr: number[]) {
  let max = 0;
  for(let i = 0; i<arr.length; i++ ) {
      if(arr[i]>max)  {
        max = arr[i];
      }
  }
  return max;
}

// Given a list of users, filter out the users that are legal (greater than 18 years of age)

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function filteredUsers(users: User[]) {
  return users.filter(x => x.age >= 18);
}
console.log(filteredUsers([{
  firstName: "harkirat",
  lastName: "Singh",
  age: 21
}, {
  firstName: "Raman",
  lastName: "Singh",
  age: 16
}, ]));




