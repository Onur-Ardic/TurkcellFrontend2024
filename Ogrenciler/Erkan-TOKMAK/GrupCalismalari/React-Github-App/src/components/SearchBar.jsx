import React from 'react'
import { SearchButton,OurNav } from "../styled";

function SearchBar({ target, onChange, getUsers, input }) {
    return (
        <>
            <OurNav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand text-white" href="#">Github Api</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex" role="search" onSubmit={(e) => {
                            e.preventDefault();
                            getUsers(target);
                        }}>
                            <input className="form-control me-2" type="search" placeholder="Kullanıcı Adı Girin" aria-label="Search" ref={input} value={target} onChange={(e) => onChange(e)} />
                            <SearchButton type='submit'>Arama</SearchButton>
                        </form>
                    </div>
                </div>
            </OurNav>
        </>
    )
}
export default SearchBar