import { range, from } from 'rxjs';
import { filter } from 'rxjs/operators';

range(1, 10).pipe(
    filter(item => item % 2 === 1)
).subscribe(console.log);

range(1, 10).pipe(
    filter((item, index) => {
        console.log('index:', index);
        return item % 2 === 1;
    })
).subscribe(console.log);

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

console.log('=========================================')

from(characters).pipe(
    filter(character => character.type === 'villain')
).subscribe(console.log);