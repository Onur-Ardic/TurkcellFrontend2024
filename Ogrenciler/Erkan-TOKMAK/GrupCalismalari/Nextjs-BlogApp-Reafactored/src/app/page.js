import { Request } from "../api/request";
import Card from "../components/Card";



export default async function Home() {

  const response = await Request();

  return (
    <main className="container">
      <div className="row">
        {response?.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
