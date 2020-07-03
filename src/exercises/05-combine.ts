import { interval, timer } from 'rxjs';
import { map, take } from 'rxjs/operators';

/**
 * Combine both observables (letters$, numbers$) so that the emissions
 * are the concatenation of the last values ​​issued.
 *
 * Output: a1 a2 b2 b3 c3 c4 d4 d5 e5
 */

(() => {
    const letters = ['a', 'b', 'c', 'd', 'e'];
    const numbers = [1, 2, 3, 4, 5];

    // Emits a letter every second
    const letters$  = interval(1000).pipe(
        map(i => letters[i]),
        take(letters.length)
    );

    // Emits numbers 1 to 5 every second, but has an initial
    // delay of 500 thousandths
    const numbers$ = timer(500,1000).pipe(
        map(i => numbers[i]),
        take(numbers.length)
    );

    // ========================================
    // Start coding down here
    // Note: the subscription must be like this ".subscribe(console.log)"
    // the output in the subscription must be fully processed.
    // ========================================

})();