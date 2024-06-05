import { Button, Header, HeaderInfo, InfoDiv } from "../../style";

function InfoContent() {
  return (
    <>
      <div className="container">
        <InfoDiv className="animate__animated animate__fadeInLeft">
          <Header>Esmanur Mazlum</Header>
          <HeaderInfo>
            I am passionate about frontend web development and eager to
            continuously learn.
          </HeaderInfo>
          <div className="mt-5">
            <Button>Contact</Button>
            <Button>Get My Resume!</Button>
          </div>
        </InfoDiv>
      </div>
    </>
  );
}

export default InfoContent;