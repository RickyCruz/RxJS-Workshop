import { asyncScheduler } from 'rxjs';

/**
 * asyncScheduler is not an Observable, it is a subscription.
 * You can do the same as these functions do and have better handling
 *
 * setTimeout(() => {}, 3000);
 * setInterval(() => {}, 3000);
 */

// TIME
const greet = () => console.log('Hello World!');
const greet2 = (name: string) => console.log(`Hello ${name}!`);
const greet3 = ({ name, surname }) => console.log(`Hello ${name} ${surname}!`);

asyncScheduler.schedule(greet, 2000);
asyncScheduler.schedule(greet2, 2000, 'John');
asyncScheduler.schedule(greet3, 2000, { name: 'John', surname: 'Doe'});

// INTERVAL
let startsIn = 3000;

// Cannot be a lambda function

const subscription = asyncScheduler.schedule(function(state) {
    console.log('state', state);

    this.schedule(state + 1, 1000);
}, startsIn, 0);

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);