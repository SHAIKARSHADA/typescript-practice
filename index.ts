interface User {
  firstName: string,
  lastName: string,
  age: number,
  email?: string,
};

function isLegal(user: User): boolean {
  if(user.age > 18) {
    return true;
  } else { 
    return  false;
  } 
}

function greet(user: User): void{
  console.log("hello user" + user.firstName);
}

isLegal({
  firstName: "shaik",
  lastName: "hiask",
  age: 19
})

greet({
  firstName: "shaik",
  lastName: "hello",
  age: 19,
  email: "shaikkkk",
});