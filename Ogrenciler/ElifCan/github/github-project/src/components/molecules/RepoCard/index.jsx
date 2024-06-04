import React from "react";


function RepoCard({ repository }) {
  console.log(repository, "repocarda gelen");
  return (
    <>
    <div className="card bg-primary text-center p-2 mb-2">
    <a href={repository.html_url} target="blank">
        <p className="text-white">{repository.name}</p>
      </a>
    </div>
     
    </>
  );
}

export default RepoCard;
