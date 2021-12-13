function writeCode() {
    console.log('this is from the function!');
}

function xyzFunc() {
    console.log('this is the second(2nd) function!');
}



console.log('first line');
console.log('second line');
// this function will show us the output at the end of all codes, just we should write the function name only. NO CALL the function that time
setTimeout(writeCode);
console.log('third line');
console.log('fourth line');

// that time this function will show output 5 secounds later, because we defined the time and also write the function name without calling
setTimeout(xyzFunc, 5000);




// this is a set timeout function/arrow function, this time we can define time and write a function together using set timeout function
setTimeout(() => {
    console.log('this is a set timeout function!');
}, 6000);