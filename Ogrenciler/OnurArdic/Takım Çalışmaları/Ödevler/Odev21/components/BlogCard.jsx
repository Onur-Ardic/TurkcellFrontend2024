"use client";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ data }) => {
  return (
    <Link href={`/Blogs/${data.id}`}>
      <div className="w-[280px] h-[370px] m-3 bg-white text-black p-5 rounded-lg shadow-lg hover:bg-black hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
        <div className="w-full h-[200px] relative rounded-lg overflow-hidden">
          <Image
            src={`https://picsum.photos/id/${data.id}/300`}
            alt="Blog image"
            width={300}
            height={200}
            // layout="fill"
            // objectFit="cover"
          />
        </div>
        <h1 className="mt-4 text-lg font-semibold line-clamp-1">{data.title}</h1>
        <p className="text-sm mt-2 line-clamp-2">{data.body}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
