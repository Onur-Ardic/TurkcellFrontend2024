const HakkimizdaLayout = ({ children, ...rest }) => {
  console.log(rest);
  return (
    <div>
      <h2>Ben hakkimizda layout'undan geliyorum!</h2>
      <div>{children}</div>
    </div>
  );
};

export default HakkimizdaLayout;
