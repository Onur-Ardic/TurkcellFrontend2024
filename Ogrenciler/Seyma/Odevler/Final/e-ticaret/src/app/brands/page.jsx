import Image from 'next/image'
import gucci from '../../../public/gucci.svg'
import prada from '../../../public/prada.svg'
import zara from '../../../public/zara.svg'
import calvin from '../../../public/calvin.svg'
import versace from '../../../public/versace.svg'
import './brands.sass'

const page = () => {
  return (
    <div className="container-xxl d-flex flex-wrap justify-content-center my-4">
        <div className='d-flex flex-wrap justify-content-center space-between-around gap-5 brand'>
        <div className='boxBrand'><Image src={gucci}></Image></div>
        <div className='boxBrand'> <Image src={prada}></Image></div>
       <div className='boxBrand'> <Image src={zara}></Image></div>
       <div className='boxBrand'> <Image src={calvin}></Image></div>
       <div className='boxBrand'> <Image src={versace}></Image></div>
        </div>
    </div>
  )
}

export default page