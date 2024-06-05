const LeftGroup = ({ data }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <img
        src={data.avatar_url}
        alt="avatar"
        style={{ borderRadius: "50%" }}
        width={300}
        height={300}
      />
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
      <p>{data.email}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{data.followers} followers</p>
        <p>{data.following} following</p>
      </div>
      <p style={{ textAlign: "center" }}>{data.public_repos} public repos</p>
    </div>
  );
};

export default LeftGroup;
