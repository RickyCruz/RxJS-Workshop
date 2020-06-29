import { interval, timer } from 'rxjs';

const observer = {
    next: value => console.log('Next: ', value),
    complete: () => console.log('Observer Completed'),
};

// interval and timer are asynchronous by nature
const interval$ = interval(1000);
const timer$ = timer(2000);

console.log('Start interval');
interval$.subscribe(observer);
console.log('End interval');

console.log('Start timer');
timer$.subscribe(observer);
console.log('End timer');