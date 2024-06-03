import { AvatarImage, UserName, WrapperUserCard } from "../styled"

function UserCard({ userInfo }) {
    return (
        <WrapperUserCard>
            {userInfo[0] &&
                <>
                    <AvatarImage src={userInfo[0]?.avatar_url}></AvatarImage>
                    <UserName>{userInfo[0]?.name} </UserName>
                    <div>{userInfo[0]?.bio}</div>
                    <div>{userInfo[0]?.company && <i className="bi bi-building"></i>} {userInfo[0]?.company}</div>
                    <div><i className="bi bi-people-fill"></i> {userInfo[0]?.followers} followers, {userInfo[0]?.following} following</div>
                    <div>{userInfo[0]?.location && <i className="bi bi-geo-alt"></i>} {userInfo[0]?.location}</div>
                    <div>Public Repositories: {userInfo[0]?.public_repos}</div>
                </>
            }
        </WrapperUserCard>
    )
}

export default UserCard