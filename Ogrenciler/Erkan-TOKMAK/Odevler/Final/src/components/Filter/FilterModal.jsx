import React from 'react'
import Filter from './Filter'

const FilterModal = () => {
    return (
        <>
              <div className="modal fade"
                id="filterModal"
                tabIndex="-1"
                aria-labelledby="filterModal"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <Filter />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterModal