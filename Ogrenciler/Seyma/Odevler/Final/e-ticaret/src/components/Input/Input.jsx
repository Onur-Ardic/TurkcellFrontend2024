import i18next from '../../i18n';
import './input.sass'

const Input = () => {
  return (
    <div> 
      <form className='d-flex searchForm'>
      <i className="bi bi-search"></i>
    <input className="" type= "text" placeholder={i18next.t('inputSearch')} aria-label="Search"/>
  </form>
 
  </div>
  )
}

export default Input