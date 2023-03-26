/* 
variables are like containers in which we can store many type of data 
in JS we do not have to explicitly mention the data type that a variable can hold

We can declare a variable iusing 3 different keywords
1) var (for global scope)
2) let (for block scope)
3) const (for constant variables)

*/

// Method 1 using var

var n = "myname"; // decalaring varible an storing string
var nu = 5; // decalaring varible an storing number

console.log(n,nu);

/* but it is not recommended to declare a variable using 'var' as this provide global access of a variable */

{
    var n = "yourname";
    console.log(n);
}
console.log(n);

/* output:-
myname 5
yourname
yourname
*/

/* as we can see that if we chane the value of n it will reflect as well as in block and also globally that is why it is recommende */

// Method 2 using let

let m = "myname";
let b = 5;// we can access this variable from anywhere

{
    let b = 7; // the scope of this variable lies within curly braces as it is declared within it
    console.log(b);
}
console.log(b);

/* output:-
7
5
*/

// Method 3 using const

const a = "myname";
// a = "yourname"; // this will throw an error because a is constant and we can't change the value of variable which is declared as const.
// console.log(a);
/* output:-
SyntaxError: Identifier 'a' has already been declared
*/


//-------------------------------------xxxxxx-----------------------------------------------------//


/* Data types in JS
    there are 7 premitive data types in js. These are :
    1) Number
    2) Null
    3) String
    4) Symbol
    5) Boolean
    6) Bigint
    7) Undefined
*/

let num = 5;
let nul =  null;
let str =  "Hey";
let sym =  Symbol("hello this is symbol");
let boo =  true;
let bi =  BigInt(25680);
let u =  undefined;

console.log(num,typeof(num));
console.log(nul,typeof(nul));
console.log(str,typeof(str));
console.log(sym,typeof(sym));
console.log(boo,typeof(boo));
console.log(bi,typeof(bi));
console.log(u,typeof(u));

/* Output:-
    5 number
    null object
    Hey string
    Symbol(hello this is symbol) symbol
    true boolean
    25680n bigint
    undefined undefined
*/

// there is one more data type which is object

let val = {
    rohan:58,
    sohan:85,
   mohan:74
}
console.log(val,typeof(val))
console.log(val['rohan']); // by using this syntax we can get only those value whose key is rohan
console.log(val['sohan']); // by using this syntax we can get only those value whose key is mohan
console.log(val['mohan']); // by using this syntax we can get only those value whose key is sohan

// we can also access individual value using the following syntax 

console.log(val.rohan); // by using this syntax we can get only those value whose key is rohan
console.log(val.mohan); // by using this syntax we can get only those value whose key is mohan
console.log(val.sohan); // by using this syntax we can get only those value whose key is sohan

/* output:-
    { rohan: 58, sohan: 85, mohan: 74 } object
    58
    85
    74
    58
    74
    85
*/





