import { fromEvent, of } from 'rxjs';
import { tap, map, pluck, catchError, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// Helper
const requestHttp = (credentials) =>
    ajax.post('https://reqres.in/api/login?delay=1', credentials)
        .pipe(
            pluck('response', 'token'),
            catchError(err => of('xxx'))
        );

// Creating form
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPwd = document.createElement('input');
const submitBtn = document.createElement('button');

// Settings
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPwd.type = 'password';
inputPwd.placeholder = 'Password';
inputPwd.value = 'cityslicka';

submitBtn.innerHTML = 'Login';

form.append(inputEmail, inputPwd, submitBtn);
document.querySelector('body').append( form );

// Streams
const submitForm$ = fromEvent<Event>(form, 'submit')
    .pipe(
        tap(evt => evt.preventDefault()),
        map(evt => ({
            email: evt.target[0].value,
            password: evt.target[1].value
        })),
        exhaustMap(requestHttp)
    );

submitForm$.subscribe(token => {
    console.log('Token:', token);
});