import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

const button = document.createElement('button');
button.innerHTML = 'Stop Timer';

document.querySelector('body').append(button);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(button, 'click');

counter$.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
});