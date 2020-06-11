
// Reference Link : 
// https://medium.com/swlh/javascript-antipatterns-prototypes-switch-and-more-e8bce5122383

// ------- Built in Prototypes ----- // 
// Not use
Array.prototype.foo = function() {

}

// Instead 
// function(arr){

// }

// ------- Switch Pattern ---- //


let val = 0, result ='';

// not use
switch(val){
    case 0:
        result = "zero";
        break;
    case 1:
        result = "one";
        break;
    default:
        result = "unknown";
}

// Instead 
if(val === 0){
    result = 'zero';
}
else if(val === 1){
    result = 'one';   
}
else {
    result = 'unknown';
}


// ----- Avoiding Implied Typecasting ----- //
const foo = 0;
if(foo === false){
    // not running because foo is 0
}

if(foo !== false){
    // runs because foo is 0
}


// ----- Avoiding eval() ----- //

// setInterval, setTimeout, function 
    // constructor all take strings

    // not use 
    setTimeout(`console.log('hello')`);

    // Instead
    setTimeout(() => console.log('hello'));


// Number Conversions with parseInt() 

// not use
parseInt("1 abc");

// Instead
const num = parseInt("16", 10);

const num1 = +"16";

