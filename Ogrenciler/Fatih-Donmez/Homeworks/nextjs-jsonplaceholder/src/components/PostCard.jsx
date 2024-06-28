import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const PostCard = ({post}) => {
    const {id,title,body} = post;
    const navigate = useRouter();
  return (
    <div>
      <div className="card text-center">
        <Image className="rounded-top-3 card-img" src={`https://picsum.photos/id/${id+100}/200/300`} alt="Blog Resmi" width={200} height={300}/>
        <div className="card-body">
          <h1>{id}</h1>
          <p>{title}</p>
          <p>{body}</p>
          <button className='btn btn-danger' onClick={()=> {navigate.push("/posts/"+id)}}>Detay</button>
        </div>
      </div>
        
    </div>
  )
}

export default PostCard