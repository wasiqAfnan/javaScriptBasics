console.log("any message");
console.error("To print an error");
console.warn("To print a warning");
console.info("To print an information");
console.assert(5<0);// this will produce error as 5 is not less than 0
let val = {
    rohan:58,
    sohan:85,
   mohan:74
}
console.table(val); // print the key value pair in tabular form
// time will start a timer an timeEnd will stop the timer and returns the difference of time between time and timeEnd function
// we use time and timeEnd function to know how much time a block code of takes by place time function above the code and timeEnd below the code
console.time("label");
console.timeEnd("label");
console.clear();// clear the console