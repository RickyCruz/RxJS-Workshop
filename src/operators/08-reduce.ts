import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (accumulator: number, current: number) => {
    return accumulator + current;
}

const total = numbers.reduce(totalReducer, 0);
console.log('Total array', total );

interval(500).pipe(
    take(6),
    tap(console.log),
    reduce(totalReducer)
)
.subscribe({
    next: val => console.log('Next:', val),
    complete: () => console.log('Complete')
});