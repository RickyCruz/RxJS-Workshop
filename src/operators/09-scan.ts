import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];

// const totalAccumulator = (acc, cur) => {
//     return acc + cur;
// }
const totalAccumulator = (acc, cur) => acc + cur;

// Reduce
from( numbers ).pipe(
    reduce( totalAccumulator, 0 )
)
.subscribe( console.log );

console.log('=================================');

// Scan
from( numbers ).pipe(
    scan( totalAccumulator, 0 )
)
.subscribe( console.log );

// Redux
interface User {
    id?: string;
    authenticated?: boolean;
    token?: string;
    age?: number;
}

const user: User[] = [
    { id: 'fher', authenticated: false, token: null },
    { id: 'fher', authenticated: true, token: 'ABC' },
    { id: 'fher', authenticated: true, token: 'ABC123' },
];

const state$ = from( user ).pipe(
    scan<User>( (acc, cur) => {
        return { ...acc, ...cur }
    }, { age: 33 })
);

const id$ = state$.pipe(
    map( state => state.id )
);

id$.subscribe( console.log );