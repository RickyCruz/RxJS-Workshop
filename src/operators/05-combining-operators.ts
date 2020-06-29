import { from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

interface Character {
    type: string;
    name: string;
}

const characters: Character[] = [
    {
        type: 'heroe',
        name: 'Batman'
    },
    {
        type: 'heroe',
        name: 'Wonder Woman'
    },
    {
        type: 'villain',
        name: 'Joker'
    }
];

from(characters).pipe(
    filter(character => character.type === 'heroe')
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
    .pipe(
        map(event => event.code), // <KeyboardEvent, string>
        filter(key => key === 'Enter')
    );
keyup$.subscribe(console.log);