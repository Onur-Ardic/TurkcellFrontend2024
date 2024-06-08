const url = "https://newsapi.org/v2/everything?q=tesla&from=2024-05-07&sortBy=publishedAt";
export const getData = async () => {
    const response = await fetch(url, {headers: { authorization: "e02970d7b88446388f8167f77881baa4"}});
    if(!response.ok){
        throw new Error("Network reponse was not ok");
    }
    const result = await response.json();
    return result;
}