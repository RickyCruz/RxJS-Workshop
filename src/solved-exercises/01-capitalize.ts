/**
 * Capitalize
 *
 * Input: ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa']
 * Output: ['Batman', 'Joker', 'Doble Cara', 'Pingüino', 'Hiedra Venenosa']
 *
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 * Note: You do NOT have to use the "FOR OF" loop, use an observable and call the capitalize function
 */

import { from } from "rxjs";
import { map } from "rxjs/operators";

(() => {
    const names = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];

    const capitalize = (name: string) => name.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

    // Change this FOR OF. Use an observable and capitalize emissions
    // for (let name of names) {
    //     console.log(capitalize(name));
    // }

    from(names).pipe(
        map(capitalize)
    ).subscribe(console.log);
})();