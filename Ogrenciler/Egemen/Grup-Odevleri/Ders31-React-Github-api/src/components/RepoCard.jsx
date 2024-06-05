import styled from "styled-components";
import { FaRegStar } from "react-icons/fa";

const RepoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
  margin-left: 3%;
`;

const RepoCardWrapper = styled.div`
  background-color: rgba(108, 117, 125, 0.25);
  width: 49%;
  padding: 16px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RepoName = styled.p`
  font-size: 1.2em;
  font-weight: bold;
`;

const RepoLanguage = styled.p`
  display: flex;
  align-items: center;
  font-size: 1em;
  color: #6c757d;
`;

const StarIcon = styled(FaRegStar)`
  margin-left: 8px;
`;

const RepoCard = ({ repoData }) => {
  return (
    <RepoContainer>
      {repoData.slice(0, 6).map((repo, index) => (
        <RepoCardWrapper key={index}>
          <RepoName>{repo.name}</RepoName>
          <RepoLanguage>
            {repo.language ? repo.language : "Dil belirtilmemiş"}
            <StarIcon />
          </RepoLanguage>
        </RepoCardWrapper>
      ))}
    </RepoContainer>
  );
};

export default RepoCard;
