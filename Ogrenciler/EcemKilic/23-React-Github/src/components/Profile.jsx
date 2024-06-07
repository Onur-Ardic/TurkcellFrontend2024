import {
  ProfileContainer,
  ProfileImage,
  H2,
  P,
  Button,
  DetailsCard,
  FollowSpan,
  FollowSpanText,
  A,
  Ul,
} from "../styled";
import ListItem from "./ListItem";
const Profile = ({ data }) => {
  return (
    <ProfileContainer>
      <ProfileImage src={data.avatar_url} alt="" />
      <H2>{data.name}</H2>
      <P>{data.login}</P>
      <Button
        bgcolor="474f7a"
        color="fff"
        width="100%"
        onClick={() => window.open(data.html_url)}
      >
        Profile
      </Button>
      <DetailsCard>
        <p>{data.bio}</p>
        <p>
          <i className="fa-solid fa-users"></i>{" "}
          <FollowSpan href={`${data.html_url}?tab=followers`} target="_blank">
            {data.followers}
          </FollowSpan>{" "}
          <FollowSpanText>followers</FollowSpanText>{" "}
          <FollowSpan href={`${data.html_url}?tab=following`} target="_blank">
            {data.following}
          </FollowSpan>{" "}
          <FollowSpanText>following</FollowSpanText>
        </p>
        <Ul>
          <ListItem
            classNames="fa-solid fa-building"
            content={data.company}
            controlContent={data.company}
          />
          <ListItem
            classNames="fa-solid fa-location-dot"
            content={data.location}
            controlContent={data.location}
          />
          <ListItem
            classNames="fa-solid fa-envelope"
            content={<A href={`mailto:${data.email}`}>{data.email}</A>}
            controlContent={data.email}
          />
          <ListItem
            classNames="fa-solid fa-link"
            content={
              <A href={data.blog} target="_blank">
                {data.blog}
              </A>
            }
            controlContent={data.blog}
          />
          <ListItem
            classNames="fa-brands fa-x-twitter"
            content={
              <A
                href={`https://www.x.com/${data.twitter_username}`}
                target="_blank"
              >
                @{data.twitter_username}
              </A>
            }
            controlContent={data.twitter_username}
          />
        </Ul>
      </DetailsCard>
    </ProfileContainer>
  );
};

export default Profile;
