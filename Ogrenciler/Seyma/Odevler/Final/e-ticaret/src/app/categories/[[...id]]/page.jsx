import FilterBar from '@/components/FilterBar/FilterBar'
import '../../categories/Categories.sass'
import BreadCrumbs from '@/components/Breadcrumbs/BreadCrumbs'
import { getData } from '@/api'



export default async function page(){    
    const data = await getData()

  return (
    <section>

      <div className='container-xxl'>
        <BreadCrumbs></BreadCrumbs>
        <div className='d-flex gap-3'>
          <div className='col-lg-3'>
            <FilterBar></FilterBar>
          </div>
         
          <div className='col-lg-9 productList'>
            <div className='d-flex justify-content-between'>
            <h4>Casual</h4>
          <div class="mb-3 d-flex align-items-center"><span class="d-inline-block me-2">Sort by</span>
              <div class="dropdown bootstrap-select dropup"><select class="selectpicker" name="sort" id="form_sort" data-style="btn-selectpicker border-0" title="" tabindex="null">
                <option value="sortBy_0">Default  </option>
                <option value="sortBy_1">Popularity </option>
                <option value="sortBy_2">Rating </option>
                <option value="sortBy_3">Newest first</option>
              </select>
          </div>
            </div>
            </div>
            <div className='categoriesContainer'>
            {data.map(item => (
            <div className="boxPrd">
                    <div className="mb-6">
                            <div className="imgContainer">
                                <a href="#"><img src={item.image} alt="" className="w-100"/></a>
                        </div>
                        <div>
                           
                            <h2 className="mt-3 fs-6"><a href="#" className="productTitle">{item.name}</a></h2>
                            <div className="text-warning">
                                <small>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-half"></i>
                                </small>
                                <span className="text-muted small">{item.rating}</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="price">${item.price}</span>
                                <span className="discountPrice">$24</span> 
                                <span className="badge rounded-pill">-45%</span>
                            </div>
                          
                        </div>
                    </div>
                </div>
            ))}
              
            </div>
           
          </div>

        </div>
      </div>
    </section>
  )
}
