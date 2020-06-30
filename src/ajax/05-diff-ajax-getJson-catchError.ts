import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbinxx.org/delay/1';

const handlesError = (response: AjaxError) => {
    console.warn('error:', response.message);

    return of({
        success: false,
        users: []
    });
}

const obs1$ = ajax.getJSON(url).pipe(
    catchError(handlesError)
);
const obs2$ = ajax(url).pipe(
    catchError(handlesError)
);

// obs1$.subscribe(data => console.log('getJSON', data));
// obs2$.subscribe(data => console.log('ajax', data));

// Other way to manage errors

const obs3$ = ajax.getJSON(url);
const obs4$ = ajax(url);

// obs4$.subscribe( data => console.log('ajax:', data ));

obs3$.pipe(
    catchError( handlesError )
)
.subscribe({
    next: val => console.log('next:', val),
    error: err => console.warn('error in susbscription:', err),
    complete: () => console.log('complete'),
});