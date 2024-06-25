const Deneme = ({ params }) => {
  return (
    <div>
      <h3 style={{ textAlign: "center", marginTop: "5rem" }}>
        Deneme Sayfalari - {params.deneme}
      </h3>
    </div>
  );
};

export default Deneme;
