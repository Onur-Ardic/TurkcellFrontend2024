import { getBlogItem } from '../../blog/Api'
const BlogItem = async({ params }) => {

    const {id} = params
    const blogItem = await getBlogItem(id)


  return (
    <div>
      {
        blogItem && (
          <>
            <img src={`https://picsum.photos/id/${blogItem.id}`} alt={blogItem.title} />
            <h1>{blogItem.title}</h1>
            <p>{blogItem.body}</p>
          </>
        )
      }
    </div>
  )
}

export default BlogItem
