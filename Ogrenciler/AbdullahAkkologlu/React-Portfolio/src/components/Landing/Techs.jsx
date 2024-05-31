import Tech from "./Tech";

const Techs = () => {
  return (
    <div>
      <ul className="techs list-unstyled d-flex gap-2">
        <Tech tech="html" />
        <Tech tech="css" />
        <Tech tech="sass" />
        <Tech tech="bootstrap" />
        <Tech tech="tailwind" />
        <Tech tech="js" />
        <Tech tech="react" />
      </ul>
    </div>
  );
};

export default Techs;
