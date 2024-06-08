
export const getNewsByCategory = async (category) => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category${category}&country=tr&apiKey=e68382dd1f4749daa9a5bc7e788aa4b4`);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
}
export const getAllNews = async (category) => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=e68382dd1f4749daa9a5bc7e788aa4b4`);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
}