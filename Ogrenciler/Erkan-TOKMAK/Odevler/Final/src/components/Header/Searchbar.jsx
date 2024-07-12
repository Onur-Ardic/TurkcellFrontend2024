import { SSearchBar, SearchBarContainer, SearchBarIconContainer } from '@/styles/ComponentStyle';
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchModal from '../SearchModal/SearchModal';

const Searchbar = () => {
    const t = useTranslations();
    return (
        <>
            <SearchBarContainer className='w-50 me-5'>
                <SearchBarIconContainer>
                <FontAwesomeIcon icon={faSearch} width={20.27} height={20.27}/>
                </SearchBarIconContainer>
                <SSearchBar type="text" placeholder={t('searchbar')} className="form-control" />
            </SearchBarContainer>
                <SearchModal />
        </>
    )
}

export default Searchbar

