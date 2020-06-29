import { of } from 'rxjs';

// const obs$ = of(1, 2, 3, 4, 5, 6);
// const obs$ = of(
//     [1, 2],
//     { a: 1, b: 2 },
//     function() {},
//     true,
//     Promise.resolve(true)
// );
const obs$ = of<number>(...[1, 2, 3, 4, 5, 6], 7, 8, 9, 10);

console.log('Obs$ start'); // Synchronus
obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('We finish the sequence')
);
console.log('Obs$ end');

const obs2$ = of(
    [1, 2],
    { a: 1, b: 2 },
    function() {},
    true,
    Promise.resolve(true)
);