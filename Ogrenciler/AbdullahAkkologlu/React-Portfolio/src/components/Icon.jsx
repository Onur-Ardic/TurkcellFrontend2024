const Icon = ({ category, title, size = "2xl" }) => {
  return <i className={`fa-${category} fa-${title} fa-${size}`}></i>;
};

export default Icon;
