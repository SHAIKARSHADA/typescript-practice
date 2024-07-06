const x: number = 1;
console.log(x)

//writing an simple function to say hello with their name

function greet(firstname: string) {
  console.log("hello " + firstname);
}

greet("888888")

//simple sum function in ts 
// sum(a: number, b: number): number in this the last ): number is declared to say that it gives an output of number even if you dont declare it will assume beczuse of the type inference, but good practice for putting that there .
function sum(a: number, b: number): number {
  return a+b;
}

const value = sum(15,19);
console.log(value);

// create an function isLegal

function isLegal(age: number) {
  if (age > 18 ) {
    return true;
  } else {
    return false;
  }
}

isLegal(18)

// create an function that takes one argument as callback and runs it after 1 second;

function runAfter1S(fn: () => void) {
  setTimeout(fn,1000);
} 

runAfter1S(() => {
  console.log("hello");
})


//seeing target in action  "target" : "es5" in ts.config.json
const greeting = (firstName: string) =>  `hello ${firstName}`;



// In this it will create an explicit and implicitly file 
const greeting12 = (firstName) =>  `hello ${firstName}`;