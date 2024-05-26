import React, { useState } from "react";

const FilmForm = ({ addFilm }) => {
  const [film, setFilm] = useState({
    filmAdi: "",
    yonetmen: "",
    yil: "",
    tur: "",
    afisUrl: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFilm({ ...film, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFilm(film);
    setFilm({ filmAdi: "", yonetmen: "", yil: "", tur: "", afisUrl: "" });
  };

  return (
    <form id="filmForm" onSubmit={handleSubmit} className="mb-3">
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="filmAdi" className="form-label">Film Adı:</label>
            <input type="text" className="form-control" id="filmAdi" value={film.filmAdi} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="yonetmen" className="form-label">Yönetmen:</label>
            <input type="text" className="form-control" id="yonetmen" value={film.yonetmen} onChange={handleChange} required />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="yil" className="form-label">Yıl:</label>
            <input type="number" className="form-control" id="yil" value={film.yil} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="tur" className="form-label">Tür:</label>
            <input type="text" className="form-control" id="tur" value={film.tur} onChange={handleChange} required />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="afisUrl" className="form-label">URL:</label>
          <input type="url" className="form-control" id="afisUrl" value={film.afisUrl} onChange={handleChange} required />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Ekle</button>
    </form>
  );
};

export default FilmForm;
