import { interval, timer } from 'rxjs';

const observer = {
    next: value => console.log('Next: ', value),
    complete: () => console.log('Observer Completed'),
};

// create an interval that starts in two seconds
// const timer$ = timer(2000);
// start the sequence every second but after 2 seconds have passed
// const timer$ = timer(2000, 1000);

const currentDate = new Date();
currentDate.setSeconds(currentDate.getSeconds() + 5);
const timer$ = timer(currentDate);

console.log('Start timer');
timer$.subscribe(observer);
console.log('End timer');