import styled from "./styled.module.css";

const loading = () => {
  return (
    <div className={styled.loaderWrapper}>
      <div className={styled.loader}></div>
    </div>
  );
};

export default loading;
