'use client'
import Image from 'next/image';
import styled from 'styled-components';

export const BlogPage = styled.div`
    margin: 0 auto;
    width: 80%;
    padding: 15px;
    min-height: 100vh;`
;

export const BlogPageContent = styled.div`
  background-color: rgba(248, 248, 244, 0.331);
  padding: 20px;
  display: flex;
  gap: 20px;
  border-radius: 10px;
  @media screen and (max-width:550px) {
    flex-wrap: wrap;
  }`
;

export const BlogTitle = styled.h1`
   text-transform: uppercase;
   margin-bottom: 10px;
   @media screen and (max-width:550px) {
    font-size: 16px;
  }`
;
export const Paragraf = styled.p`
  text-transform: capitalize;
  margin-bottom: 10px;
  line-height: 1.5rem;
  @media screen and (max-width:550px) {
    font-size: 12px;
  }`
;

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
    <div>
        {post ? (
 <BlogPage>
    <BlogPageContent>
    <Image
        src={`https://picsum.photos/id/${params.id}/300`}
        alt="Blog image"
        width={200}
        height={300}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div>
        <BlogTitle>{post.title}</BlogTitle>
        <Paragraf>{post.body}</Paragraf>
        <Paragraf>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro at provident commodi perferendis facere dolorem sint corporis alias voluptate inventore. Odit, vel? Error voluptatum dolorum temporibus nulla tempore incidunt excepturi?
        </Paragraf>
      </div>
    </BlogPageContent>
  </BlogPage> 
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogItem;


