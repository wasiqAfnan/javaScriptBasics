/* There are 5 types of loops in JS
    1) While Loop
    2) Do - While Loop
    3) For Loop
    4) For in Loop
    5) For of Loop
*/

// 1) While Loop
    let i = 0;
    while(i < 5){
        console.log(i);
        i++;
    }

// 2) Do - While Loop --> diiferences between while and do while is that in while loop condition has checked first in do    while first loop body is executed then condition has been checked

    i = 0;
    do{
        console.log(i);
        i++;
    }while(i < 5);


// 3) For loop

    for(let x = 0; x < 5; x++){
        console.log(x);
    }

// 4) For in Loop

    //for in loop is basically use to get the key of object

    let cgpa = {
        Rohan : 9.6,
        Subham : 7.8,
        Sohan : 5.8, 
        Mohan : 2.6
    }

    for(let y in cgpa){
        console.log("The cgpa of " + y + " is " + cgpa[y]);
    }

    /* output:-

        The cgpa of Rohan is 9.6
        The cgpa of Subham is 7.8
        The cgpa of Sohan is 5.8
        The cgpa of Mohan is 2.6
        
    */

// 5) For of Loop

    //for of loop works only with arrays and string

    let marks = [60,50,20,69,77]; // decalring array
    i = 0;
    for(let y of marks){
        console.log(`marks[${i}] is ${y}`); // printing value of array
        i++;
    }

    /* output:-

        marks[0] is 60
        marks[1] is 50
        marks[2] is 20
        marks[3] is 69
        marks[4] is 776

    */

//---------------------------------------------xxxxxxxxx---------------------------------------------------------