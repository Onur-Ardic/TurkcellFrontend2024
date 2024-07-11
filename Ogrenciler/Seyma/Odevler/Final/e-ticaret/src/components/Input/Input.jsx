'use client';

import { useRouter } from 'next/navigation';
import i18next from '../../i18n';
import './input.sass';

const Input = () => {
  const router = useRouter();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      router.push(`/categories/${e.target.value}`);
    }
  };

  return (
    <div>
      <div className='d-flex searchForm'>
        <i className="bi bi-search"></i>
        <input
          type="text"
          onKeyUp={handleKeyPress}
          placeholder={i18next.t('inputSearch')}
          aria-label="Search"
        />
      </div>
    </div>
  );
};

export default Input;
