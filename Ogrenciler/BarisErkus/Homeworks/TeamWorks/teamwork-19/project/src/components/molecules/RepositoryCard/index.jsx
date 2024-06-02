import Button from "../../atoms/Button";
import { tertiary, primary, quinary } from "../../common/colors";

const RepositoryCard = ({ repos }) => {
  return (
    <>
      {repos.length > 0 &&
        repos.map((repo) => {
          let date = new Date(repo.updated_at);
          date = date.toLocaleDateString();
          return (
            <div
              key={repo.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: primary,
                color: "white",
                padding: "10px",
                margin: "10px 0",
              }}
            >
              <div className="card-left">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: 10,
                  }}
                >
                  <a
                    href={repo.html_url}
                    style={{
                      fontSize: 24,
                      color: quinary,
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    {repo.name}
                  </a>
                  <p>{repo.visibility}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <p>{repo.language}</p>
                  <p>{date}</p>
                </div>
              </div>
              <div className="card-right">
                <Button text={"Star"} backgroundColor={tertiary} />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default RepositoryCard;
