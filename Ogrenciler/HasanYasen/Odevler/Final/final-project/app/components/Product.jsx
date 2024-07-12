import Image from "next/image"
import Link from "next/link"

const Product = ({ productType, product, responsive }) => {
  return (
    <div className={`product-container col-6 col-lg-${responsive} p-3 card border border-0`}>
      <div className="product-image-container">
        <Link href={`/${productType}/product/${product.id}`}>
          <Image src={product?.imgUrl} width={200} height={250} className="img-fluid image" />
        </Link>
      </div>
      <p className="title mt-3">{product?.title}</p>
      <div className="rating d-flex gap-3">
        <Image src={product?.starImgUrl} width={80} height={17} className="image" />
        <p className="star fw-bold">{product?.star}<span className="fw-light">/5</span></p>
      </div>
      <div className="d-flex flex-wrap gap-2">
        <p className="price">${product?.price}</p>
        {product?.oldPrice && product.oldPrice != "" && <p className="oldPrice text-decoration-line-through">${product.oldPrice}</p>}
        {product?.discount && product.discount != "" && <p className="discount">{product.discount}</p>}
      </div>
    </div>
  )
}

export default Product