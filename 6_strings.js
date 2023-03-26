/* String in JS 
    we can declare a string using single qoute('') or double qoute("")
*/
let n = "myname";
console.log(n);// printing whole string at once

// printing character by character
for(let i=0;i<n.length;i++){
    console.log(n[i]);
}

/* template literals 
    we use template literals in order to include both single qoutes('') and double qoutes ("").
*/

let x = `my name is "${n}"`;
console.log(x);

/*  output:
        my name is "myname"
*/

/* Now let us see some useful string method */

let str = "heyCoder";
let str1 = "byeCoder";
console.log(str.length); // returns length if the string
console.log(str.toUpperCase()); // returns a string with uppercase
console.log(str.toLowerCase()); // returns a string with uppercase
console.log(str.replace("hey","hi")); // replace hey with hi
console.log(str.concat(str1)); // concatenate str and str1
console.log(str.includes("Coder")); // returns true if coder is in str else returns false
console.log(str.startsWith('h')); // returns true if str starts with h character else returns false
console.log(str.endsWith('r')); // returns true if str starts with h character else returns false


/*  output:
        8
        HEYCODER
        heycoder
        hiCoder
        heyCoderbyeCoder
        true
        true
        true
*/

// points to remember : strings are immutable. It means that we can't change the value of once the string is defined.
str[1] = 'l'; // it will not work as string is immutable

console.log(str[1]); // this will print e




