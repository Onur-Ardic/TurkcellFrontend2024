import './globals.css'
import { fetchBlogs } from './blog/Api';
import BlogCard from './components/BlogCard';
const Page = async () => {

    const posts = await fetchBlogs();
    return (
        <div>
            <h1>Blogs</h1>
            <ul>
                {posts.map((post) => (
                    <BlogCard post={post}/>
                ))}
            </ul>
        </div>
    )
}

export default Page
