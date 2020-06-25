import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[Next]: ', value),
    error: error => console.warn('[Error]: ', error),
    complete: () => console.info('[Complete]')
};

const interval$ = new Observable<number>(subscriber => {
    let count = 0;

    // Memory leak
    // setInterval(() => {
    //     count++;
    //     subscriber.next(count);

    //     console.log('Count: ', count);
    // }, 1000);

    // Avoid memory leak
    const interval = setInterval(() => {
        count++;
        subscriber.next(count);

        console.log('Count: ', count);
    }, 1000);

    return () => {
        clearInterval(interval);

        console.log('Interval destroyed');
    };
});

const subscription = interval$.subscribe(num => console.log('Num: ', num));
const subscription2 = interval$.subscribe(num => console.log('Num: ', num));
const subscription3 = interval$.subscribe(num => console.log('Num: ', num));

setTimeout(() => {
    subscription.unsubscribe();
    subscription2.unsubscribe();
    subscription3.unsubscribe();

    console.log('Timeout completed');
}, 3000);