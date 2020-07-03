import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

/**
 * Countdown starting from 7
 *
 * Output: 7 6 5 4 3 2 1
 */

(() => {
    const start = 7;
    const countdown$ = interval(700).pipe(
        // Use the necessary operators to countdown
        map(count => start - count),
        take(start + 1)
    );

    // ===== Do not modify this line =====
    countdown$.subscribe(console.log);
    // ===================================
})();