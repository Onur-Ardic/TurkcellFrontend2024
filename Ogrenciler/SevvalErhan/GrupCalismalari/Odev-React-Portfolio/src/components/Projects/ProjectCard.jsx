import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
    background-color: #fff;
    border-radius: 20px;
    padding: 1.5rem;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 1rem;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #777;
  margin-bottom: 1rem;
`;

const GithubLink = styled.a`
  color: #333;
  font-size: 1.5rem;

  &:hover {
    color: #000;
  }
`;

const ProjectCard = ({ image, title, description, github }) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <GithubLink href={github} target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </GithubLink>
    </Card>
  );
};

export default ProjectCard;
