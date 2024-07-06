import {useState} from 'react'
const SortPanel = ({handleSort}) => {

    const [sort, setSort] = useState('default')

    const handleChange = (e) => {
        setSort(e.target.value)
        handleSort(e.target.value)}

    return (
        <div>
            <ul className="navbar-nav mb-2 mb-lg-0 ms-2">
                <li className="nav-item">
                    <select
                        onChange={handleChange}
                        value={sort}
                        className="form-select fw-medium"
                        id="sortSelect"
                        
                    >
                        <option value="default">Varsayılan Sıralama</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                        <option value="desc">Tarihe Göre Sırala (Yeni)</option>
                        <option value="asc">Tarihe Göre Sırala (Eski)</option>
                    </select>
                </li>
            </ul>
        </div>
    )
}

export default SortPanel
