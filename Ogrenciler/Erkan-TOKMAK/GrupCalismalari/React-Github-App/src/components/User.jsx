import { ButtonDetails,UsrCard } from "../styled";

function User({ user, handlePortal }) {

    return (
        <>
            <UsrCard   >
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
                        <ButtonDetails onClick={(e) => { e.preventDefault(); handlePortal(user.login,e); }}>Details</ButtonDetails>
                    </div>
                </div>
            </UsrCard>
        </>
    )
}

export default User