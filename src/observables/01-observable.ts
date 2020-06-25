import { Observable, Observer } from 'rxjs';

// const obs$ = Observable.create();
const obs$ = new Observable<string>(subscriber => {
    subscriber.next('Hello');
    subscriber.next('World');

    subscriber.next('Hello 1');
    subscriber.next('World 2');

    // Force an error
    // const person = undefined;
    // person.name = 'John Doe';

    subscriber.complete();

    subscriber.next('Hello 2');
    subscriber.next('World 3');
});

// obs$.subscribe(console.log);

// obs$.subscribe(response => {
//     console.log(response)
// });

// obs$.subscribe(
//     value => console.log('Next: ', value),
//     error => console.warn('Error: ', error),
//     () => console.info('Complete')
// );

const observer: Observer<any> = {
    next: value => console.log('[Next]: ', value),
    error: error => console.warn('[Error]: ', error),
    complete: () => console.info('[Observer Complete]')
};

obs$.subscribe(observer);