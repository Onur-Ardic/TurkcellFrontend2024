import { SocialsRow } from "../../styles";
import Social from "./Social";

const Socials = () => {
  return (
    <SocialsRow className="row">
      <Social
        href=""
        category={"solid"}
        title={"map-location"}
        contentTitle={"Location"}
        contentDesc={"Bolu, Turkiye"}
      />
      <Social
        href="mailto:abdullahakkol@gmail.com"
        category={"solid"}
        title={"envelope"}
        contentTitle={"Email"}
        contentDesc={"abdullahakkol@gmail.com"}
      />
      <Social
        href="https://www.github.com/akkologlu"
        category={"brands"}
        title={"github"}
        contentTitle={"GitHub"}
        contentDesc={"@akkologlu"}
      />
      <Social
        href="https://akkologlu.medium.com/"
        category={"brands"}
        title={"medium"}
        contentTitle={"Medium"}
        contentDesc={"@akkologlu"}
      />
      <Social
        href="https://www.linkedin.com/in/akkologlu"
        category={"brands"}
        title={"linkedin"}
        contentTitle={"LinkedIn"}
        contentDesc={"@akkologlu"}
      />
      <Social
        href="https://www.x.com/akkologluu"
        category={"brands"}
        title={"x-twitter"}
        contentTitle={"X"}
        contentDesc={"@akkologluu"}
      />
    </SocialsRow>
  );
};

export default Socials;
