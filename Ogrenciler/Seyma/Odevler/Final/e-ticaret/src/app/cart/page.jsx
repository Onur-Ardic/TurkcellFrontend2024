import './cart.sass';
import i18next from '../../i18n';
import trash from '../../../public/trash.svg';
import Image from 'next/image';

const page = () => {
  return (
    <div className='container-xxl'>
      <div >
      <h1 className='cartTitle my-4'>{i18next.t('yourcart')}</h1>
      <div className='gap-4 cartContent d-flex flex-wrap justify-content-center'>
        <div className='col-lg-6 col-md-10 col productsChoosen'>
          <div className='row productsChoosenDetail'>
            <div className='col-lg-3 col-md-10 col'>
              <div className="imgContainerCart mb-3">
                <a href="#"><img src="blacktshirt.png" alt="" className="w-100" /></a>
              </div>
            </div>
            <div className='col-lg-9 col-md-10 prdctDetailBox'>
              <h4>{i18next.t('exmpleTshirt')}</h4>
              <p>{i18next.t('size')}</p>
              <p>{i18next.t('color')}</p>
              <p>{i18next.t('color')}</p>
              <Image className='trash' src={trash} alt={""} />
              <button className='btn btn-lg addBtn'>- 1 +</button>
            </div>
          </div>

        </div>
        <div className='col-lg-5 col-md-10 col orderSummary'>
          <h4>{i18next.t('orderSummary')}</h4>
          <div className="cartTotal">
            <p> {i18next.t('subtotal')}</p>
            <p> {i18next.t('discount')}</p>
            <p> {i18next.t('deliveryfee')}</p>
          </div>
          <p>{i18next.t('total')}</p>
          <div className='d-flex gap-2 mb-2'>
            <input type="text" />
            <button className='btn applyBtn'>{i18next.t('apply')}</button>
          </div>
          <button className="btn checkOutBtn">{i18next.t('gotocheckout')}</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default page