import { UsrModal,ButtonDetails } from "../styled";
import Errors from "./Errors";
const UserPortal = ({ userDetail, closePortal, error }) => {
    return (
        <>
            <UsrModal>
               
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                        <h3>Profil Detay Sayfası :<strong>{userDetail?.login}</strong></h3>
                        <button className="btn-close" onClick={closePortal}></button>
                    </div>
                </div>
                <hr/>
                <div className="card-body mt-2">
                    {error ? <Errors error={error} /> : <div className="row">
                        <div className="col-4 text-center">
                            <img src={userDetail?.avatar_url} alt="avatar" width={200} height={200} className="rounded-circle" />
                            <h1><strong>{userDetail?.name}</strong></h1>
                            <p>{userDetail?.location}</p>
                        </div>
                        <div className="col-8">
                            <div className="row mb-3">
                                <div className="col-3 bg-dark bg-opacity-50 text-white rounded-5 m-3 p-3"><h3 className="text-center">Çalışmalarım <br /><span className="fs-1">{userDetail?.public_repos}</span></h3></div>
                                <div className="col-3 bg-dark bg-opacity-50 text-white rounded-5 m-3 p-3"><h3 className="text-center">Takipçilerim <br /><span className="fs-1">{userDetail?.followers}</span></h3></div>
                                <div className="col-3 bg-dark bg-opacity-50 text-white rounded-5 m-3 p-3"><h3 className="text-center">Takip ettiklerim <br /><span className="fs-1">{userDetail?.following}</span></h3></div>
                            </div>
                            <h4>{userDetail?.bio}</h4>
                            <div className="row">
                                <a href={userDetail?.html_url} target="_blank"><ButtonDetails>Github'a git</ButtonDetails></a>
                            </div>
                        </div>
                    </div>}


                </div>
            </UsrModal>
        </>

    )
}

export default UserPortal

