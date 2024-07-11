import i18next from '../../i18n';
import './topBar.sass';

const TopBar = () => {
  return (
    <div className='topBarBg'>
      <div className='container-xxl'>
        <div className='topBar d-flex align-items-center justify-content-center'> 
          <div className='topBarContent'>{i18next.t('topbar')}
        </div> 
        <a className="signUpTop" href='#'>{i18next.t('signUpNow')}</a> 
        </div>
      </div>
    </div>
  )
}

export default TopBar