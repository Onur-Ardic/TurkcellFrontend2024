const Tech = ({ tech }) => {
  return (
    <li className="tech">
      <img src={`https://skillicons.dev/icons?i=${tech}`} alt={tech} />
    </li>
  );
};

export default Tech;
