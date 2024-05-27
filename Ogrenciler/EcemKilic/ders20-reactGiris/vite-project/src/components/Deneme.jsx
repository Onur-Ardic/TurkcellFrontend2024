import PropTypes from 'prop-types'
const Deneme = ({ isim, yas }) => {
  return (
    <>
      <div>{isim}</div>
      <div>{yas}</div>
    </>
  );
};
Deneme.propTypes = {
  isim: PropTypes.string.isRequired,
  yas: PropTypes.number,
}

Deneme.defaultProps = {
  yas: "Yaş bilgisi girilmedi"
}

export default Deneme;