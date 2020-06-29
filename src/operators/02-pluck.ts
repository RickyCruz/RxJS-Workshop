import { fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpCodeMap$ = keyUp$.pipe(
    map(event => event.code)
);

const keyUpCodePluck$ = keyUp$.pipe(
    // Nested attributes
    pluck('target', 'baseURI')
);

keyUp$.subscribe(console.log);
keyUpCodeMap$.subscribe(code => console.log('map:', code));
keyUpCodePluck$.subscribe(code => console.log('pluck:', code));