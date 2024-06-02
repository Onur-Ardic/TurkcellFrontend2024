import React from 'react'
import { ImgCard,GithubCard,GithubCardA } from '../css/UserCardCss'
import { FaLocationDot } from "react-icons/fa6";

function UserCard({userData,userRepo}) {
  return (
    <>
        {userData.name && (
            <GithubCard className="card my-5 p-3">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col text-center text-md-end">
                        <ImgCard src={userData.avatar_url} className='rounded-1' />
                    </div>
                    <div className="col text-center text-md-start">
                        <div className="card-body text-center">
                            <h2 className="card-title">{userData.name}</h2>
                            <a href={userData.html_url} target='_blank' className='btn btn-danger my-2 animate__animated animate__zoomIn animate__infinite'>Github Account</a>
                            <div className="content">
                                <p>{userData.bio}</p>
                                <div className="network d-flex gap-2 justify-content-center">
                                    <p>Followers : {userData.followers}</p>
                                    <p>Following : {userData.following}</p>
                                </div>
                                <p><FaLocationDot /> {userData.location}</p>
                            </div>                    
                        </div>
                    </div>
                </div>
                
                
                <div className="card-body">
                    <h3 className='text-center'>REPOSITORIES</h3>
                    <div className="row row-cols-lg-4 row-cols-sm-3 row-cols-1 gap-2 justify-content-center">
                        {                            
                            userRepo?.map((repo,index) => <GithubCardA key={index} href={repo.html_url} target='_blank' className={`btn btn-outline-light col`}>{repo.name}</GithubCardA>
                            )
                        }
                    </div>
                </div>
            </GithubCard>)
        }
    </>
  )
}

export default UserCard