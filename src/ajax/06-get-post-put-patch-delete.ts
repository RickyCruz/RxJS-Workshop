import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

ajax.get(url, {
    'my-token': 'ABC123'
}).subscribe(console.log);

ajax.post(url, {
    id: 1,
    name: 'Janette Doe'
}, {
    'my-token': 'ABC123'
}).subscribe(console.log);

ajax.put(url, {
    id: 1,
    name: 'Jane Doe'
}, {
    'my-token': 'ABC123'
}).subscribe(console.log);

ajax.patch(url, {
    id: 1,
    name: 'Jane Doe'
}, {
    'my-token': 'ABC123'
}).subscribe(console.log);

ajax({
    url: url,
    method: 'DELETE',
    headers: {
        'my-token': 'ABC123'
    },
    body: {
        id: 1,
        name: 'John Doe'
    }
}).subscribe(console.log);
