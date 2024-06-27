
async function getData(params) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const BlogItem = async({params}) => {
  const post = await getData(params)
  return (
    <div className='mx-auto w-75 p-1 h-25'>
      {post ? (
        <div className='d-flex gap-4 p-2 rounded bg-white bg-opacity-25'>
          <img className='img-fluid rounded' src={`https://picsum.photos/id/${params.id}/500/333`} alt="Blog Image"/>
          <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro at provident commodi perferendis facere dolorem sint corporis alias voluptate inventore. Odit, vel? Error voluptatum dolorum temporibus nulla tempore incidunt excepturi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro at provident commodi perferendis facere dolorem sint corporis alias voluptate inventore. Odit, vel? Error voluptatum dolorum temporibus nulla tempore incidunt excepturi?</p>
          {/* <button onClick={() => router.back()}>Geri Dön </button> */}
          </div>
        </div>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  )
}

export default BlogItem