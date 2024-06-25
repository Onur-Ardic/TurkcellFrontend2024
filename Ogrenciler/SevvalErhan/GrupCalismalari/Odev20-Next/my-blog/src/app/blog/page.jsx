'use client'
import { useEffect, useState } from "react";
import Request from "../../api/request";
const Blog = () => {
    const [posts, setPosts] = useState([]);
    
    const getPosts = async () => {
        const response = await Request();
        setPosts(response);
        console.log(posts);
    };
    useEffect(() => {
       getPosts();
    }, []);
    return (
        <div>Blog</div>
    )
}

export default Blog;