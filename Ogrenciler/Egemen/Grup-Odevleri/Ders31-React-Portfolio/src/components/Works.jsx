import WorkCard from "./WorkCard";

const Works = () => {
  return (
    <div id="works" className="container my-5">
      <h2 className="mb-4">Projelerim</h2>
      <div className="row gap-5 justify-content-between">
        <WorkCard projeName={"deneme1"}/>
        <WorkCard projeName={"deneme2"}/>
        <WorkCard projeName={"deneme3"}/>
        <WorkCard projeName={"deneme4"}/>
        <WorkCard projeName={"deneme5"}/>
        <WorkCard projeName={"deneme6"}/>
      </div>
    </div>
  );
};

export default Works;
