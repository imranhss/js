// Fibonacci series

let n1 = 0;
let n2 = 1;
let sum = 0;
console.log(n1 + " \n" + n2);

for (let i = 1; i <= 8-2; i++) {
    sum = n1 + n2;
    console.log(sum);
    n1 = n2;
    n2 = sum;
}



// Swap / Swapping

// let x=10;
// let y=20;
// let temp=0;
// temp=x;
// x=y;
// y=temp;

// console.log("x= "+x+" y= "+y);





//prime number
// let number=2;
// let counter=0;

// for(let i=1; i<=number; i++){

//     if (number%i==0){
//             counter=counter+1;
//     }
// }
// if(counter==2){
//     console.log("Prime Number");
// }
// else{
//     console.log("Not Prime Number");
// }

// Switch statement
// let day=3;

// switch(day){
//     case 1:
//         console.log("Saturday");
//         break;
//     case 2:
//         console.log("Sunday");
//         break;
//     case 3:
//         console.log("Monday");
//         break;
//     case 4:
//         console.log("Tuesday");
//         break;
//     default:
//         console.log("Nothing found");
// }



// find result
// let marks = 45;

// if (marks < 0) {
//     console.log("Invalid Number");
// }
// else if (marks <= 32) {
//     console.log("F 0.00");
// }
// else if (marks <= 39) {
//     console.log("D 1.00");
// }
// else if (marks <= 49) {
//     console.log("C 2.00");
// }
// else if (marks <= 59) {
//     console.log("B 3.00");
// }
// else if (marks <= 69) {
//     console.log("A- 3.50");
// }
// else if (marks <= 79) {
//     console.log("A 4.00");
// }
// else if (marks <= 100) {
//     console.log("A+ 5.00");
// }
// else {
//     console.log("Invalid Number");
// }


















// let userName = "java";
// let password = "asd123";

// if (userName == "java") {

//     if (password == "asd123") {
//         console.log("Welcome " + userName);
//     }
//     else {
//         console.log("Password is incorrect");
//     }
// }
// else {
//     console.log("User name not found");
// }