import { RepoCardDiv, H4, Description, RepoUl, P, DivBetween } from "../styled";
import ListItem from "./ListItem";

const RepoCard = ({ repo }) => {
  return (
    <RepoCardDiv
      onClick={() => {
        window.open(repo.html_url);
      }}
    >
      <DivBetween>
        <H4>{repo.name}</H4>
        <P>{repo.visibility}</P>
      </DivBetween>
      <Description>{repo.description}</Description>
      <RepoUl>
        <ListItem
          classNames="fa-solid fa-code"
          content={repo.language}
          controlContent={repo.language}
        />
        <li>
          <i className="fa-regular fa-star repo-icon"></i>{" "}
          {repo.stargazers_count}
        </li>
        <li>
          <i className="fa-solid fa-code-fork"></i> {repo.forks}
        </li>
      </RepoUl>
    </RepoCardDiv>
  );
};

export default RepoCard;
