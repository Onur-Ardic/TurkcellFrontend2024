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
      <div className='d-flex searchForm'>
        <i className="bi bi-search"></i>
        <input
        className='searchInput'
          typeof="text"
          onKeyUp={handleKeyPress}
          placeholder={i18next.t('inputSearch')}
          aria-label="Search"
        />
      </div>
  );
};

export default Input;
