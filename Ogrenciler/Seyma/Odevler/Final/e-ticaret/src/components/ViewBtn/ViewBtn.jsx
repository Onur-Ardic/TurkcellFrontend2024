'use client'

import './viewbtn.sass'
import i18next from '../../i18n';

const ViewBtn = () => {
    return (
        <div>
            <button typeof='button' className='btn btn-lg viewBtn'>
                {i18next.t('viewbtn')}
            </button>
        </div>
    )
}

export default ViewBtn