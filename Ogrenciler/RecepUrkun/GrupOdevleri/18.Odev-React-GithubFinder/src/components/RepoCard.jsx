import styled from "styled-components";

const Card = styled.div`
  perspective: 2000px;
  width: 300px;
  height: 250px;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  backface-visibility: hidden;
  padding: 25px;
  color: #fff;
`;

const CardSideFront = styled(CardSide)`
  background-image: var(--bgColor);
`;

const CardSideBack = styled(CardSide)`
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  transform: rotateY(180deg);
`;

const CardContainer = styled.div`
  &:hover ${CardInner} {
    transform: rotateY(180deg);
  }
`;

const Button = styled.button`
  background-color: #fff;
  font-size: 14px;
  padding: 0.5em 2em;
  border: 0;
  border-radius: 7px;
  cursor: pointer;
  outline: none;
  &:hover {
    filter: brightness(1.1);
  }
`;

const RepoCard = ({ repo, dateFormatter }) => {
  return (
    <CardContainer>
      <Card className="m-2">
        <CardInner>
          <CardSideFront className="d-flex flex-column">
            <div className="d-flex flex-row align-items-center">
              <i className="fa-brands fa-github"></i>
              <h5 className="m-0 ms-2">{repo.name}</h5>
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
            <Button>
              <a
                className="text-reset text-decoration-none"
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repoya Git
              </a>
            </Button>
          </CardSideBack>
        </CardInner>
      </Card>
    </CardContainer>
  );
};

export default RepoCard;
