export const Form = ({ newMovie, setMovie, postMovie}) => {
  return (
    <div className="col-4">
      <form onSubmit={postMovie} id="form" className="needs-validation px-4">
        <div className="form-row">
          <div className="mb-1 mx-auto">
            <label htmlFor="nameInput " className="text-white fw-bold">
              Film Adı
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              placeholder="Film Adı"
              required
              value={newMovie.name}
              onChange={(e)=> setMovie({...newMovie, name: e.target.value})}
            />
          </div>
          <div className="mb-1 mx-auto">
            <label htmlFor="directorInput" className="text-white fw-bold">
              Yönetmen Adı
            </label>
            <input
              type="text"
              className="form-control"
              id="directorInput"
              placeholder="Yönetmen Adı"
              required
              value={newMovie.director}
              onChange={(e)=> setMovie({...newMovie, director: e.target.value})}
            />
          </div>
          <div className="mb-1 mx-auto">
            <label htmlFor="yearInput" className="text-white fw-bold">
              Yılı
            </label>
            <input
              type="number"
              className="form-control"
              id="yearInput"
              placeholder="Yılı"
              required
              value={newMovie.year}
              onChange={(e)=> setMovie({...newMovie, year: e.target.value})}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="mb-1 mx-auto">
            <label htmlFor="type" className="text-white fw-bold">
              Film Türü
            </label>
            <select
              id="movieType"
              className="form-select"
              aria-label="Default select example"
              value={newMovie.type}
              onChange={(e)=> setMovie({...newMovie, type: e.target.value})}
            >
              <option defaultValue="Film Türü Seçiniz">Film Türü Seçiniz</option>
              <option value="Bilim Kurgu">Bilim Kurgu</option>
              <option value="Aksiyon">Aksiyon</option>
              <option value="Macera">Macera</option>
              <option value="Fantastik">Fantastik</option>
              <option value="Romantik">Romantik</option>
            </select>
          </div>
          <div className="mb-3 mx-auto">
            <label htmlFor="imageUrl" className="text-white fw-bold">
              Resim Afiş Linki
            </label>
            <input
              type="url"
              className="form-control"
              id="imageUrl"
              placeholder="https://tvplus.com.tr/"
              required
              value={newMovie.image}
              onChange={(e)=> setMovie({...newMovie, image: e.target.value})}
            />
          </div>
        </div>
        <div id="formEnd" className="mb-3 d-flex mx-auto">
          <button id="filmOlustur" className="btn btn-success" type="submit">
            Film Oluştur
          </button>
        </div>
      </form>
    </div>
  );
};
