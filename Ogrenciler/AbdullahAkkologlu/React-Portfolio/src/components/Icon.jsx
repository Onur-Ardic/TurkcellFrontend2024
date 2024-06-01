const Icon = ({ category, title }) => {
  return <i className={`fa-${category} fa-${title} fa-2xl`}></i>;
};

export default Icon;
