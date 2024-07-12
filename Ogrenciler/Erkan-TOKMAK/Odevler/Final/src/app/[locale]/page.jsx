
import { Container } from '@/styles/LayoutStyle';
import { useTranslations } from 'next-intl';
import {Link} from '../../navigation';
import Brands from '@/components/Brands/Brands';
import Hero from '@/components/Hero/Hero';
import NewArrivals from '@/components/Products/NewArrivals';
import TopSelling from '@/components/Products/TopSelling';
import BrowseDressStyle from '@/components/BrowseByDressStyle/BrowseDressStyle';
import HappyCustomer from '@/components/Comments/HappyCustomer';

export default function Home() {
    const t = useTranslations();
    return (
        <main>
            <Hero />
            <Brands />
            <Container>
            <NewArrivals />
            <TopSelling />
            <BrowseDressStyle />
            <HappyCustomer />
            </Container>
        </main>
    )
}
