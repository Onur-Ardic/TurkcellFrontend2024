
function User({ user, handlePortal }) {

    return (
        <>
            <div className="card my-3">
                <div className='row'>
                    <div className='col-2'>
                        <img src={user.avatar_url} width="100px" height="100px" />
                    </div>
                    <div className="col-8">
                        <h5>{user.login}</h5>
                        <p>{user.name}</p>
                        <p></p>
                        <p>{user.type}</p>
                    </div>
                    <div className="col-2 align-self-center">
                        <button className="btn btn-info" onClick={(e) => { e.preventDefault(); handlePortal(user.login,e); }}>Details</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User