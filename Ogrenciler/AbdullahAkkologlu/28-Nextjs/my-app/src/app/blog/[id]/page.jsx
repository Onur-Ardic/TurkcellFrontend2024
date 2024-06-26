<<<<<<< Updated upstream
import { getBlog } from "@/service/api";
import Image from "next/image";
import Classes from "../../../components/blogCard.module.css";

const Blog = async ({ params }) => {
  const data = await getBlog(params.id);
  return (
    <div className="col-lg-4 mx-auto mt-1">
      <div className="relative">
        <Image
          src={`https://picsum.photos/id/${data.id}/1500`}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
          alt={data.title}
        />
      </div>
      <div className={Classes.cardContent}>
        <h2 className={Classes.cardTitle}> {data.title}</h2>
        <p className={Classes.cardDescription}>{data.body}</p>
      </div>
=======
const Blog = async ({ params }) => {
  async function getData() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
  const data = await getData();
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
>>>>>>> Stashed changes
    </div>
  );
};

export default Blog;
