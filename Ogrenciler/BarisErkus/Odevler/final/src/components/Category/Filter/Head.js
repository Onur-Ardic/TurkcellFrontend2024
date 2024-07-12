import { ClearButtonWrapper, SectionTitle } from "./styles";
import { FiFilter } from "react-icons/fi";

const Head = ({ title, modal, clearFilters }) => {
  return (
    <SectionTitle className="pb-3 border-bottom">
      <span>{title}</span>
      {modal ? (
        <ClearButtonWrapper
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></ClearButtonWrapper>
      ) : (
        <ClearButtonWrapper onClick={clearFilters}>
          <FiFilter size={24} />
        </ClearButtonWrapper>
      )}
    </SectionTitle>
  );
};

export default Head;
