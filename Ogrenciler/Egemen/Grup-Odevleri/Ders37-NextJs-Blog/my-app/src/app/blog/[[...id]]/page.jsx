'use client'

const BlogItem = ({params}) => {
  const posts = useSelector((state) => state.post.posts);
  return (
    <div>
      <img src={`https://picsum.photos/id/${params.id}/500/333`}/>
      <h1>{posts}</h1>
    </div>
  )
}

export default BlogItem;