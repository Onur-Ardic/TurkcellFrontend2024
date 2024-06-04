import React from "react";
import { Card, Avatar, UserInfoContainer, DetailsSection, CardContainer, RepoCard } from "../styled";
import { FaStar } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";

const UserCard = ({ user, error, repos, repoAll }) => {
  if (error) {
    return <div style={{ color: "red", marginTop: "1rem" }}>{error}</div>;
  }

  if (!user) return null;

  const {
    name,
    login,
    avatar_url,
    bio,
    followers,
    following,
    public_repos,
    blog,
    company,
    location,
    twitter_username,
    public_gists,
    created_at,
    updated_at,
  } = user;

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  return (
    <CardContainer>
      <Card>
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar src={avatar_url} alt={name || login} />
            <UserInfoContainer>
              <h2>{name || login}</h2>
              {bio ? <p>{bio}</p> : <p>Bio bulunamadı</p>}
              <ul>
                <li>
                  <span>{followers}</span> <strong>Followers</strong>
                </li>
                <li>
                  <span>{following}</span> <strong>Following</strong>
                </li>
                <li>
                  <span>{public_repos}</span> <strong>Repos</strong>
                </li>
              </ul>
            </UserInfoContainer>
          </div>
          <DetailsSection>
            {blog ? (
              <div>
                <strong>Blog:</strong>{" "}
                <a
                  href={`https://${blog}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {blog}
                </a>
              </div>
            ) : (
              <div>
                <strong>Blog:</strong> Bilgi bulunamadı
              </div>
            )}
            {location ? (
              <div>
                <strong>Konum:</strong> {location}
              </div>
            ) : (
              <div>
                <strong>Konum:</strong> Bilgi bulunamadı
              </div>
            )}
            {twitter_username ? (
              <div>
                <strong>Twitter:</strong>{" "}
                <a
                  href={`https://twitter.com/${twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{twitter_username}
                </a>
              </div>
            ) : (
              <div>
                <strong>Twitter:</strong> Bilgi bulunamadı
              </div>
            )}
            {company ? (
              <div>
                <strong>Şirket:</strong> {company}
              </div>
            ) : (
              <div>
                <strong>Şirket:</strong> Bilgi bulunamadı
              </div>
            )}
            <div>
              <strong>Public Gists:</strong> {public_gists}
            </div>
            <div>
              <strong>Hesap Oluşturulma:</strong>{" "}
              {new Date(created_at).toLocaleDateString()}
            </div>
            <div>
              <strong>Son Güncelleme:</strong>{" "}
              {new Date(updated_at).toLocaleDateString()}
            </div>
          </DetailsSection>
          <DetailsSection>
            <div>
              <strong>Son 10 Repo:</strong>
              <ul>
                {repos?.map((repo) => (
                  <li key={repo.id}>{repo.name}</li>
                ))}
              </ul>
            </div>
          </DetailsSection>
        </div>
      </Card>

      <Card>
        <h2 style={{ color: "black" }}><strong>Tüm Repolar</strong></h2>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          {repoAll?.map((repoItem) => (
            <RepoCard>
              <div>
                <h3>{repoItem.name}</h3>
                <p>{repoItem.description}</p>
                <p>{repoItem.language}</p>
                <div style={{ display: "flex", gap: "1.2rem" }}>
                  <span>
                    <FaCodeFork /> <span>{repoItem.forks}</span>
                  </span>
                  <span>
                    <FaEye color="#191970" />{" "}
                    <span>{repoItem.watchers_count}</span>
                  </span>
                  <span>
                    <FaStar color="#FFD700" />{" "}
                    <span>{repoItem.stargazers_count}</span>
                  </span>
                  <span>Updated: {formatDate(repoItem.updated_at)}</span>
                </div>
              </div>
            </RepoCard>
          ))}
        </div>
      </Card>
    </CardContainer>
  );
};

export default UserCard;
