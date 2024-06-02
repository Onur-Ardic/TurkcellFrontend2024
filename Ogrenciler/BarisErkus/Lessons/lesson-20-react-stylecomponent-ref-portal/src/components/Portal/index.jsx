import ReactDom from "react-dom";

const Portal = ({ target, text }) => {
  return ReactDom.createPortal(
    <div>Selam dünyalı ben Portal, hedefim ise {text}</div>,
    target
  );
};

export default Portal;
