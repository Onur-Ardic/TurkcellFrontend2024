import Footer from "@/components/Footer/Footer";
import BlogCard from "@/components/BlogCard/BlogCard";
import PaginationControl from "@/components/PaginationControl";
import { getPosts } from "@/api/api";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default async function Home({ searchParams }) {
  const page = searchParams.page ?? '1'; //page degeri var mi url'de? yoksa page degeri 1 olacak cunku acilis sayfasi ilk sayfa olacak
  const per_page = searchParams.per_page ?? '10'; //per_page sayfada gosterilecek toplam post sayisi

  await delay(1500);
  const data = await getPosts();
  const totalPosts = data.length; //toplam post sayisi -> 100 tane post var

  const start = (Number(page) - 1) * Number(per_page); //ekranda gostermeye kacinci postla baslayacak | start=10
  const end = start + Number(per_page); //ekranda gostermeye kacinci postta bitirecek | end=20
  const entries = data.slice(start, end); //ekranda toplamda kac tane post gosterilecek. | entries = 10'dan 20'ye kadar olan postlari ekranda gosterecek

  return (
    <div className="container">
      <div className="row">
        {entries.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <hr className="hr" />
      <PaginationControl
        hasNextPage={end < totalPosts} //bir sonraki sayfa var mi? yoksa ileri butonunu devre disi birak
        hasPrevPage={start > 0} //bir onceki sayfa var mi? yoksa geri butonunu devre disi birak
        page={page}
        per_page={per_page}
      />
      <Footer />
    </div>
  );
}
