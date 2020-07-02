import { forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

/**
 * The most common use is to make AJAX requests simultaneously.
 */
const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'RickyCruz';

forkJoin({
    user: ajax.getJSON(
        `${ GITHUB_API_URL }/${ GITHUB_USER }`
    ),
    repos: ajax.getJSON(
        `${ GITHUB_API_URL }/${ GITHUB_USER }/repo123123s`
    ).pipe(
        catchError(err => of([]))
    ),
    gists: ajax.getJSON(
        `${ GITHUB_API_URL }/${ GITHUB_USER }/gists`
    )
}).pipe(
    catchError(err => of(err))
)
.subscribe(console.log);