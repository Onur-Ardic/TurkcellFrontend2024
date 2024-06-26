import BlogCard from "@/components/BlogCard";

async function getData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blogs = async () => {
  const posts = await getData();

  return (
    <>
      <h1 className="text-center p-3 text-4xl">Bloglar</h1>
      <div className="flex flex-wrap container mx-auto justify-between">
        {posts.slice(10, 50).map((data) => (
          <BlogCard data={data} key={data.id} />
        ))}
      </div>
    </>
  );
};

export default Blogs;
