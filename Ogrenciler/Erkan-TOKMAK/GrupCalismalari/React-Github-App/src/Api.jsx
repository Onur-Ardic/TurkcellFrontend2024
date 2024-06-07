const searchUrl = 'https://api.github.com/search/users?q='
const userUrl = 'https://api.github.com/users/'

export const getUsersApi = async (target) => {
    const response = await fetch(searchUrl + target);
    if (!response.ok){
        throw new Error('HTTP error! '+ `${response.status}`);
    }
    const data = await response.json();
    return data;
}

export const getUserApi = async (username) => {
    const response = await fetch(userUrl + username);
    if (!response.ok){
        throw new Error('HTTP error!');
    }
    const data = await response.json();
    return data;
}