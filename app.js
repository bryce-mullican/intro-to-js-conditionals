// CONDITIONALS
if (true) {
    // do stuff
}

let foo = 'hello';
if (foo == 'hello') { // 'hello' == 'hello' <- true
    console.log('TRUE!!!');
}
let bar = 2;
if (bar > 2) { // false
    console.log('HERE');
}
console.log(foo == 'hello');
console.log(bar > 2);

/* 
= <- assignment operator
! <- NOT operator

COMPARISON
== <- equality operator
=== <- equality (strict) -> equal AND of the same data type
<
>
<= Less than or equal to
>= Greater than or equal to
!= Not equal
!== not equal (strict)
*/

if (bar > 3) { // 2
    console.log('TRUE!!!');
} else {
    console.log('FALSE!!!');
}
// let email = 'wrong';
// if(email != 'valid') {
//     // open popup
// }

if (bar > 3) { // 2
    console.log('YES');
} else if (bar > 1) {
    console.log('SURE IS!!!');
} else {
    console.log('OOPS');
}

bar = 0;
if (bar > 5) { // 2
    console.log('YES');
} else if (bar > 4) {
    console.log('SURE IS!!!');
// } else if (bar > 3) {

// } else if (bar > 2) { 

// } else if (bar > 1) {

}
// bar == 0
// 0 == '0'
switch (bar) {
    case '0':
        console.log('bar is 0');     
        break;
    case 1:
        console.log('bar is 1');
        break;
    case 2:
        console.log('bar is 2');     
        break;
    default:
        console.log('switch','OOPS');
        break;
}
// foo = 'hello'
foo = 'hola';
switch (foo) {
    case 'hello':
    case 'hola':
        console.log('foo','Here');
        break;
    default:
        // logic here????
        break;
}

console.log('brian' < 'bryce'); // true
console.log('H' > 'h'); 

// AND / OR
// && / ||
console.log(1 < 2 && 1 > 0); // true
console.log(1 < 2 && 1 > 3); // false

console.log(1 < 2 || 1 > 3); // true
console.log(1 < 1 || 1 > 3); // false
//?????
if (true) {
    // ??????
    // ??? 
    if (true) {
        // ???
    } else {
       // ??? 
    }
} else {
    
}

// Decision Tree
// Pet Finder:
//  --------------------
//  |_1.Dog 2.Cat
//  --------------------
//  |
//  --------------------
//  |_3.Snake 4.Fish
//  --------------------

// Do you want a pet with fur?
if (true) {
    // DOG/CAT
    // Do you want an independent pet?
    if (false) {
        // CAT
        console.log('cat');
    } else {
        // DOG
    }
} else {
    // SNAKE/FISH
    // Do you want a pet you can hold?
    if (true) {
        // SNAKE
    } else {
        // FISH
    }    
}

//  |_1. Motorcyle 2. Bicycle
//  |
//  |_3. Corvette 4. VW Rabbit

// do you want 4 wheels?
let ans = 'yes'
if (ans) {
    // corvette/rabbit
    // do you like to drive fast?
    if (false) {
        console.log('corvette');
    } else {
        console.log('rabbit');
    }
} else {
    // motor/bicycle
}

// TRUTHY and FALSEY
/* 
Number 0 -> Falsey
Boolean false -> Falsey
Empty String '' -> Falsey
undefined -> Falsey
null -> Falsey
NaN -> Falsey
*/

let num = 0;
if (num) {
    console.log('here');
}
let bool = true;
if (!bool) {
    console.log('no here');
}

let arr = [1,2,3]
let obj = {
    name: 'Bryce'
}
if (obj.foo) {
    console.log('undefined');
} else {
    //?????
}







// Decision Tree
// Pet Finder:
//  --------------------
//  |_1.Spider 2.Parrot
//  |
//  |_3.Snake 4.Fish
//  --------------------
//  |
//  --------------------
//  |_5.Hamster 6.Rabbit
//  |
//  |_7.Dog 8.Cat
//  --------------------

