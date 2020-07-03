import { from } from 'rxjs';
import { filter, reduce } from 'rxjs/operators';

/**
 * Reduce
 *
 * Add all the numbers in the array using a reduce.
 * You must filter so that only numbers are processed
 * The output must be 32
 *
 * Tips:
 * isNaN() is a JavaScript function to determine if it is number.
 * Use filter <any> (...) to avoid typing problems.
 */

(() => {
    const data = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

    from(data).pipe(
        filter<any>(item => ! isNaN(item)),
        reduce((accumulator: number, current: number) => {
            return accumulator + current;
        }, 0)
    ).subscribe(console.log); // The output must be 32
})();