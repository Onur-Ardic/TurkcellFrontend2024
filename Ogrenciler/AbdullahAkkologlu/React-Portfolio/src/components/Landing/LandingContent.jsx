import Icon from "../Icon";

const LandingContent = () => {
  return (
    <div className="col-5">
      <h1 className="fw-bolder landing-title">Frontend Developer</h1>
      <h6 className="text-body-secondary my-5">
        Hi! I'm Abdullah Akkoloğlu. I'm a passionate frontend developer who
        loves crafting digital experiences that make a difference.
      </h6>
      <div className="d-flex gap-3 social-icons">
        <a href="https://www.github.com/akkologlu" target="_blank">
          <Icon category={"brands"} title={"github"} />
        </a>
        <a href="https://akkologlu.medium.com/" target="_blank">
          <Icon category={"brands"} title={"medium"} />
        </a>
        <a href="https://www.linkedin.com/in/akkologlu" target="_blank">
          <Icon category={"brands"} title={"linkedin"} />
        </a>
        <a href="https://www.x.com/akkologluu" target="_blank">
          <Icon category={"brands"} title={"x-twitter"} />
        </a>
      </div>
    </div>
  );
};

export default LandingContent;
