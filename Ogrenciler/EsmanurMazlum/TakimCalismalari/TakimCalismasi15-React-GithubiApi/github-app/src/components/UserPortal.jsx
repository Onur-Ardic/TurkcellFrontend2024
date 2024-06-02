
const UserPortal = ({ userDetail, closePortal }) => {
    return (
        <>
            <div className="card position-absolute top-0 bottom-0 w-100">
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                        <p>Profil Detay Sayfası : {userDetail?.login}</p>
                        <button className="btn-close" onClick={closePortal}></button>
                    </div>
                </div>
                <div className="card-header">
                    {userDetail?.name}
                </div>
            </div>
        </>

    )
}

export default UserPortal