import { of, from } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('Complete')
};

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of(...[1, 2, 3, 4, 5]);
// const source$ = from('John Doe');
// const source$ = of('John Doe');

const source$ = from(fetch('https://api.github.com/users/RickyCruz'));

source$.subscribe(observer);

source$.subscribe(async (response) => {
    console.log(response);

    const data = await response.json();

    console.log(data);
});

const myGenerator = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const myIterable = myGenerator();

// for (let id of myIterable) {
//     console.log(id);
// }

from(myIterable).subscribe(observer);