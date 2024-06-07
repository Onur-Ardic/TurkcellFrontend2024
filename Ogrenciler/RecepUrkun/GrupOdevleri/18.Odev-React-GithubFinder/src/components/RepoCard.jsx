import {
  Button,
  Card,
  CardInner,
  CardSideFront,
  CardSideBack,
  CardContainer,
  RepoButton,
} from "./Styled";

const RepoCard = ({ repo, dateFormatter, scrollToTop }) => {
  return (
    <CardContainer>
      <Card className="m-2">
        <CardInner>
          <CardSideFront className="d-flex flex-column">
            <div className="d-flex flex-row align-items-center">
              <i className="fa-brands fa-github"></i>
              <h6 className="m-0 ms-2 text-break">{repo.name}</h6>
            </div>
            <hr />
            <h6 className="mt-2">
              Kullanilan Dil: <i>{repo.language}</i>
            </h6>
            <hr />
            {repo.description ? (
              <h6 className="opacity-75  fs-8">{repo.description}</h6>
            ) : (
              <div className="d-none">Merhaba</div>
            )}
          </CardSideFront>
          <CardSideBack>
            <div className="d-flex flex-column">
              <div className="d-flex flex-row align-items-center">
                <i className="fa-brands fa-github"></i>
                <h5 className="m-0 ms-2">{repo.name}</h5>
              </div>
              <div className="d-flex align-items-center my-3">
                <i className="me-1 fa-solid fa-star"></i>{" "}
                {repo.stargazers_count}
                <i className="ms-3 me-1 fa-solid fa-code-fork"></i>
                {repo.forks_count}
              </div>
              <p>Created At: {dateFormatter(repo.created_at)}</p>
              <p>Updated At: {dateFormatter(repo.updated_at)}</p>
            </div>
            <RepoButton $primary={true}>
              <a
                className="text-reset text-decoration-none"
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-arrow-up-right-from-square mx-2"></i>
                Repoya Git
              </a>
            </RepoButton>
          </CardSideBack>
        </CardInner>
      </Card>
    </CardContainer>
  );
};

export default RepoCard;
