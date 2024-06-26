'use client';

import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 16px;
    margin: 0 0.5rem;
`;

export const BlogImg = styled.img`
    width: 100%;
    border-radius: 10px 10px 0 0;
    height: 16rem;
`;
export const TagP = styled.p`
    margin: 0 0.5rem;
`;
export const CardBottom = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 6rem;
`;
export const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    height: 22rem;
    border-radius: 10px;
    background-color: rgba(248, 248, 244, 0.331);
`;

const BlogCard = ({post }) => {
  return (
    <CardDiv>
          <BlogImg src={`https://picsum.photos/id/${post.id}/500/333`} alt="Blog Image"/>
          <CardBottom>
          <Title>{post.title}</Title>
          <TagP>Devamını Oku...</TagP>
          </CardBottom>
    </CardDiv>
  )
}

export default BlogCard