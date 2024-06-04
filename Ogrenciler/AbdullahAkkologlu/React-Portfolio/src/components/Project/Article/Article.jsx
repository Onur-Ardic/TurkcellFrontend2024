import {
  ArticleImage,
  ArticleDiv,
  ArticleContent,
  MediumPicture,
  FlexAlign,
  ArticleTitle,
  ArticleDesc,
  ArticleImageDiv,
  RowBetween,
} from "../../../styles";

const Article = ({ article, user }) => {
  const firstImage = article.description
    .toString()
    .match(/<img[^>]+src="([^">]+)"/)[1];
  const regex = /<p>(.*?)<\/p>/;

  const match = article.content.match(regex);
  const content = match[1];
  const first90Chars = content.substring(0, 90);

  function formatDate(dateStr) {
    let dateObj = new Date(dateStr);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let formattedDate = `${
      monthNames[dateObj.getMonth()]
    } ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
    return formattedDate;
  }
  let dateStr = article.pubDate;
  let formattedDate = formatDate(dateStr);

  return (
    <ArticleDiv width={45} onClick={() => window.open(article.link)}>
      <FlexAlign>
        <MediumPicture src={user.image} />
        <small>Abdullah Akkoloğlu</small>
      </FlexAlign>
      <RowBetween>
        <ArticleContent width={75}>
          <ArticleTitle>{article.title.substring(0, 50)}</ArticleTitle>
          <ArticleDesc>{first90Chars}...</ArticleDesc>
          <small>{formattedDate}</small>
        </ArticleContent>
        <ArticleImageDiv width={20}>
          <ArticleImage src={firstImage} />
        </ArticleImageDiv>
      </RowBetween>
    </ArticleDiv>
  );
};

export default Article;
