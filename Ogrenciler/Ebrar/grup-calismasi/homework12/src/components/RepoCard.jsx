import React from 'react'
import { FaRegStar } from "react-icons/fa";

const RepoCard = ({ repoData }) => {
  return (
    <div className='col-8 gap-3 d-flex justify-content-between flex-wrap'>
        {repoData.slice(0,6).map((repo, index) => (
        <div className='repoCard bg-secondary bg-opacity-25 col-6 p-4 border border-dark-subtle rounded rounded-75' key={index}>
            <p>{repo.name}</p>
            <p>{repo.language? repo.language:"Dil belirtilmemiş"} <FaRegStar className='ms-3' /></p>
        </div>
        ))}
    </div>
  )
}

export default RepoCard;