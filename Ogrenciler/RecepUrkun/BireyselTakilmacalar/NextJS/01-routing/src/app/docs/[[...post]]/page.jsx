const PostPage = ({ params }) => {
  console.log(params);
  return <div>Post Sayfasi: {params.post} </div>;
};

export default PostPage;
