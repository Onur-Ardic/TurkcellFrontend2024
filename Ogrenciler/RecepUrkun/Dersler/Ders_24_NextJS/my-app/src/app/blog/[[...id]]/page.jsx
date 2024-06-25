const BlogItem = ({ params }) => {
  return (
    <div>
      <h3 style={{ textAlign: "center", marginTop: "5rem" }}>
        Blog ID: {params.id}
      </h3>
    </div>
  );
};

export default BlogItem;
