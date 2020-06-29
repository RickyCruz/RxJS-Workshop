import { range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

range(1, 5)
    .pipe(
        map<number, string>(item => (item * 10).toString())
    )
    .subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyUp$.subscribe(code => console.log('key:', code.key));

const keyUpCode$ = keyUp$.pipe(
    map(event => event.code)
);

keyUpCode$.subscribe(code => console.log('key:', code));