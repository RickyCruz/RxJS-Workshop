import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

console.log('========== mergeMap ==========')
// mergeMap keeps 'n' subscriptions active simultaneously
click$.pipe(
    mergeMap(() => interval$),
).subscribe(console.log);

console.log('========== switchMap ==========')

// switchMap only maintains an active internal subscription
click$.pipe(
    switchMap(() => interval$),
).subscribe(console.log);