import React from 'react'
import FilterBtn from '../FilterBtn'

const Species = ({setSpecies, setPageNumber}) => {
  let species = ["Human", "Alien", "Humanoid", "Poopybutthole", "Unknown", "Animal", "Diasease", "Robot", "Cronenberg", "Planet", "Mythological"];
  return (
    <div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Species
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body d-flex flex-wrap gap-3">
                {species.map((items, index) =>(
                   <FilterBtn  task={setSpecies} key={index} name="species" index={index} items={items} setPageNumber={setPageNumber}/>

                ))}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Species