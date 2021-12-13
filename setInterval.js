console.log('first line');

// it works like a clock, actually like a clockwork, this code will run forever, it will never stop
setInterval(() => {
    // console.log('third line!');
}, 3000);

// we can stop it on a certain number using setInterval() in this way and setting a certain number to stop it
let clockSecounds = 0;
const timeIntervalId = setInterval(() => {
    // start 0 from here, so output is showing from 1
    // clockSecounds++;

    // if we do ++ from here, then output starts from 0
    // console.log(clockSecounds++);

    // we also can use like that, but this time it will start from 1. NOT from 0
    console.log(++clockSecounds);
    if (clockSecounds > 15) {
        clearInterval(timeIntervalId);
    }
}, 1000);

console.log('second line');