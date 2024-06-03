import ManipulationGroup from "../../molecules/ManipulationGroup";
import RepositoryCard from "../../molecules/RepositoryCard";

const RightGroup = ({
  buttons,
  setUserName,
  userName,
  repos,
  placeholder,
  type,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <ManipulationGroup
        buttons={buttons}
        placeholder={placeholder}
        onChange={setUserName}
        value={userName}
        type={type}
      />
      <RepositoryCard repos={repos} />
    </div>
  );
};

export default RightGroup;
