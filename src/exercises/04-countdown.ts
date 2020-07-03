import { interval } from 'rxjs';

/**
 * Countdown starting from 7
 *
 * Output: 7 6 5 4 3 2 1 0
 */

(() => {
    const start = 7;
    const countdown$ = interval(700).pipe(
        // Use the necessary operators to countdown
    );

    // ===== Do not modify this line =====
    countdown$.subscribe(console.log);
    // ===================================
})();