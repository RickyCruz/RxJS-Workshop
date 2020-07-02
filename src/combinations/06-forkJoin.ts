import { of, interval, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';

const numbers$   = of(1, 2, 3, 4);
const intervals$ = interval(1000).pipe(take(3)); // 0..1..2
const chars$ = of('a', 'b', 'c').pipe(delay(3500));

// forkJoin(
//     numbers$,
//     intervals$,
//     chars$
// ).subscribe(console.log);

// forkJoin(
//     numbers$,
//     intervals$,
//     chars$
// ).subscribe(response => {
//     console.log('Numbers: ', response[0])
//     console.log('Intervals: ', response[1])
//     console.log('Chars: ', response[2]);
// });

// forkJoin({
//     numbers$,
//     intervals$,
//     chars$
// }).subscribe(response => {
//     console.log(response)
// });

forkJoin({
    num: numbers$,
    int: intervals$,
    let: chars$
}).subscribe(resp => {
    console.log(resp)
});