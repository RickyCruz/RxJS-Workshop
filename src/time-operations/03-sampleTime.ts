import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

// get the last value issued in a time interval
const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    sampleTime(2000),
    map( ({ x, y }) => ({ x, y })),
).subscribe(console.log);