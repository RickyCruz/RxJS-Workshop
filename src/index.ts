import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[Next]: ', value),
    error: error => console.warn('[Error]: ', error),
    complete: () => console.info('[Complete]')
};
