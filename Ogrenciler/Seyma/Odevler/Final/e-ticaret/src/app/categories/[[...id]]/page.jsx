import FilterBar from '@/components/FilterBar/FilterBar'
import '../../categories/Categories.sass'
import ProductShow from '@/components/ProductShow/ProductShow'
import { getData } from '../../../api'

export default async function page({ params }) {
  let data = await getData()

  return (
    <section className='background'>
      <div className='container-xxl'>
        <div className='d-flex gap-3 p-3'>
          <div className='col-lg-3'>
            <FilterBar></FilterBar>
          </div>
          <div className='col-lg-9 productList row'>
          <ProductShow params={params} data={data}></ProductShow>
          </div>
        </div>
      </div>
    </section>
  )
}