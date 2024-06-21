function User({ user }) {
  return (
    <div>
      <p>{user.login}</p>
      <img src={user.avatar_url} alt={user.login} width={50} height={50} />
    </div>
  );
}

export default User;
