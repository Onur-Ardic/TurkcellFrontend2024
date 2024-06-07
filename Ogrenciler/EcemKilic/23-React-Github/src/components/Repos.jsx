import { ReposDiv } from "../styled";
import RepoCard from "./RepoCard";
const Repos = ({ repos }) => {
  return (
    <ReposDiv>
      {repos.slice(0, 8).map((repo, index) => (
        <RepoCard key={index} repo={repo} />
      ))}
    </ReposDiv>
  );
};

export default Repos;
