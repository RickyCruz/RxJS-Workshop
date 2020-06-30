import { ajax, AjaxError } from 'rxjs/ajax';
import { pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

const handlesError = (err: AjaxError) => {
    console.warn('error in:', err.message);

    // If I want to return an empty users array, I have to return an Observable
    return of([]);
}

ajax(url).pipe(
    pluck('response'),
    catchError(handlesError)
)
.subscribe( users => console.log('users:', users));