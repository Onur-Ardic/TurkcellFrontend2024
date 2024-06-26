"use client";
import { useEffect, useState } from "react";
import { RequestById } from "@/api/request";
import Link from "next/link";

const BlogItem = ({ params }) => {
  const [postDetail, setPostDetail] = useState([]);

  const getPostDetails = async (id) => {
    try {
      const response = await RequestById(id);
      setPostDetail(response);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getPostDetails(params.id);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <Link href="/">
            <button className="btn btn-danger my-2">Geri Dön</button>
          </Link>
        </div>

        <div className="row">
          <div className="col-10 mx-auto">
            <div className="card bg-light bg-opacity-25 text-white shadow">
              <div className="card-header p-0">
                <img
                  src={`https://picsum.photos/200/300?random=${postDetail.id}`}
                  alt={postDetail.title}
                  className="w-100 rounded-top"
                  height={300}
                />
              </div>
              <div className="card-body">
                <h1> {postDetail.title}</h1>
                <p>{postDetail.body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
