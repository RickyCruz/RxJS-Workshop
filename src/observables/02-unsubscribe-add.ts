import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[Next]: ', value),
    error: error => console.warn('[Error]: ', error),
    complete: () => console.info('[Complete]')
};

const interval$ = new Observable<number>(subscriber => {
    let count = 0;

    const interval = setInterval(() => {
        count++;
        subscriber.next(count);
        console.log('Count: ', count);
    }, 1000);

    setTimeout(() => {
        subscriber.complete()

        console.log('Timeout "subscriber.complete()" Completed');
    }, 2500);

    return () => {
        clearInterval(interval);

        console.log('Interval Destroyed');
    };
});

const subscription = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);

subscription.add(subscription2)
    .add(subscription3);

setTimeout(() => {
    subscription.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();

    console.log('Timeout "unsubscribe()" completed');
}, 6000);