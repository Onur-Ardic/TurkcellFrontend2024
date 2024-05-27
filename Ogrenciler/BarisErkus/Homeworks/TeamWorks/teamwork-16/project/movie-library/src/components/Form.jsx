import InputField from "./InputField"
import PropTypes from "prop-types"

const Form = ({ addToCollection, form, handleInputChange, deleteAllItems }) => {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">
                    <form onSubmit={addToCollection}>
                        <InputField
                            id="imageInput"
                            label="Film Afişi"
                            type="text"
                            name="img"
                            value={form.img}
                            onChange={handleInputChange}
                        />
                        <InputField
                            id="movieNameInput"
                            label="Film Adı"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleInputChange}
                        />
                        <InputField
                            id="movieDesc"
                            label="Açıklama"
                            type="text"
                            name="desc"
                            value={form.desc}
                            onChange={handleInputChange}
                        />
                        <div className="d-flex justify-content-between flex-wrap">
                            <InputField
                                id="directorInput"
                                label="Yönetmen"
                                type="text"
                                name="director"
                                value={form.director}
                                onChange={handleInputChange}
                                className="col-3"
                            />
                            <InputField
                                id="yearInput"
                                label="Yılı"
                                type="number"
                                name="year"
                                value={form.year}
                                onChange={handleInputChange}
                                className="col-3"
                            />
                            <InputField
                                id="categoryInput"
                                label="Kategori"
                                type="text"
                                name="category"
                                value={form.category}
                                onChange={handleInputChange}
                                className="col-3"
                            />
                        </div>
                        <div className="d-flex justify-content-end mt-5">
                            <button type="submit" className="btn btn-primary btn-lg">Koleksiyona Ekle</button>
                        </div>
                    </form>
                    <div className="d-flex justify-content-end mt-3">
                        <button className="btn btn-danger btn-sm" onClick={deleteAllItems}>Tüm Koleksiyonu Temizle</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Form.propTypes = {
    addToCollection: PropTypes.func,
    form: PropTypes.object,
    handleInputChange: PropTypes.func,
    deleteAllItems: PropTypes.func
}

export default Form