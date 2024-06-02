import Icon from "../Icon";

const Social = ({ href, category, title }) => {
  return (
    <a href={href} target="_blank">
      <Icon category={category} title={title} />
    </a>
  );
};

export default Social;
