import InfoContent from "./InfoContent";
import { ImgDiv, SectionCream } from "../../style";

function Info() {
  return (
    <>
      <SectionCream>
        <div className="container">
          <div className="row">
            <div className="col-7">
              <InfoContent />
            </div>
            <div className="col-5">
              <ImgDiv className="animate__animated animate__fadeInRight"/>
            </div>
          </div>
        </div>
      </SectionCream>
    </>
  );
}

export default Info;
