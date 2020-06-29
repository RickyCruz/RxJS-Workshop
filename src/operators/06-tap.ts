import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numbers$ = range(1, 5).pipe(
    tap(item => console.log('before:', item)),
    map(item => item * 10),
    tap(item => console.log('after:', item)),
    tap({
        next: value => console.log('after create observer', value),
        complete: () => console.log('Finished')
    }),
);

numbers$.subscribe(item => console.log('subscribtion', item))