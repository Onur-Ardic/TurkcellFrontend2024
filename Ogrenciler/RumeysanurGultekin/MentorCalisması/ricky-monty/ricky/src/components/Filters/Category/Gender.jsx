import React from 'react'
import FilterBtn from '../FilterBtn'

const Gender = ({ setGender, setPageNumber }) => {
  let genders = ["Female", "Male", "Genderless" , "Unknown"];
  return (
    <div>
        <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Gender
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex flex-wrap gap-3">
                  {genders.map((items, index) => (
                   <FilterBtn  key={index} name="gender" index={index} items={items} task={setGender} setPageNumber={setPageNumber} />) )}
                    
                </div>
                </div>
        </div>
    </div>
  )
}

export default Gender