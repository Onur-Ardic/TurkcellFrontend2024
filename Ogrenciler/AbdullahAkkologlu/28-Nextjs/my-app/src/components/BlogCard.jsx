import Image from "next/image";
import Link from "next/link";
import Classes from "./blogCard.module.css";

const BlogCard = ({ blog }) => {
  function getRandomDate(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const randomTime =
      startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime());
    return new Date(randomTime);
  }
  const randomDate = getRandomDate("2000-01-01", "2023-12-31");
  return (
    <Link href={`blog/${blog.id}`}>
      <div className="relative">
        <Image
          src={`https://picsum.photos/id/${blog.id}/1500`}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
          alt={blog.title}
        />
      </div>
      <div className={Classes.cardContent}>
        <h2 className={Classes.cardTitle}> {blog.title}</h2>
        <p className={Classes.cardDate}>
          {randomDate.toISOString().split("T")[0]}
        </p>
        <p className={Classes.cardDescription}>{blog.body}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
