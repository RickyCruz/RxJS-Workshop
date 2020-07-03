import { ajax } from 'rxjs/ajax';
import { switchMap, map } from 'rxjs/operators';
import { zip, of } from 'rxjs';

/**
 * Make 2 HTTP (ajax) requests, one after the other.
 *
 * The first must obtain the Star Wars character:
 * Luke Skywalker, calling the endpoint: /people/1/
 *
 * The second request, must be using the object of the previous request,
 * and take the species (Species), which is an array of URLs (array),
 * within that array, take the first position and make the call to that URL,
 * which should bring information about its species (Human)
 *
 * Output:
 * { name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic", ...}
 *
 * Adding difficulty
 * Return the following object with the information of both requests remembering
 * that they are fired one after the other, with the URL that comes within the
 * array of 'species'
 *
 * Tip: investigate 'zip' function (allows to combine observables in an array of values)
 * https://rxjs-dev.firebaseapp.com/api/index/function/zip
 *
 * Output:
 * specie: { name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic",...}
 * character: { name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair",... }
 */

(() => {
    // ==================== DO NOT TOUCH this block ====================
    const SW_API = 'https://swapi.dev/api';
    const getRequest = (url: string) => ajax.getJSON<any>(url);
    // =================================================================

    // Call the URL to get Luke Skywalker
    getRequest(`${ SW_API }/people/1`).pipe(
        // Code
        // First Output
        // switchMap((response: any) => getRequest(response.species[0]))

        // Second Output
        switchMap((response: any) => zip(of(response), getRequest(response.species[0]))),
        map(([character, specie]) => ({character, specie}))

    ).subscribe(console.log); // ===== Do not modify this line =====
})();