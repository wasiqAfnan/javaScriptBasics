/*  function is use to enhance the re-usability of the code 
    we can declare and define a function using 2 methods
    1) normal syntax
    2) arrow function
*/

// 1) normal syntax
function avg(a,b,c,d){
    return (a+b+c+d)/4;
}

// 2) arrow function
const percentage = (p,q,r,s)=>{
    // 200 total marks for each paper
    return ((p+q+r+s)/800)*100;
}

// main

let w = 79,x = 25,y = 75,z = 102;
console.log(avg(w,x,y,z));
console.log(percentage(w,x,y,z));