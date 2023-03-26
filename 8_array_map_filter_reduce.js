// array map is use to form new array from an existing array based on some opertaion


let arr = [5,6,8,7,9];
let newArr = arr.map((value)=>{
    return value*10;
})
console.log(newArr); // prints --> [ 50, 60, 80, 70, 90 ]


let arr1 = [5,6,8,7,19];
let newArr1 = arr1.map((value)=>{
    return value>10;
})
console.log(newArr1);//prints --> [ false, false, false, false, true ]

// array filter is use to form new array from an existing array based on some condition
let array = [5,6,8,4,19];
let newArray = array.filter((value)=>{
    return value > 5;
})
console.log(newArray); // prints --> [ 6, 8, 19 ]

// array reduce is use reduce rhe array in one unit
let array1 = [5,6,8,4,9];
let newArray1 = array1.reduce((v1,v2)=>{
    return v1 + v2;
})
console.log(newArray1); // prints --> 32

// we can also define map,filter and reduce using below syntax

let ar1 = [5,6,8,4,9];
let mul = (v1,v2)=>{
    return v1 + v2;
}

let newAr1 = ar1.reduce(mul)
console.log(newAr1); // prints --> 32