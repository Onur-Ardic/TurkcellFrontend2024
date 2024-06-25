import React from "react";
<<<<<<< Updated upstream
import Post from "../../components/Post"; 


const BlogPost = ({ params }) => {
  const { id } = params;
  
  return <Post id={id} />;
};

export default BlogPost;
=======
import Post from "../../components/Post";
import Layout from "../../layout";

const BlogPost = () => {
  return (
    <Layout>
      <Post />
    </Layout>
  );
};

export default BlogPost;
>>>>>>> Stashed changes
