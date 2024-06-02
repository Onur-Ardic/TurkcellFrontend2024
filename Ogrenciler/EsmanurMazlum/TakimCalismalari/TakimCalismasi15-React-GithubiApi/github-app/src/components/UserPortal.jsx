import { UsrModal } from "../styled";
const UserPortal = ({ userDetail, closePortal }) => {
    return (
        <>
            {console.log(userDetail)}
            <UsrModal>
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                        <h3>Profil Detay Sayfası :<strong>{userDetail?.login}</strong></h3>
                        <button className="btn-close" onClick={closePortal}></button>
                    </div>
                </div>
                <div className="card-body">                  
                    
                    <div className="row">
                        <div className="col-4 text-center">
                        <img src={userDetail?.avatar_url} alt="avatar" width={200} height={200} className="rounded-circle" />
                        <p><strong>{userDetail?.name}</strong></p>
                        <p>{userDetail?.location}</p>
                        </div>
                        <div className="col-8">
                        <p>Hakkımda:{userDetail?.bio}</p>
                        <p>Çalışmalarım:{userDetail?.public_repos}</p>
                        <p>Takipçilerim:{userDetail?.followers}</p>
                        <p>Takip ettiklerim:{userDetail?.following}</p>
                        </div>
                    </div>

                </div>
            </UsrModal>
        </>

    )
}

export default UserPortal

