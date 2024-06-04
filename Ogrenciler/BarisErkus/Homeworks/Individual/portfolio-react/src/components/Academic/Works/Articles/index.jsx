import { Title } from "../../../../common/styled";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const articles = [
    {
      img: "gygy.png",
      title:
        "Turkcell Investing in Young People Software for the Future: My Front-End Bootcamp Story",
      href: "https://medium.com/@baris.erkus/turkcell-gen%C3%A7lere-yat%C4%B1r%C4%B1m-gelece%C4%9Fe-yaz%C4%B1l%C4%B1m-front-end-bootcamp-hikayem-28e56a49b3b8",
    },
    {
      img: "package.png",
      title:
        "NPM, PNPM, YARN, BUN WHAT DO THEY MEAN, WHAT ARE THE DIFFERENCES?",
      href: "https://medium.com/@baris.erkus/npm-pnpm-yarn-bun-bunlar-ne-anlama-geli%CC%87yor-farklari-neler-c479bc478397",
    },
    {
      img: "hat.png",
      title: "The Six-Hat Thinking Technique",
      href: "https://medium.com/@baris.erkus/alt%C4%B1-%C5%9Fapkal%C4%B1-d%C3%BC%C5%9F%C3%BCnme-tekni%C4%9Fi-47e20382ed87",
    },
    {
      img: "evolution.png",
      title:
        "What Those Who Want to Improve Themselves in the Field of Software Should Know",
      href: "https://medium.com/@baris.erkus/yaz%C4%B1l%C4%B1m-alan%C4%B1nda-kendini-geli%C5%9Ftirmek-i%CC%87steyenlerin-bilmesi-gerekenler-fdf77d0e4ae1",
    },
    {
      img: "constructor.png",
      title: "Constructor vs Static Constructor",
      href: "https://medium.com/@baris.erkus/constructor-vs-static-constructor-73a664162f76",
    },
  ];

  return (
    <section aria-labelledby="articles-title">
      <Title as="h2" id="articles-title">
        Articles
      </Title>
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          img={article.img}
          title={article.title}
          href={article.href}
        />
      ))}
    </section>
  );
};

export default Articles;
