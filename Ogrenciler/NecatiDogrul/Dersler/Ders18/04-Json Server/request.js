class Request{
    static async  get(url){
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}