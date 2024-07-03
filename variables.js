/*
    three types of variable:
    var const let
    var doesn't need to be initialized 
    var dola;
    dola = 10;
    because is is automatically initialized with undefined

    let
*/

var a;
a = 10;
console.log(a);

let b = 10; // initialization mandatory
b = 11; //reallocate
console.log(b);

const c = 12; // can not be reasigned
// c=c+1; c +=1; c++
console.log(c + 1 + 2 + 3);
console.log(c);
