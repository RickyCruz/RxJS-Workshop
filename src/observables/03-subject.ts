import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[Next]: ', value),
    error: error => console.warn('[Error]: ', error),
    complete: () => console.info('[Complete]')
};

const interval$ = new Observable<number>(subscriber => {
    const intervalId = setInterval(() => {
        subscriber.next(Math.random())
    }, 1000);

    return () => {
        clearInterval(intervalId);
        console.log('Interval destroyed');
    };
});

// const subs1 = interval$.subscribe(rnd => console.log('Subs1: ', rnd));
// const subs2 = interval$.subscribe(rnd => console.log('Subs2: ', rnd));

/**
 * The main reason to use Subjects is to multicast.
 * An Observable by default is unicast.
 * Unicasting means that each subscribed observer owns an independent execution
 * of the Observable.
 */
const subject$ = new Subject();

const subscription = interval$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);

    subject$.complete();

    subscription.unsubscribe();
}, 3500);