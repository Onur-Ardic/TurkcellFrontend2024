'use client'
import i18next from '../../i18n';

const ViewBtn = () => {
    return (
        <div>
            <button type='button' style={{
                margin: '25px',
                padding: '16px 54px',
                borderRadius: '62px',
                border: '1px solid black',
            }} className='btn btn-lg'>
                {i18next.t('viewbtn')}
            </button>

        </div>
    )
}

export default ViewBtn