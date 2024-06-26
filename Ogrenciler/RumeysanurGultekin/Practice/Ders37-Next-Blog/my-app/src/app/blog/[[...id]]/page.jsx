'use client';

import { useEffect, useState } from "react";
import {styled} from 'styled-components';
import {useRouter} from 'next/navigation';

export const BlogPage = styled.div`
    margin: 0 auto;
    width: 80%;
    padding: 15px;
    min-height: 100vh;
    
`;
export const BlogPageContent = styled.div`
  background-color: rgba(248, 248, 244, 0.331);
  padding: 20px;
  display: flex;
  gap: 20px;
  border-radius: 10px;
  @media screen and (max-width:550px) {
    flex-wrap: wrap;
}
`;
export const BlogTitle = styled.h1`
   text-transform: uppercase;
   margin-bottom: 10px;
    @media screen and (max-width:550px) {
    font-size: 16px;
}
`;
export const BlogImg = styled.img`
   border-radius: 10px;
   max-width: 100%;
`;
export const Paragraf = styled.p`
  text-transform: capitalize;
  margin-bottom: 10px;
  line-height: 1.5rem;
   @media screen and (max-width:550px) {
    font-size: 12px;
}
}
`;
const BlogItem = ({ params }) => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  const readBlog = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
      if (!response.ok) {
        throw new Error('Post not found');
      }
      const data = await response.json();
      setPost(data);
      setError(null);
    } catch (error) {
      setPost(null);
      setError(error.message);
    }
  };

  useEffect(() => {
    readBlog();
  }, []);

  const router = useRouter();

  return (
    <BlogPage>
      {error && <p>{error}</p>}
      {post ? (
        <BlogPageContent>
          <BlogImg src={`https://picsum.photos/id/${params.id}/500/333`} alt="Blog Image"/>
          <div>
          <BlogTitle>{post.title}</BlogTitle>
          <Paragraf>{post.body}</Paragraf>
          <Paragraf>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro at provident commodi perferendis facere dolorem sint corporis alias voluptate inventore. Odit, vel? Error voluptatum dolorum temporibus nulla tempore incidunt excepturi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro at provident commodi perferendis facere dolorem sint corporis alias voluptate inventore. Odit, vel? Error voluptatum dolorum temporibus nulla tempore incidunt excepturi?</Paragraf>
          <button onClick={() => router.back()}>Geri Dön </button>
          </div>
        </BlogPageContent>
      ) : (
        !error && <p>Loading...</p>
      )}
    </BlogPage>
  );
};

export default BlogItem;
