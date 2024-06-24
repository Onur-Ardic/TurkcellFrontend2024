import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/hakkimizda"> Hakkimizda </Link>
      <br />
      <Link href="/docs/post-1">Post 1</Link>
      <br />
      <Link href="/docs/post-5/post-2">Post 5</Link>
      <br />
      <Link href="/docs/post-5/post-3/post-7">Post 7</Link>
      <br />
      <Link className="test" target="_blank" href={{
        pathname: "/hakkimizda",
        query: {
          name: "Next.js",
          surname: "ff"
        }
      }}>Hakkimizda Obje ile</Link>
    </div>
  );
}
