import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

/**
 * Make the final two observables emit exactly the same value.
 *
 * Tip: Hot Observable? Subjects?
 */

(() => {
    // ==================== DO NOT TOUCH this block ====================
    const clock$ = interval(1000).pipe(
        take(5),
        map(value => Math.round(Math.random() * 100))
    );
    // ========= Do not modify the creation of the observable =========

    // These two observables must emit exactly the same values
    clock$.subscribe(value => console.log('obs1', value));
    clock$.subscribe(value => console.log('obs2', value));
})();