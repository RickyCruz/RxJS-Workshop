import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResponse } from '../interfaces/github-users.interface';

// References
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const showUsers = ( users: GithubUser[] ) => {
    console.log(users);

    orderList.innerHTML = '';

    for (const user of users) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;

        const anchor  = document.createElement('a');
        anchor.href   = user.html_url;
        anchor.text   = 'View Profile';
        anchor.target = '_blank';

        li.append(img);
        li.append(user.login + ' ');
        li.append(anchor);

        orderList.append(li);
    }
}

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target','value'),
    map<string, Observable<GithubUsersResponse>>(
        keyword => ajax.getJSON(`https://api.github.com/search/users?q=${ keyword }`)
    ),
    mergeAll<GithubUsersResponse>(),
    pluck<GithubUsersResponse, GithubUser[]>('items')
).subscribe(showUsers);