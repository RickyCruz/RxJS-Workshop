import { fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpCodeMap$ = keyUp$.pipe(
    map(event => event.code)
);

const keyUpCodePluck$ = keyUp$.pipe(
    // Nested attributes
    pluck('target', 'baseURI')
);

const keyUpCodeMapTo$ = keyUp$.pipe(
    mapTo('key pressed')
);

keyUp$.subscribe(console.log);
keyUpCodeMap$.subscribe(code => console.log('map:', code));
keyUpCodePluck$.subscribe(code => console.log('pluck:', code));
keyUpCodeMapTo$.subscribe(code => console.log('mapTo:', code));