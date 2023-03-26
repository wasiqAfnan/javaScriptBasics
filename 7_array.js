/* array is an object in JS. We can store different data types in an array */

let arr = [56,"rohan",true,undefined,56.89];
console.log(arr[1]); // this will print value of array at index 1 which is in this case "rohan"

// printing whole array

for(let i=0;i<arr.length;i++){
console.log(arr[i]);// prints value from arr[0] to arr[length-1]
}

// ----------------------------------------------------xxxxx------------------------------------------------------------------------------


/* Now let us see some useful array method */

let arr1 = [56,78,98,"mango"];
console.log(typeof arr1); // type of any array is object

// toString() converts an array into string
let str = arr1.toString();
console.log(str,typeof str);

// join() joins an array using any symbols
let str2 = arr1.join("_");
console.log(str2,typeof str); // --> will print : 56_78_98_mango 

// pop() removes the last element from an array and returns the popped element. It will modify the original array
let popElem = arr1.pop();
console.log(arr1); // prints --> [ 56, 78, 98 ] as we have popped the last element which is "mango"
console.log(popElem);  // prints --> mango

// push() add the element into array and returns new length of the array.It will modify the original array
let size = arr1.push("orange");
console.log(arr1,size); // prints --> `[ 56, 78, 98, 'orange' ] 4 ` as we have pushed "orange"

// shift() removes the first element from an array and returns the deleted element. It will modify the original array
let shiftElem = arr1.shift();
console.log(arr1); // prints --> [ 78, 98, 'orange' ] as we have shifted the first element which is 56
console.log(shiftElem);  // prints --> 56

// unshift() add the element at first into array and returns new length of the array.It will modify the original array
let size1 = arr1.unshift(78);
console.log(arr1,size1); // prints --> `[ 78, 78, 98, 'orange' ] 4` as we have pushed 78

// delete() removes the element at any index which you have passed in array. It will modify the original array
delete arr1[1];
console.log(arr1); // prints --> [ 78, <1 empty item>, 98, 'orange' ] as we have deleted value at indexd 1

// concat() concatenates to array and returns the concatenated array. No changes will ocuur in both of the original array
let arr2 = ["mango","banana","apple","guava"]
let concatArr = arr1.concat(arr2);
console.log(concatArr);// prints --> [78,<1 empty item>,98,'orange','mango','banana','apple','guava'] as we have concat two array

// sort() sorts the array in alphabatically order.It will modify the original array
let unsortArr = [59,68,100,6,5,78];
console.log(unsortArr); // prints --> [ 59, 68, 100, 6, 5, 78 ]
unsortArr.sort();
console.log(unsortArr);// prints --> [ 100, 5, 59, 6, 68, 78 ]

// if we want to sort ascending order or in descending we have to modify the sort()

let compare = (x,y)=>{
    return x - y;
}

console.log(unsortArr); // prints --> [ 100, 5, 59, 6, 68, 78 ]
unsortArr.sort(compare);
console.log(unsortArr);// prints --> [ 5, 6, 59, 68, 78, 100 ] ascending order
console.log(unsortArr.reverse());// prints --> [ 100, 78, 68, 59, 6, 5 ] descending order


// reverse() reversed an array. It will modify the original array
unsortArr.reverse();
console.log(unsortArr); // prints --> [ 78, 68, 6, 59, 5, 100 ]


// splice() is use to add new element in a particular location in the array. It change the original array.It will return the deleted items
let arr3 = [60,40,78,98,45,12];
// syntax of slice() --> arr3.splice(startindex,deleteHowManyNumber,newValues);
let spliceElem = arr3.splice(3,2,10,20,30,40); // first it will start from index 3 then it removes 2 element '98,45' and then add '10,20,30,40' into the array. It will return the deleted items
console.log(arr3); // prints --> [60, 40, 78, 10,20, 30, 40, 12]
console.log(spliceElem); // prints --> [ 98, 45 ]

//--------------------------------------------------------------xxxxxxxxxx--------------------------------------------------------------------

/* now let us see how can we use loops in an array */
let narr = [5,2,6,8,10];
for(let i = 0;i < narr.length;i++){
    console.log(narr[i]);
}

// for each loop
narr.forEach((x) => {
    console.log(x);
})

// Array.from() is used to convert a string or any object into an array
let str1 = "Rohan";
let b = Array.from(str1);
console.log(b); // prints --> [ 'R', 'o', 'h', 'a', 'n' ]

// for of loop
for(let x of narr){
    console.log(x); // prints value associated with key 
}

// for of loop
for(let x in narr){
    console.log(x); // prints key value 0 - 4
}