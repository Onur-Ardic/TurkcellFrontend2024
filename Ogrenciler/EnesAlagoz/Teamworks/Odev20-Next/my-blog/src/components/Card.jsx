import React from "react";
import Link from "next/link";

const Card = ({ post }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card my-4 bg-light bg-opacity-25 text-white shadow">
        <div className="card-header p-0">
          <img
            src={`https://picsum.photos/200/300?random=${post.id}`}
            alt={post.title}
            className="w-100 rounded-top"
            height={300}
          />
        </div>
        <div className="card-body p-4" style={{ minHeight: 250 }}>
          <h4 className="fs-4">{post.title.length > 18 ? post.title.substring(0, 18) + "..." : post.title}</h4>
          <p>{post.body.length > 70 ? post.body.substring(0, 70) + "..." : post.body}</p>
        </div>
        <div className="card-footer">
          <Link href={`/blog/${post.id}`}>
            <button className="btn btn-warning w-100">Detayları Gör</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
