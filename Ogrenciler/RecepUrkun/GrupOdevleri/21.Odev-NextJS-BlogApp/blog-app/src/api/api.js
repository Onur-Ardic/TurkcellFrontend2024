export const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json()
}

export const getPostDetails = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json()
}