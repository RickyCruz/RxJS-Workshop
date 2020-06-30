import { of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const numbers$ = of<number|string>(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, '1');

numbers$.pipe(
    distinctUntilChanged()
).subscribe(console.log);

console.log('===========================================');

interface Character {
    name: string;
}

const characters: Character[] = [
    { name: 'Megaman' },
    { name: 'Megaman' },
    { name: 'X' },
    { name: 'Zero' },
    { name: 'Dr. Willy' },
    { name: 'X' },
    { name: 'X' },
    { name: 'X' },
    { name: 'Megaman' },
    { name: 'Zero' },
];

from(characters).pipe(
    distinctUntilChanged((previous, current) => previous.name === current.name)
).subscribe( console.log );