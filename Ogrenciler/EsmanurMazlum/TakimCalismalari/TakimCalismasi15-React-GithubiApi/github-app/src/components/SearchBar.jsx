import React from 'react'

function SearchBar({ target, onChange, getUsers, input }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">Github Api</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex" role="search" onSubmit={(e) => {
                            e.preventDefault();
                            getUsers(target);
                        }}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" ref={input} value={target} onChange={(e) => onChange(e)} />
                            <button className="btn btn-outline-success" type='submit'>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default SearchBar