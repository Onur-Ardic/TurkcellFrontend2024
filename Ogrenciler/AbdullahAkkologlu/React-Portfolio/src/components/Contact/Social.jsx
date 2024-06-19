import Icon from "../Icon";

const Social = ({ href, category, title, contentTitle, contentDesc }) => {
  return (
    <a href={href} target="_blank" className="col-lg-6 pt-5">
      <div className="d-flex gap-3 align-items-center">
        <Icon category={category} title={title} size="4x" />
        <div>
          <h4 className="fw-bold">{contentTitle}</h4>
          <h6 className="m-0">{contentDesc}</h6>
        </div>
      </div>
    </a>
  );
};
/* 
<div className="col-lg-4 d-flex gap-3 align-items-center">
              <Icon category={category} title={title} size="4x" />
              <div>
                <h4 className="fw-bold">Location</h4>
                <h6 className="m-0">Bolu, Turkiye</h6>
              </div>
            </div>
*/
export default Social;
