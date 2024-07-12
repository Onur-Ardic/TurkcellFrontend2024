import Banner from '@/Components/Home/Banner/Banner'
import HappyCustomer from '@/Components/Home/HappyCustomer/HappyCustomer'
import Hero from '@/Components/Home/Hero/Hero'
import ProductsWrapper from '@/Components/Home/Products/ProductsWrapper'
import { useTranslations } from 'next-intl'

const HomePage = () => {
  const t = useTranslations('Deneme')
  return (
    <main>
      <Hero />
      <ProductsWrapper />
      <Banner />
      <HappyCustomer />
    </main>
  )
}

export default HomePage
