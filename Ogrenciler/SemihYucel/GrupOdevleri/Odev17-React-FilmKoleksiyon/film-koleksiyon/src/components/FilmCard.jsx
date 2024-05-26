import React from "react";

const FilmCard = ({ film, onDelete }) => {
  const { id, filmAdi, yonetmen, yil, tur, afisUrl } = film;

  return (
    <div className="filmKarti col-md-4">
      <div className="filmBilgisi">
        <img src={afisUrl} alt="örnek-resim" />
        <p><strong>Adı:</strong> {filmAdi}</p>
        <p><strong>Yönetmen:</strong> {yonetmen}</p>
        <p><strong>Yıl:</strong> {yil}</p>
        <p><strong>Tür:</strong> {tur}</p>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-danger me-5" onClick={() => onDelete(id)}>Sil</button>
        {/* Güncelle butonu ve fonksiyonu eklenebilir */}
      </div>
    </div>
  );
};

export default FilmCard;
