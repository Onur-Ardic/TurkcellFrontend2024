import Button from "@/components/Button";
import Image from "next/image";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogElement = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <div className="w-full h-[300px] relative mb-6">
        <Image
          src={`https://picsum.photos/id/${params.id}/800`}
          alt="Blog image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-t-lg"
        />
      </div>
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <p className="text-lg text-gray-700">{data.body}</p>
      <Button text="Geri Dön" link="/Blogs" />
    </div>
  );
};

export default BlogElement;
