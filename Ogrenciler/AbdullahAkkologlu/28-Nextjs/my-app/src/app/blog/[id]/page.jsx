import { getBlog } from "@/service/api";
import Image from "next/image";

const Blog = async ({ params }) => {
  const data = await getBlog(params.id);
  return (
    <div>
      <Image
        src={`https://picsum.photos/id/${data.id}/200/300`}
        width={200}
        height={300}
      />
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
};

export default Blog;
