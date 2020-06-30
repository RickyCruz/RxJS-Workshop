const wrongURLGitHub = 'https://api.github.com/usersXXX?per_page=5';

const fetchGitHub = fetch(wrongURLGitHub);

const handleErrorGitHub = (response: Response) => {
    if (! response.ok) {
        throw new Error(response.statusText);
    }

    return response;
}

fetchGitHub
    .then(handleErrorGitHub)
    .then(response => response.json())
    .then(data => console.log('data:', data))
    .catch(err => console.warn('Error fetching users', err));