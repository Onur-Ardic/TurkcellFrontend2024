import React from "react";
import { DressStyleContainer, ImageWrapper, Title } from "./styled";
import Link from "next/link";

const DressStyle = () => {
  return (
    <DressStyleContainer className="d-flex row text-align-center justify-content-center  mt-5 rounded-5">
      <div className="d-flex justify-content-center align-items-center">
        <Title className="fw-bold">BROWSE BY DRESS STYLE</Title>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Link href="/categorypage/casual" legacyBehavior>
          <a>
            <ImageWrapper width={407} height={289}>
              <img
                src="https://s3-alpha-sig.figma.com/img/e1b7/74ab/a32d9a769caba77c08e107a9198dcd6d?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CdYj~S2xP7dK63gc~F--KdxyrpRvjjutd2iau0oHdzS9tiw5O~2VszbK55AOsXSw9Wu56TEpeKTqvjzW9X~ZTORryTwtiCNzbOtXeE~PAyz2JfsePH8doRFZUDUAxaNG6bLnRAs-Kj~y2BpXNzaF-IHldKQrgb4oUebcRPw6RDA-tcviBHxw5oVEMhALqXBZ5gTP8njKFUcg6fhyLvIPRO3VQ9pJt60f1NwpEQ6z2ebE7UnhcnNN44qlYE3xBOPigUGrOY7-vb-7vI75dEX0oss9vWdOs5vLOh8o8oz2P8HZs2MEzGeP90VZT5fVweA7Dz10lT1xZohM0gI4BHYUxw__"
                alt="casual"
                className="img-fluid rounded-4"
              />
              <div className="label text-black">
                <h3>Casual</h3>
              </div>
            </ImageWrapper>
          </a>
        </Link>
        <Link href="/categorypage/formal" legacyBehavior>
          <a>
            <ImageWrapper width={684} height={289}>
              <img
                src="https://s3-alpha-sig.figma.com/img/e46e/d6ac/8bdbe2c750dcc6e834bf1d98a4a73b29?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oMz-YxWCi0HgMMO4~QGe6VHLYUkMmpILExG1v3Hlez7q3OerLDk~QkZ-J~EflaoCR0A3c1jCnlM342HgEa~t-d-iY2-c~BKE3Qe5oZBNoaHc9LE7oWTdOIC8hPEQ4fNc-avzZmRWnMOYvYv4gWQE3pyAIlQTAYUooJsjSOQzmDb3G1TaQKHGDsJ1QjjbqZvhUiu3ELSIJscUVE2nWIbYOK1VqNvbBjXCXqmicqql-HwTXXSeffJj8iPR1Ae~qiitBaqNwSfXto1xcOvXa7~G8M2F7Rz3x7a9IS47DZohi32XD0t4GPdZ~9owHx5HMxkRhZNde5S1xtQgwzm4M9uEVA__"
                alt="Formal"
                className="img-fluid rounded-4"
              />
              <div className="label text-black">
                <h3>Formal</h3>
              </div>
            </ImageWrapper>
          </a>
        </Link>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Link href="/categorypage/party" legacyBehavior>
          <a>
            <ImageWrapper width={684} height={289}>
              <img
                src="https://s3-alpha-sig.figma.com/img/aa19/c69e/82cd85a823c989c1c8631bd976e2cbfb?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pBoLqxL8quf-UozZ1VJTV8N199jJ5NuV0IXL96Z5fPgPeAea5y3MNNB6p3AhJZfD2NF8Pb6zVZ-oszwEUFhgJ316kYyf2hDD16pVCOxehUwKySChKsbBPCvRqcU1GVDxujV~yF2Ny42lPhWbcMXl-Ttvx4ni8~IsynJebpF0Kb8IocnqTTwqC5ZKxwtm4WZ8CXcHjbQRy3AiG24lm8ej6muDG6HXOMgjqcOMcsL0ISQFYZx0NGYMZ8~pm3pTkuR-fhMVvC2EGWg1~FIbJTOzBhIjNGJ5TuEnDFDI5EhUMySSQr5OlFj7E4IEj2mze3ONv2yjk4Bx3oBxfwsaDVDoHw__"
                alt="Party"
                className="img-fluid rounded-4"
              />
              <div className="label text-black">
                <h3>Party</h3>
              </div>
            </ImageWrapper>
          </a>
        </Link>
        <Link href="/categorypage/gym" legacyBehavior>
          <a>
            <ImageWrapper width={407} height={289}>
              <img
                src="https://s3-alpha-sig.figma.com/img/fce6/58e0/c17a220fe8bfb1126626f3ab58a761ec?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jG5Z1LZAcag-zC~KpazwffeG4wiYADZE1Aa4RktdS6Y5AK5LzNijHwWjxMomj5rAHr9HoSs0ZzZOpBbSfmWFFPt0HVdl3fc3rqRnxQkE-D9AGc5gzCjkGjM50VgGQXMq4fLurkbtSbetmeg9mvOFIitjJfxA10ayEeOr8fDS7uH15Kw3wmULp~eqk3pR2GkkMTpLiH0ctYMDiEWPWMpWU2lrefSss4D3wMQWNS75aGGTjsJCJyE~PwEd-0YIgb5k4DImPyI5UOd4E5nUjawemIwrMnFvI6OBHY59QjB2Z~F-CMDzE6LgRY11R~HywZlVD2iglftBryfPft7pODcYkA__"
                alt="Gym"
                className="img-fluid rounded-4"
              />
              <div className="label text-black">
                <h3>Gym</h3>
              </div>
            </ImageWrapper>
          </a>
        </Link>
      </div>
    </DressStyleContainer>
  );
};

export default DressStyle;
