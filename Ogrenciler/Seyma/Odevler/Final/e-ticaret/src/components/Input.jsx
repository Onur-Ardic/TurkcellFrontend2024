import i18next from '../i18n';

const Input = () => {
  return (
    <div> <form className='d-flex'>
        <i className="bi bi-search"></i>
    <input className="form-control" type= "text" placeholder={i18next.t('inputSearch')} aria-label="Search"/>
  </form></div>
  )
}

export default Input