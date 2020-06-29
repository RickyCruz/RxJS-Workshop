import { fromEvent } from 'rxjs';

/**
 * DOM Events
 */
const scr1$ = fromEvent<MouseEvent>(document, 'click');
const scr2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: value => console.log('next', value)
};

// scr1$.subscribe(observer);
// scr2$.subscribe(observer);

// scr1$.subscribe(event => {
//     console.log(event.x, event.y);
// });

scr1$.subscribe(({ x, y}) => {
    console.log(x, y);
});

scr2$.subscribe(event => {
    console.log(event.key);
});