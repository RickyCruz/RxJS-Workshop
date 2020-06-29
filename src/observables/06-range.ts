import { of, range, asyncScheduler } from 'rxjs'

const srcOf$ = of(1,2,3,4,5);

console.log('Start Of');
srcOf$.subscribe(console.log);
console.log('End Of');

// Synchronous
const srcRange$ = range(1, 5);

console.log('Start srcRange');
srcRange$.subscribe(console.log);
console.log('End srcRange');

// Asynchronous
const srcRangeAsync$ = range(1, 5, asyncScheduler);

console.log('Start srcRangeAsync');
srcRangeAsync$.subscribe(console.log);
console.log('End srcRangeAsync');