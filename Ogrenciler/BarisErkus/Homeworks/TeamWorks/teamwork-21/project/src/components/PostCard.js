import Link from "next/link";

import classes from "./styles.module.css";
import Image from "next/image";

const PostCard = async ({ post }) => {
  return (
    <li className={classes.cardContainer}>
      <Link href={`/post/${post.id}`} className={classes.cardSubContainer}>
        <Image src="/post.png" alt="Post Image" width={500} height={200} />
        <h2 className={classes.title}>{post.title}</h2>
      </Link>
    </li>
  );
};

export default PostCard;