import FilterBar from '@/components/FilterBar/FilterBar'
import '../../categories/Categories.sass'
import { getData } from '@/api'
import Link from 'next/link'


export default async function page({ params }) {
  let data = await getData()
  if (params.id != "" && params.id != null && params.id != undefined && params.id[0] != "all") {
    let searchParam = params.id[0].toLowerCase();
    data = data.filter(item =>
      item.name.toLowerCase().includes(searchParam) &&
      item.description.toLowerCase().includes(searchParam)
    )
  }

  // if (filter.Type != null){
  //   data =  data.filter(item => 
  //     item.type == filter.Type
  // )
  // }
  // if (filter.Color != null){
  //   data =  data.filter(item => 
  //     item.color == filter.Color
  // )
  // }
  return (
    <section className='background'>
      <div className='container-xxl'>
        <div className='d-flex gap-3'>
          <div className='col-lg-3'>
            <FilterBar></FilterBar>
          </div>
          <div className='col-lg-9 productList'>
            <div className='d-flex justify-content-between'>
              <h4>Casual</h4>
              <div className="mb-3 d-flex align-items-center"><span className="d-inline-block me-2">Sort by</span>
                <div className="dropdown bootstrap-select dropup">
                  <select className="selectpicker" name="sort" id="form_sort" data-style="btn-selectpicker border-0" title="" tabIndex="null">
                  <option value="sortBy_0">Default </option>
                  <option value="sortBy_1">Popularity </option>
                  <option value="sortBy_2">Rating </option>
                  <option value="sortBy_3">Newest first</option>
                </select>
                </div>
              </div>
            </div>
            <div className='categoriesContainer'>
              {data.map(item => (
                <Link href={`/productdetail/${item.id}`}>
                  <div className="boxPrd" key={item.id}>
                    <div className="mb-6">
                      <div className="imgContainer">
                       <img src={item.image} alt="" className="w-100" />
                      </div>
                      <div>
                        <h2 className="mt-3 fs-6 productTitle">{item.name}</h2>
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
