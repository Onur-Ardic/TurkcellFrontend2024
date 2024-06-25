import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "./styled.module.css";

const BlogCard = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div>
      <Link href={`/blog/${id}`} className={styled.card}>
        <div className={styled.cardImage}>
          <Image
            src={`https://picsum.photos/200/300?random=${id}`}
            width={96}
            height={96}
            alt="Blog Card"
          />
        </div>
        <div className={styled.cardBody}>
          <h3>
            {id} - {title}
          </h3>
          <p>{body}</p>
        </div>
      </Link>
      <hr className={styled.hr} />
    </div>
  );
};

export default BlogCard;
