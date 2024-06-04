import React from "react";

function RepoCard({ repository }) {
  console.log(repository, "repocarda gelen");
  return (
    <>
      <a href={repository.html_url} target="blank">
        <p>{repository.name}</p>
        <p>{repository.html_url}</p>
      </a>
    </>
  );
}

export default RepoCard;
