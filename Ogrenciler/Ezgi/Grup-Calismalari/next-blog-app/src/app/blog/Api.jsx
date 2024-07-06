export const fetchBlogs = async() => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json()
    return data
}


export const getBlogItem = async(id) => {
   const response =  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   const data = response.json()
   return data
}


