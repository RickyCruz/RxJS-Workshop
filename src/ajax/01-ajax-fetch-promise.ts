const url = 'https://api.github.com/users?per_page=5';

const fetchPromise = fetch(url);

fetchPromise
    .then(response => response.json())
    .then(data => console.log('data:', data))
    .catch(err => console.warn('Error fetching users', err));